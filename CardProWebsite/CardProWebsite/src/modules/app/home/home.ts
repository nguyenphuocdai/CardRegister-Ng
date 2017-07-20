import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    template: `
<div>
    <carousel></carousel>
</div>
<!--/slider-->

<!--=== Content Part ===-->
<div class="container content-sm ">
    <!-- Service Blocks -->
    <div class="headline">
        <h2>Sản phẩm</h2>
    </div>
    <div class="row">
        <div class="col-md-12 col-sm-12" style="border-radius: 15px 50px 30px 5px">
            <div class="col-sm-6 col-md-4 col-xs-6  ">
                <div class="thumbnail">
                    <img src="http://placehold.it/250x150&text=Galaxy S5" class="img-responsive">
                    <div class="caption">
                        <div class="row" >
                            <div class="col-md-12 col-xs-12">
                                <h3>Galaxy S5 Note5</h3>
                                <p>32GB, 2GB Ram, 1080HD, 5.1 inches, Android</p>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <a class="btn btn-primary btn-product" routerLink="register-credit"><span class="glyphicon glyphicon-thumbs-up"></span>Chi tiết</a>
                            </div>
                            <!--<div class="col-md-6 col-xs-6">
                                                                <a href="#" class="btn btn-success btn-product"><span class="glyphicon glyphicon-shopping-cart"></span>So sánh</a></div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xs-6  ">
                <div class="thumbnail">
                    <img src="http://placehold.it/250x150&text=Galaxy S5" class="img-responsive">
                    <div class="caption">
                        <div class="row" >
                            <div class="col-md-12 col-xs-12">
                                <h3>Galaxy S5 Note5</h3>
                                <p>32GB, 2GB Ram, 1080HD, 5.1 inches, Android</p>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <a class="btn btn-primary btn-product" routerLink="register-debit" ><span class="glyphicon glyphicon-thumbs-up"></span>Chi tiết</a>
                            </div>
                            <!--<div class="col-md-6 col-xs-6">
                                                                <a href="#" class="btn btn-success btn-product"><span class="glyphicon glyphicon-shopping-cart"></span>So sánh</a></div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xs-6  ">
                <div class="thumbnail">
                    <img src="http://placehold.it/250x150&text=Galaxy S5" class="img-responsive">
                    <div class="caption">
                        <div class="row" >
                            <div class="col-md-12 col-xs-12">
                                <h3>Galaxy S5 Note5</h3>
                                <p>32GB, 2GB Ram, 1080HD, 5.1 inches, Android</p>
                            </div>


                        </div>

                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <a class="btn btn-primary btn-product" routerLink="register-prepaid"><span class="glyphicon glyphicon-thumbs-up"></span>Chi tiết</a>
                            </div>
                            <!--<div class="col-md-6 col-xs-6">
                                                                <a href="#" class="btn btn-success btn-product"><span class="glyphicon glyphicon-shopping-cart"></span>So sánh</a></div>-->
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
    <!-- End Service Blokcs -->


    <!-- Info Blokcs -->
    <div class="row margin-bottom-30">
        <!-- Welcome Block -->
        <div class="col-md-8 md-margin-bottom-40">
            <div class="headline">
                <h2>Chào Mừng Đến Với Sacombank</h2>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <img class="img-responsive margin-bottom-20" src="" alt="">
                </div>
                <div class="col-sm-8">
                    <p>Hãy vững tâm thực hiện ước mơ và trút bỏ hết những lo lắng về an toàn tài chính cho Sacombank eBanking
                        – Cơ chế tự động đăng xuất!</p>
                    <ul class="list-unstyled margin-bottom-20">
                        <li><i class="fa fa-check color-green"></i> Nhấn phím Backspace trên bàn phím hoặc nút (trên trình duyệt
                            web)</li>
                        <li><i class="fa fa-check color-green"></i> Để cửa sổ trình duyệt quá 10 phút.</li>
                        <li><i class="fa fa-check color-green"></i> Vô tình click chuột nhiều lần trên chương trình.</li>
                        <li><i class="fa fa-check color-green"></i> Đăng nhập vào Sacombank iBanking từ một cửa sổ trình duyệt
                            khác.</li>
                    </ul>
                </div>
            </div>

            <blockquote class="hero-unify">
                <p>Award winning digital agency. We bring a personal and effective approach to every project we work on, which
                    is why. Unify is an incredibly beautiful responsive Bootstrap Template for corporate professionals.</p>
                <small>CEO, Jack Bour</small>
            </blockquote>
        </div>
        <!--/col-md-8-->

        <!-- Latest Shots -->
        <div class="col-md-4 col-xs-12">
            <div class="headline">
                <h2>Khuyến Mãi</h2>
            </div>
            <div id="myCarousel" class="carousel slide carousel-v1">
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="assets/img/img4.jpg" alt="">
                        <div class="carousel-caption">
                            <p>Facilisis odio, dapibus ac justo acilisis gestinas.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="assets/img/img2.jpg" alt="">
                        <div class="carousel-caption">
                            <p>Cras justo odio, dapibus ac facilisis into egestas.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="assets/img/img24.jpg" alt="">
                        <div class="carousel-caption">
                            <p>Justo cras odio apibus ac afilisis lingestas de.</p>
                        </div>
                    </div>
                </div>

                <div class="carousel-arrow">
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
        <!--/col-md-4-->
    </div>
    <!-- End Info Blokcs -->


</div>
<!--/container-->
<!-- End Content Part -->
    `
})
export class HomeComponent {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
    }
}