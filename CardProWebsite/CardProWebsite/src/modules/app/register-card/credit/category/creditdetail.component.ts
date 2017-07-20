import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }   from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';

@Component({
  selector: 'app-creditdetail',
  templateUrl: './creditdetail.component.html'
  
})
export class CreditdetailComponent implements OnInit {
  card: Card;
  cardes : Card[];
  selectedCard : Card;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.cardService.getCard(+params.get('id')))
      .subscribe(card => {
        this.card = card;
      });
    this.Getcardes();
  }
  Getcardes(): void {
  this.cardService.getCards().then(cardes => 
    {this.cardes = cardes;
    console.log(this.cardes);
    });
}


  goBack(): void {
  this.location.back();
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }


}
