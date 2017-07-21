import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';
@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html'
})
export class Category2Component implements OnInit {
  cardes: Card[] = [];

  constructor(

      private cardService: CardService,
      private Zone: NgZone
  ) { }

  getCardes(): void {
      this.cardService.getCards().then(cardes => {
          this.Zone.run(() => {
              this.cardes = cardes.slice(7, 10);
          });

      });

  }


  ngOnInit(): void {
    this.getCardes();
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
