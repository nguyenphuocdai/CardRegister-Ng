import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register-credit',
    templateUrl: './credit.html',
    styleUrls: ['./credit.css']
})
export class CreditComponent implements OnInit {

  countries = [
       {id: 1, name: "An Giang"},
       {id: 2, name: "Bà Rịa - Vũng Tàu"},
       {id: 3, name: "Hồ Chí Minh"},
       {id: 4, name: "Bình Dương"},
       {id: 5, name: "Bình Phước"},
       {id: 6, name: "Hà Nội"},
     ];
    
  averagee = [
       {id: 1, money: "< 7 triệu"},
       {id: 2, money: "~ 7 - 20 triệu"},
       {id: 3, money: "> 20 triệu"},
     ];
    selectedValuecountries = null;

    selectedValueaverage = null;
    Item = [
        { id: 1, name: 'Cate1' },
        { id: 2, name: 'Cate2' },
        { id: 3, name: 'Cate3' },
        { id: 4, name: 'Cate4' }
    ];

  
  constructor( ) { }

  ngOnInit() {
  }

}
