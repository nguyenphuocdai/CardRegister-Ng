﻿import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.module';

@Component({
    selector: 'app-header',
    template: `
        <!--=== Header ===-->
		<div class="header header-sticky">
			<div class="container">
				<!-- Logo -->
				<a class="logo" href="#">
					<img src="src/assets/img/logoscb.png" alt="Logo">
				</a>
				<!-- End Logo -->

				<!-- Topbar -->
				<div class="topbar">
					<ul class="loginbar pull-right">
						<li class="hoverSelector">
							<i class="fa fa-globe"></i>
							<a>Languages</a>
							<ul class="languages hoverSelectorBlock">
								<li class="active">
									<a href="#">English <i class="fa fa-check"></i></a>
								</li>
								<li><a href="#">Spanish</a></li>
								<li><a href="#">Russian</a></li>
								<li><a href="#">German</a></li>
							</ul>
						</li>
						<li class="topbar-devider"></li>
						
						 <li><a routerLink="login">Login</a></li>
					</ul>
				</div>
				<!-- End Topbar -->

				<!-- Toggle get grouped for better mobile display -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="fa fa-bars"></span>
				</button>
				<!-- End Toggle -->
			</div><!--/end container-->

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse mega-menu navbar-responsive-collapse">
				<div class="container">
					<ul class="nav navbar-nav">
						<!-- Home -->
						<li class="">
							<a routerLink="" routerLinkActive="active" class="dropdown-toggle" data-toggle="dropdown">
								Trang chủ
							</a>
						</li>
						
						<!-- End Home -->
            <!--Chuyển tiền-->
            			<!-- <li class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
								Chuyển tiền
							</a>
							<ul class="dropdown-menu pull-left">
								<li><a href="#" >Nội Địa</a></li>
								<li><a href="#">Quốc tế</a></li>
								<li><a href="#">Khác</a></li>
							</ul>
						</li> -->
            <!--End chuyển tiền-->

            <!--Thanh toán hóa đơn-->
        			    <!-- <li class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
								Thanh toán hóa đơn
							</a>
							<ul class="dropdown-menu pull-left">
								<li><a href="#" >Nước</a></li>
								<li><a href="#">Điện</a></li>
								<li><a href="#">internet</a></li>
							</ul>
						</li> -->
            <!--End thanh toán hóa đơn-->
						<!-- Register Pages -->
						<li class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
								Đăng ký thẻ
							</a>
							<ul class="dropdown-menu pull-right">
								<li><a routerLink="credit" >Thẻ Credit</a></li>
								<li><a routerLink="debit" >Thẻ Debit</a></li>
								<li><a routerLink="prepaid" >Thẻ Prepaid</a></li>
							</ul>
						</li>
						<!-- End Register Pages -->
						
						<!-- Search Block -->
						<li>
							<i class="search fa fa-search search-btn"></i>
							<div class="search-open">
								<div class="input-group animated fadeInDown">
									<input type="text" class="form-control" placeholder="Tìm kiếm">
									<span class="input-group-btn">
										<button class="btn-u" type="button">Tìm kiếm</button>
									</span>
								</div>
							</div>
						</li>
						
						<!-- End Search Block -->
					</ul>
				</div><!--/end container-->
			</div><!--/navbar-collapse-->
		</div>
		<!--=== End Header ===-->
    `
})
export class HeaderComponent {
    title = 'CardProWebsite';
    routes = routes.filter((val) => val.path != '');

    constructor(private route: ActivatedRoute, private router: Router) {}

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }
}