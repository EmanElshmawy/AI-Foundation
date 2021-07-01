import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { NewsService } from '../../../services/news.service';
import { CategoriesService } from '../../../services/categories.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  NewsList: any = [];
  homeNewList: any = [];
  categories: any = [];
  filterNews: any = [];
  searchForm: FormGroup;
  constructor(
    private http: HttpClient,
    private newsService: NewsService,
    private CategoriesService: CategoriesService,
    private fb: FormBuilder
  ) {
    subscription: Subscription;
    this.searchForm = this.fb.group({
      start_date: [],
      end_date: [],
      category: [],
      searchValue: [],
      sortBy: [],
    });
  }
  ngOnInit(): void {
    this.displayNews();
    this.displayCategories();
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Accounts Details                          */
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
              if (
                article.showOnHomepage === true &&
                article.description !== ''
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

  /* -------------------------------------------------------------------------- */
  /*                          display Categories Details                        */
  /* -------------------------------------------------------------------------- */

  displayCategories() {
    this.CategoriesService.getCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data) => {
          console.log(data);
          this.categories = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  sortFunction(
    a: { date: string | number | Date },
    b: { date: string | number | Date }
  ) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA < dateB ? 1 : -1;
  }

  sortBynameAtoZ(a: { title: any }, b: { title: any }) {
    var dateA = a.title;
    var dateB = b.title;
    return dateA > dateB ? 1 : -1;
  }
  sortBynameZtoA(a: { title: any }, b: { title: any }) {
    var dateA = a.title;
    var dateB = b.title;
    return dateA < dateB ? 1 : -1;
  }

  sortAsc() {
    this.homeNewList.sort(this.sortBynameAtoZ);
  }

  sortDesc() {
    this.homeNewList.sort(this.sortBynameZtoA);
  }

  // filter by categories

  searchByCategory() {
    let category = this.searchForm.controls.category.value;
    console.log(category);

    let selectedCategory: any;
    let filteredData: any = [];
    this.categories.forEach((e: any) => {
      console.log(e);
      console.log(category);
      if (e.name === category) {
        selectedCategory = e;
      }
    });
    this.NewsList.forEach((element: any) => {
      console.log(element);
      console.log(selectedCategory);
      if (element.sourceID === selectedCategory.id) {
        filteredData.push(element);
      }
    });
    this.homeNewList = filteredData;
    console.log(this.homeNewList);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
