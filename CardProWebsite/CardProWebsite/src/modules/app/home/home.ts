import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {

    constructor(private route: ActivatedRoute) {
            }

    ngOnInit() {
    }
}