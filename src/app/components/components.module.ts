import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './homepage/news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';
import { BannerSliderComponent } from './homepage/banner-slider/banner-slider.component';
import { ServicesComponent } from './homepage/services/services.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NewsComponent,
    NewsListComponent,
    SingleNewsComponent,
    BannerSliderComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomepageComponent,
    NewsComponent,
  ]
})
export class ComponentsModule { }
