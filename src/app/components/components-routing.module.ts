import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsModule } from './news/news.module';

const routes: Routes = [
{
    path:'home',
    component: HomepageComponent
  },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
