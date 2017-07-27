import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
})

export class CarouselComponent implements OnInit {
  public images = IMAGES;
  constructor() { }

  ngOnInit() {
  }

}
// add image -> binding to view 
var IMAGES: Image[] = [
	{ "title": "We are covered", "url": "./src/assets/img/10.jpg" },
	{ "title": "Generation Gap", "url": "./src/assets/img/10.jpg" },
	{ "title": "Potter Me", "url": "./src/assets/img/10.jpg" },
	{ "title": "Pre-School Kids", "url": "./src/assets/img/10.jpg" },
	{ "title": "Young Peter Cech", "url": "./src/assets/img/10.jpg" }	
];