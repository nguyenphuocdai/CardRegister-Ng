import { Component, OnInit, NgZone } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';

import { Feature } from '../../../_model/feature';
import { FEATURE } from '../../../_model/feature-card';
import { FeatureService } from '../../../_services/feature.service';

@Component({
    selector: 'app-creditdetail',
    templateUrl: './creditdetail.component.html',
    styleUrls: ['./creditdetail.component.css']

})
export class CreditdetailComponent implements OnInit {
    card: Card;
    cards: Card[] = [];
    cardes: Card[] = [];
    selectedCard: Card;
    cat_id: number;
    id: number;
    features: Feature[] = [];
    private selectUndefinedOptionValue: any;

    constructor(
        private cardService: CardService,
        private featureService : FeatureService,
        private route: ActivatedRoute,
        private location: Location,
        private Zone: NgZone
    ) {
        this.Getcardes();
    }

    ngOnInit(): void {
        this.route.params
            .subscribe(params => {
                this.cat_id = +params['cat_id'];
                this.id = +params['id'];
                this.cardService.getDetailCards(this.cat_id)
                    .then(cards => {
                        this.Zone.run(
                            () => {
                                this.cards = cards;
                                console.log(this.cards + ' log ok');
                            });
                    });
                this.getCard();
                this.GetFeature();
            });


    }
    getCard(): void {
        this.cardService.getDetailCard(this.id, this.cat_id).then(card => {
            this.Zone.run(
                () => {
                    this.card = card;
                    
                });

        });
    }

    //compare
    Getcardes(): void {
        this.cardService.getCardes()
            .then(card => {
                this.cardes = card;
                console.log(this.cardes);
            });
    }

    goBack(): void {
        this.location.back();
    }

    onSelect(card: Card): void {
        this.Zone.run(
            () => {
                this.selectedCard = card;
            });
    }
    //feature
    GetFeature(): void {
        this.featureService.getFeatures()
            .then(feature => {
                this.features = feature;
                console.log(this.features);
            });
    }

    HasFeature(features: number[], feature_id: number): boolean {
        for (let i = 0; i < features.length; i++) {
            if (features[i] == feature_id)
                return true;
        }
        return false;
    }

}
