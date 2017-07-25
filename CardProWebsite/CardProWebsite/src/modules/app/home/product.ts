import { Component } from '@angular/core';
import { PRODUCT } from '../_model/mock-product';
@Component({
    selector: 'product',
    templateUrl: './product.html',
})
export class ProductComponent {
    public product = PRODUCT;
    constructor() {
    }

    ngOnInit() {
    }


}