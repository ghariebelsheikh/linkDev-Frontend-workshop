import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../news/article.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getLatestArticles().subscribe((artilcles) => {
      this.articles = artilcles;
    });
  }

}
