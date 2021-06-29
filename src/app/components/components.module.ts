import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NewsComponent } from './homepage/news/news.component';
import { BannerSliderComponent } from './homepage/banner-slider/banner-slider.component';
import { ServicesComponent } from './homepage/services/services.component';
@NgModule({
  declarations: [
    HomepageComponent,
    NewsComponent,
    BannerSliderComponent,
    ServicesComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule],
  exports: [HomepageComponent],
})
export class ComponentsModule { }
