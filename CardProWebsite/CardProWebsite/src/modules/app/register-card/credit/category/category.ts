import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-category',
    templateUrl: './category.html'
})
export class CategoryComponent implements OnInit {
    cardes: Card[] = [];
    id: number;

    constructor(
        private cardService: CardService,
        private Zone: NgZone,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cardService.getCards(+params.get('cat_id')))
            .subscribe(card => {
                this.cardes = card;
            });
        //this.getCardes(this.id);
    }
    getCardes(): void {
        this.cardService.getCards(this.id).then(cardes => {
            this.Zone.run(() => {
                this.cardes = cardes;
            });

        });

    }

    // goBack(): void {
    //   this.location.back();
    // }

}
