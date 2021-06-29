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
      src: '../../../../assets/img/homepage/Layer1Mobile.jpg',
      alt: 'Carousel 1',
      title: 'Carousel 1',
    },
    {
      id: 2,
      src: '../../../../assets/img/homepag/Layer17Mobile.jpg',
      alt: 'Carousel 2',
      title: 'Carousel 2',
    },
  ];
  public innerWidth: any;

  constructor() {}
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    event.target.innerWidth;
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth = window.innerWidth)
  }
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 750,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

}
