import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-news',
  templateUrl: './shared-news.component.html',
  styleUrls: ['./shared-news.component.scss'],
})
export class SharedNewsComponent implements OnInit {
  @Input() NewsList: any = [];
  activePage: number = 0;
  paginationData: any;
  p: number = 1;
  isHome: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
    if(this.NewsList){
      this.NewsList.sort(this.sortFunction);
    }
  }
  sortFunction(
    a: { date: string | number | Date },
    b: { date: string | number | Date }
  ) {
    var dateA = new Date(this.formatDateFun(a.date)).getTime();
    var dateB = new Date(this.formatDateFun(b.date)).getTime();
    return dateA < dateB ? 1 : -1;
  }
  formatDateFun(date:any) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  // pagination
  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
  }

  checkCurrentRoute() {
    if (this.route.snapshot.routeConfig?.path == 'home') {
      this.isHome = true;
    }
  }
}
