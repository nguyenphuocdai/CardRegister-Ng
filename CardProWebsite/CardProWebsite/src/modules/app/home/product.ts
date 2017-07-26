import { Component, HostListener, Inject, OnInit} from '@angular/core';
import { PRODUCT } from '../_model/mock-product';
import { Product } from '../_model/product.interface';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'product',
    templateUrl: './product.html',
})
export class ProductComponent implements OnInit {
    public allProducts = PRODUCT;
    public product: Product[] = [];
    private currentIndex = 0;
    public numberOfResults = 5;
    private timer;

    constructor( @Inject(DOCUMENT)
    private document: Document) {
      
    }
    ngOnInit() { }

    getItems() {
        this.allProducts.forEach(
            (pro) => {
                let pro_index = this.allProducts.indexOf(pro);
                if (pro_index >= this.currentIndex
                    && pro_index < this.currentIndex + this.numberOfResults) {
                    this.product[pro_index] = pro;
                }
            }
        );
    }

    @HostListener("window:scroll", ['$event'])
    onWindowScroll() {
        if (this.timer) {
            window.clearTimeout(this.timer);
        }
        this.timer = window.setTimeout(() => {
            let number = this.document.body.scrollTop;
            console.log("height:" + number);
            console.log("currentIndex:" + this.currentIndex);
            console.log("number of Products: " + this.product.length);
            if (number > 300 && this.currentIndex < 50) {
                this.getItems();
                this.currentIndex += this.numberOfResults;
            }
        }, 1000);
    }

    //addItems(startIndex, endIndex) {
    //    for (let i = 0; i < this.sum; ++i) {
    //        this.product.push([i, ' ', this.generateWord()].join(''));
    //    }
    //}
    //onScrollDown() {
    //    console.log('scrolled!!');

    //    const start = this.sum;
    //    this.sum += 5;
    //    this.addItems(start, this.sum);
    //}
    //generateWord() {
    //    return chance.word();

   
}