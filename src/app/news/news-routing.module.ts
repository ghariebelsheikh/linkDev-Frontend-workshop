import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  { path: ':id', component: NewsDetailsComponent },
  { path: '', component: AllNewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
