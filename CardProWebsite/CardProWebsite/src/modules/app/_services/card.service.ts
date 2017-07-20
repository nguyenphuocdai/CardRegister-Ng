import { Injectable } from '@angular/core';
import { Card } from '../_model/card';
import { CARDES } from '../_model/mock-card';
@Injectable()
export class CardService {

  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDES);
  }
  constructor() { }
  getCard(id: number): Promise<Card> {
    return this.getCards()
               .then(cards => cards.find(card => card.id === id));
  }
}
