import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.baseUrl}c138bb84dc0b94ec5a18/sourceCategory`);
  }

}
