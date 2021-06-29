import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {NewsListComponent} from './news-list/news-list.component'
import {SingleNewsComponent} from './single-news/single-news.component'


const routes: Routes = [
  {
    path:'',
    component:NewsListComponent,
  },
  {
    path:'details/:id',
    component:SingleNewsComponent
  },
  {
    path:'details/:id/:id',
    redirectTo:"details/:id",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
