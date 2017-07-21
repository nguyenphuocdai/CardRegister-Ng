import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-category',
    templateUrl: './category.html',
    styleUrls : ['./category.css'],
})
export class CategoryComponent implements OnInit {
        cards: Card;
    cardes: Card[] = [];
    id: number;
    cat_id: number;

    constructor(
        private cardService: CardService,
        private Zone: NgZone,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cardService.getCards(+params.get('id')))
            .subscribe(card => {
                this.Zone.run(
                    () => {
                    this.cardes = card;
                    });
            });
        this.getCardes();
        console.log(this.cardes + ' log ok');
    }
    getCardes(): void {
        this.cardService.getCard(this.cat_id,this.id).then(cardes => {
            this.Zone.run(
                () => {
                    this.cards = cardes;
            });
           
        });

    }
   
    //getCardOfCate(): void
    //{
    //    this.cardService.getCard(this.cat_id,this.id).then(cardofcate => {
    //        this.Zone.run(
    //            () => { cardofcate == cardofcate });
    //        console.log(cardofcate);
                
    //});
    //}



    // goBack(): void {
    //   this.location.back();
    // }

}
