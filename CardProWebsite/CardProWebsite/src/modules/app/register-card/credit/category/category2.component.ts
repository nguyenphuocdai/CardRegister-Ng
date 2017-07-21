import { Component, OnInit } from '@angular/core';
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
  ) { }

  getCardes(): void {
    this.cardService.getCards().then(cardes => this.cardes = cardes.slice(4, 7))
  }


  ngOnInit(): void {
    this.getCardes();
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
