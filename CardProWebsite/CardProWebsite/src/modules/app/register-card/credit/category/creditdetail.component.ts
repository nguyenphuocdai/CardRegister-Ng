import { Component, OnInit, NgZone } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../../_model/card';
import { CARDES } from '../../../_model/mock-card';
import { CardService } from '../../../_services/card.service';

@Component({
    selector: 'app-creditdetail',
    templateUrl: './creditdetail.component.html'

})
export class CreditdetailComponent implements OnInit {

    card : Card;
    cards: Card[] = [];
    selectedCard: Card;
    cat_id: number;
    id: number;

    constructor(
        private cardService: CardService,
        private route: ActivatedRoute,
        private location: Location,
        private Zone: NgZone
    ) { 

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
        });

        
    }
    getCard(): void {
        this.cardService.getgetDetailCard(this.id, this.cat_id).then(card => {
            this.Zone.run(
                () => {
                    this.card = card;
                    console.log(this.card);
                    console.log(this.card.url);
                });
           
        });
    }

    goBack(): void {
        this.location.back();
    }

    onSelect(card: Card): void {
        this.selectedCard = card;
    }


}
