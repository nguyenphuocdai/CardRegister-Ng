import { Component } from '@angular/core';
import { AuthService } from './modules/app/_services/auth.service';

@Component({
    selector: 'app-root',
    template: `
    <div class="wrapper">
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
     </div>
    `
})
export class AppComponent {
    url: string;
    logoUrl: string;

    constructor(public auth: AuthService) {
        this.logoUrl = require("./assets/img/logo.png");
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
        auth.handleAuthentication();
    }
}
