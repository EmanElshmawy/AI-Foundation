import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  NewsList: any =[];
  homeNewList: any =[];

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
          this.NewsList = data;
          this.NewsList.forEach(
            (article: { showOnHomepage: boolean; description: any }) => {
              if (article.showOnHomepage === true && article.description !== ''
              ) {
                this.homeNewList.push(article);
              }
            }
          );

          this.homeNewList.sort(this.sortFunction);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  sortFunction(
    a: { publishedAt: string | number | Date },
    b: { publishedAt: string | number | Date }
  ) {
    var dateA = new Date(a.publishedAt).getTime();
    var dateB = new Date(b.publishedAt).getTime();
    return dateA < dateB ? 1 : -1;
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
