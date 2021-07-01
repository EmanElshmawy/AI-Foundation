import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { NewsService } from '../../../services/news.service';
import { CategoriesService } from '../../../services/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  subscription: Subscription | undefined;
  allNews: any = [];
  categories: any = ['All category'];
  filterNews: any = [];
  searchForm: FormGroup;
  resetRows: any;

  constructor(
    private http: HttpClient,
    private newsService: NewsService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder
  ) {
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
  /*                                 date formate                           */
  /* -------------------------------------------------------------------------- */

  formatDateFun(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  /* -------------------------------------------------------------------------- */
  /*                          display News                           */
  /* -------------------------------------------------------------------------- */

  displayNews() {
    this.newsService
      .getNews()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data) => {
          this.allNews = data;
          // this.allNews.sort(this.sortFunction);
          this.resetRows = this.allNews;
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
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data) => {
          this.categories = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /* -------------------------------------------------------------------------- */
  /*                          sort Ato Z                                       */
  /* -------------------------------------------------------------------------- */
  sortBynameAtoZ(a: any, b: any) {
    var dateA = a.title;
    var dateB = b.title;
    return dateA > dateB ? 1 : -1;
  }

  sortAsc() {
    this.allNews.sort(this.sortBynameAtoZ);
  }

  /* -------------------------------------------------------------------------- */
  /*                          sort z to A                                      */
  /* -------------------------------------------------------------------------- */
  sortBynameZtoA(a: any, b: any) {
    var dateA = a.title;
    var dateB = b.title;
    return dateA < dateB ? 1 : -1;
  }
  sortDesc() {
    this.allNews.sort(this.sortBynameZtoA);
  }
  /* -------------------------------------------------------------------------- */
  /*                          search by Cateegory                         */
  /* -------------------------------------------------------------------------- */
  searchByCategory() {
    this.allNews = this.resetRows;
    let category = this.searchForm.controls.category.value;
    let selectedCategory: any;
    let filteredData: any = [];
    this.categories.forEach((e: any) => {
      if (e.name === category) {
        selectedCategory = e;
      }
    });
    this.allNews.forEach((element: any) => {
      if (element.sourceID === selectedCategory.id) {
        filteredData.push(element);
      }
    });
    this.allNews = filteredData;
  }
  /* -------------------------------------------------------------------------- */
  /*                                   search                                   */
  /* -------------------------------------------------------------------------- */

  search(event: any) {
    if (event.keyCode === 13) {
      this.searchByName();
    }
  }
  searchByName() {
    this.resetFilter();
    let term: any = this.searchForm.controls.searchValue.value.toLowerCase();

    let filterArr = this.allNews.filter(function (e: any) {
      return e['title'].toLowerCase().includes(term.toLowerCase());
    });
    this.allNews = filterArr;
    if (term == '') {
      this.allNews = this.resetRows;
    }
  }
  /* --------------------------------------------------------------------- */
  /*                            search  by date                            */
  /* --------------------------------------------------------------------- */
  searchByDate() {
    this.allNews = this.resetRows;
    let fromDate = this.searchForm.controls.start_date.value;
    let toDate = this.searchForm.controls.end_date.value;

    let filterDate = this.allNews.filter((e: any) => {
      let articleDate = this.formatDateFun(e.publishedAt);
      if (fromDate && toDate) {
        return articleDate >= fromDate && articleDate <= toDate;
      }
      return true;
    });

    this.allNews = filterDate;
    if (fromDate == '' || toDate == '') {
      this.allNews = this.resetRows;
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                          reset the filter                           */
  /* -------------------------------------------------------------------------- */

  resetFilter() {
    this.allNews = this.resetRows;
    this.searchForm.reset();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
