import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';
@Component({
    selector: 'app-category1',
    templateUrl: './category1.component.html'
})
export class Category1Component implements OnInit {
    cardes: Card[] = [];

    constructor(
        private cardService: CardService, private zone: NgZone  
    ) {
    }

    ngOnInit(): void {
        this.getCardes();
    }
    getCardes(): void {
        this.cardService.getCards().then(cardes => {
            this.zone.run(() => {
                this.cardes = cardes.slice(0, 4);
                console.log(this.cardes);
            });
        })

    }

    // goBack(): void {
    //   this.location.back();
    // }

}
