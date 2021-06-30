import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss'],
})
export class BannerSliderComponent implements OnInit {
  slideObject = [
    {
      id: 1,
      src: '../../../../assets/img/homepage/Layer1Mobile@2x.jpg',
      alt: 'Carousel-1',
      title: 'Carousel-1',
    },
    {
      id: 2,
      src: '../../../../assets/img/homepage/slider2Mobile@2x.jpg',
      alt: 'Carousel-2',
      title: 'Carousel-2',
    },
    {
      id: 2,
      src: '../../../../assets/img/homepage/Layer17Mobile@2x.jpg',
      alt: 'Carousel-2',
      title: 'Carousel-2',
    }
  ];
  public innerWidth: any;

  constructor() {}

  ngOnInit(): void {
  }
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    lazyLoad: true,
    dots: true,
    navSpeed: 750,
    nav: true,
    navText:["<div class='nav-btn prev-slide'><i class='fas fa-angle-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fas fa-angle-right'></i></div>"],
    responsive: {
      0: {
        items: 1,
      },
    }
  };

}
