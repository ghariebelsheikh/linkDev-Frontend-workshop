import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }


  getCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/sourceCategory`);
  }

  getCategory(id) {
    return this.http.get<Category>(`${this.baseUrl}/sourceCategory/${id}`);
  }
}
