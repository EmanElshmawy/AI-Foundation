import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { Subject, Subscription } from "rxjs";
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy   {
  unsubscribe$ = new Subject<void>();
  NewsList : any;

  constructor(private http: HttpClient, private newsService: NewsService) {
    subscription: Subscription;

  }
  ngOnInit(): void {
    this.displayNews();
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Accounts Details                             */
  /* -------------------------------------------------------------------------- */

  displayNews() {
    this.newsService
      .getNews()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data) => {
          console.log(data)
          this.NewsList = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


