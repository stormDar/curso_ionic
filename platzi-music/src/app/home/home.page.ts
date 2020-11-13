import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpt = {
    initialSlide: 0,
    slidesperView: 1,
    centeredSlides: true,
    speed: 400,
  };
  
  constructor() {}

}
