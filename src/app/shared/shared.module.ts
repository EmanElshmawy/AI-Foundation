import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CopywriteComponent } from './copywrite/copywrite.component';
import {RouterModule} from '@angular/router';
import { SharedNewsComponent } from './shared-news/shared-news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CopywriteComponent,
    SharedNewsComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CopywriteComponent,
    SharedNewsComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
