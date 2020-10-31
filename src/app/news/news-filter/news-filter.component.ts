import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId;
  isAscending = true;

  @Output() filterItem = new EventEmitter<number>();
  @Output() searchQuery = new EventEmitter<string>();
  @Output() sortFlag = new EventEmitter<boolean>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onFilterWithCategory() {
    this.filterItem.emit(this.selectedCategoryId);
  }

  onSearch(value) {
    this.searchQuery.emit(value);
  }

  onSort() {
    this.isAscending = !this.isAscending;
    this.sortFlag.emit(this.isAscending);
  }

}
