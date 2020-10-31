import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((artilcles) => {
      this.articles = this.filteredArticles = artilcles;
    });
  }

  filterWithCategory(categoryId: number) {
    this.filteredArticles = categoryId ? this.articles.filter(article => article.sourceID === categoryId) : this.articles;
  }

  filter(query: string) {
    this.filteredArticles =
      query ? this.articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase())) : this.articles;
  }

  sort(flag: boolean) {
    console.log(flag);
    this.articles.sort((a, b) => {
      if (flag) {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      } else {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });
  }

}

