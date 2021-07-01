import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CopywriteComponent } from './copywrite/copywrite.component';
import {RouterModule} from '@angular/router';
import { SharedNewsComponent } from './shared-news/shared-news.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CopywriteComponent,
    SharedNewsComponent,
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
    SharedNewsComponent
  ]
})
export class SharedModule {}
