import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { CreateArticleComponent } from './create-article/create-article.component';


@NgModule({
  declarations: [ArticleComponent, CreateArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
