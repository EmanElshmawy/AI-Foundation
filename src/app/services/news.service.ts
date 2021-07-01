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
    return this.http.get(`${this.baseUrl}articles`);
  }
}
