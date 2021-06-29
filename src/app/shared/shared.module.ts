import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CopywriteComponent } from './copywrite/copywrite.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CopywriteComponent,
  ],
  imports: [CommonModule],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CopywriteComponent,
  ]
})
export class SharedModule {}
