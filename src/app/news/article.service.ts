import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getLatestArticles() {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  getArticles() {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  getArticle(id) {
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`);
  }
}
