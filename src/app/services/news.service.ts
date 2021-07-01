import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(`${this.baseUrl}e2534d5412765bf36702/articles`);
  }
  getNewById(id : number) {
    return this.http.get(`${this.baseUrl}e2534d5412765bf36702/articles/${id}`);
  }
}
