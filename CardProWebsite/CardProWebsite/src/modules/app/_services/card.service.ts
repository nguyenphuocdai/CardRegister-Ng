import { Injectable } from '@angular/core';
import { Card } from '../_model/card';
import { CARDES } from '../_model/mock-card';
@Injectable()
export class CardService {

    getCards(id: number): Promise<Card[]> {
        return Promise.resolve(CARDES).then(cards => cards.filter(card => card.cat_id == id));
  }
  constructor() { }
  getCard(cat_id: number, id: number): Promise<Card> {
      return this.getCards(cat_id)
               .then(cards => cards.find(card => card.id === id));
  }
}
