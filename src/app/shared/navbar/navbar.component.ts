import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapseSearch: boolean = false;
  collapseMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  searchCollapse() {

    return this.collapseSearch = !this.collapseSearch;
  }
  menuCollapse(){
    return this.collapseMenu = !this.collapseMenu;
  }
}
