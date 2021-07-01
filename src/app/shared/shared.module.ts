import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CopywriteComponent } from './copywrite/copywrite.component';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedNewsComponent } from './shared-news/shared-news.component';

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
    NgbModule],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CopywriteComponent,
    SharedNewsComponent
  ]
})
export class SharedModule {}
