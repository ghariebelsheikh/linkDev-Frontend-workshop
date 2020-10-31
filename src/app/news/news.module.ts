import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

import { NewsDetailsComponent } from './news-details/news-details.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsFilterComponent } from './news-filter/news-filter.component';
import { RelatedTopicsComponent } from './related-topics/related-topics.component';


@NgModule({
  declarations: [NewsDetailsComponent, AllNewsComponent, NewsFilterComponent, RelatedTopicsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule
  ]
})
export class NewsModule { }
