﻿import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { CategoryComponent } from './register-card/credit/category/category';
import { CreditdetailComponent } from "./register-card/credit/category/Creditdetail.component";
import { CommonModule } from "@angular/common";
import { NgSwitch, NgSwitchCase } from "@angular/common";
import { FeatureService } from "./_services/feature.service";
import { AuthService } from "./_services/auth.service";
import { ProductComponent } from "./home/product";
import { CardProductComponent } from "./home/card-product";

//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

export const routes: Routes = [

    { path: '', component: HomeComponent, data: { title: 'Trang chủ', name: 'Giới thiệu' } },

    {
        path: 'credit', component: CreditComponent, data: { title: 'Thẻ thanh toán', name: 'Đăng ký' },
        children: [
            { path: '', redirectTo: 'category/1', pathMatch: 'full' },
            { path: 'category/:id', component: CategoryComponent },
            { path: 'category/:cat_id/:id', component: CreditdetailComponent }
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
        CreditdetailComponent,
        CategoryComponent,
        ProductComponent,
        CardProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        InfiniteScrollModule,
        RouterModule.forRoot(routes),
    ],
    providers: [CardService, FeatureService, AuthService],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

})
export class AppModule { }
