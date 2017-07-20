import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';
@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html'
})
export class Category4Component implements OnInit {
  cardes: Card[] = [];

  constructor(

    private cardService: CardService,
  ) { }

  getCardes(): void {
    this.cardService.getCards().then(cardes => this.cardes = cardes.slice(10, 13))
  }


  ngOnInit(): void {
    this.getCardes();
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
