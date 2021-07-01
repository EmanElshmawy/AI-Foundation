import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { Subject, Subscription } from "rxjs";
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-shared-news',
  templateUrl: './shared-news.component.html',
  styleUrls: ['./shared-news.component.scss']
})
export class SharedNewsComponent implements OnInit {
    @Input() NewsList:any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.NewsList)
  }

}
