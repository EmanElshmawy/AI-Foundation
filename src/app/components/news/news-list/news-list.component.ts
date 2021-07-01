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
  /*                          display Accounts Details                          */
  /* -------------------------------------------------------------------------- */

  displayNews() {
    this.newsService
      .getNews()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (data) => {
          console.log(data);

          this.allNews = data;
          // this.allNews.sort(this.sortFunction);
          this.resetRows = this.allNews;
          console.log(this.allNews);

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

  // sortFunction(
  //   a: { date: string | number | Date },
  //   b: { date: string | number | Date }
  // ) {

  //   var dateA = new Date(this.formatDateFun(a.date)).getTime();
  //   var dateB = new Date(this.formatDateFun(b.date)).getTime();
  //   return dateA < dateB ? 1 : -1;
  // }

  sortBynameAtoZ(a:any, b:any) {
    var dateA = a.title;
    var dateB = b.title;
    return dateA > dateB ? 1 : -1;
  }
  sortBynameZtoA(a: any, b: any) {
    var dateA = a.title;
    var dateB = b.title;
    return dateA < dateB ? 1 : -1;
  }

  sortAsc() {
    this.allNews.sort(this.sortBynameAtoZ);
  }

  sortDesc() {
    this.allNews.sort(this.sortBynameZtoA);
  }

  // filter by categories

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
  // filter by name

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
    console.log(this.allNews);
    if (term == '') {
      this.allNews = this.resetRows;
    }
  }
  searchByDate() {
    this.allNews = this.resetRows;
    let fromDate = this.searchForm.controls.start_date.value;
    let toDate = this.searchForm.controls.end_date.value;

    let filterDate = this.allNews.filter( (e: any) => {
      let articleDate = this.formatDateFun(e.publishedAt);
      if (fromDate && toDate) {
        return articleDate >= fromDate && articleDate <= toDate;
      }
      return true;
    });
    console.log(filterDate);

    this.allNews = filterDate;
    if (fromDate == '' || toDate == '') {
      this.allNews = this.resetRows;
    }

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
  resetFilter(){
    this.allNews = this.resetRows;
    this.searchForm.reset();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
