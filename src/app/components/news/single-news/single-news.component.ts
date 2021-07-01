import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { NewsService } from '../../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import {CategoriesService} from '../../../services/categories.service';
@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  NewsList: any =[];
  articleDetails :any = {};
  category: any ;
  isLoading = false;
  constructor(
    private http: HttpClient,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private CategoriesService:CategoriesService) {
    subscription: Subscription;
  }
  ngOnInit(): void {
    this.displayArticle();
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Accounts Details                             */
  /* -------------------------------------------------------------------------- */
  displayArticle() {
    this.isLoading = true;
    this.newsService
      .getNewById(this.route.snapshot.params["id"])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data) => {
          this.articleDetails = data;
          this.displayCategory( this.articleDetails.sourceID)
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }

  displayCategory(id : number){
    this.CategoriesService.getCategoryById(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data : any) => {
          // this.articleDetails = data;
          this.category = data['name'];
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
