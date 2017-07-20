import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
//home
import { HomeComponent } from './home/home';
import { CarouselComponent } from './home/slider-carousel/carousel';
//register-credit
import { CreditComponent } from './register-card/credit/credit';
import { CRCreditComponent } from './register-card/credit/carousel-register-credit';
import { AppComponent } from "../../app.component";
import {DebitComponent} from './register-card/debit/debit';
//service
import { CardService } from './_services/card.service';
//category-credit
import { Category1Component } from './register-card/credit/category/category1.component';
import { Category2Component } from "./register-card/credit/category/category2.component";

import { Category3Component } from "./register-card/credit/category/category3.component";
import { Category4Component } from "./register-card/credit/category/category4.component";
import { CreditdetailComponent } from "./register-card/credit/category/Creditdetail.component";

export const routes: Routes = [

    { path: '', component: HomeComponent, data: { title: 'Trang chủ', name: 'Giới thiệu' } },

    {
        path: 'credit', component: CreditComponent, data: { title: 'Thẻ thanh toán', name: 'Đăng ký' },
        children: [
            { path: '', redirectTo: 'category1', pathMatch: 'full' },
            { path: 'category1', component: Category1Component },
            { path: 'category2', component: Category2Component },
            { path: 'category3', component: Category3Component },
            { path: 'category4', component: Category4Component },
            { path: 'category1/:id', component: CreditdetailComponent },
            { path: 'category2/:id', component: CreditdetailComponent },
            { path: 'category3/:id', component: CreditdetailComponent },
            { path: 'category4/:id', component: CreditdetailComponent }
        ],
    },

    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [
        HomeComponent,
        CarouselComponent,
        CreditComponent,
        CRCreditComponent,
        DebitComponent,
        Category1Component,
        Category2Component,
        Category3Component,
        Category4Component,
        CreditdetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers:[CardService],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

})
export class AppModule { }
