import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { SingleNewsComponent } from './single-news/single-news.component';

@NgModule({
  declarations: [SingleNewsComponent, NewsListComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
