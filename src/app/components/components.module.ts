import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NewsComponent } from './homepage/news/news.component';
import { BannerSliderComponent } from './homepage/banner-slider/banner-slider.component';
import { ServicesComponent } from './homepage/services/services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    HomepageComponent,
    NewsComponent,
    BannerSliderComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ComponentsRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [HomepageComponent],
})
export class ComponentsModule {}
