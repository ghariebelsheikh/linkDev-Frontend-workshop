import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TruncatePipe } from './pipes/truncate.pipe';




@NgModule({
  declarations: [HeaderComponent, MenuComponent, FooterComponent, NewsCardComponent, BreadcrumbComponent, TruncatePipe],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [HttpClientModule, HeaderComponent, MenuComponent, FooterComponent, NewsCardComponent, BreadcrumbComponent, TruncatePipe, FormsModule]
})
export class SharedModule { }
