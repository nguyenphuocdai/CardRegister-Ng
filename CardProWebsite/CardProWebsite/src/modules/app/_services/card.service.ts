import { Injectable } from '@angular/core';
import { Card } from '../_model/card';
import { CARDES } from '../_model/mock-card';
@Injectable()
export class CardService {

    //get card of id
    getCards(id: number): Promise<Card[]> {
        return Promise.resolve(CARDES).then(cards => cards.filter(card => card.cat_id == id));
    }
    //get id card of cat_id
  constructor() { }
    getCard(cat_id: number, id: number): Promise<Card> {
      return this.getCards(cat_id)
          .then(cards => cards.find(card => card.id === id));
    }
    //get all card
    getCardes(): Promise<Card[]> {
      return Promise.resolve(CARDES);
     }
  //get name card 
    getDetailCards(cat_id: number): Promise<Card[]>
    {
        return Promise.resolve(CARDES).then(cards => cards.filter(card => card.cat_id == cat_id))
    }
    getgetDetailCard(id: number,cat_id: number): Promise<Card>
    {
        return this.getDetailCards(cat_id)
            .then(cards => cards.find(card => card.id === id));
    }

}
