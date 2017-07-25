import { Component, Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from '../modules/app/app.module';
import { AuthService } from '../modules/app/_services/auth.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.html',
})
export class HeaderComponent {
    title = 'CardProWebsite';
    routes = routes.filter((val) => val.path != '');

    constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService) {
       
    }

    isActive(path: string): boolean {
        return this.router.url.substring(1) === path;
    }
}