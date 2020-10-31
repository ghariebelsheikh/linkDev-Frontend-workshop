import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Article } from 'src/app/models/article';
import { CategoryService } from '../category.service';
import { ArticleService } from '../article.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  category: Category;
  article: Article;
  attachments = ['AL Jalila Foundation.PDF', 'AL Jalila Foundation.PDF'];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getArticle();
  }

  getArticle() {
    this.route.params.pipe(switchMap(({ id }) => {
      return this.articleService.getArticle(id);
    })).subscribe((article) => {
      console.log(article);
      this.article = article;
    });
  }


  getCategory() {
    this.route.queryParamMap.pipe(switchMap((queryParams: any) => {
      return this.categoryService.getCategory(queryParams.params.categoryId);
    })).subscribe((category) => {
      console.log(category);
      this.category = category;
    });
  }
}
