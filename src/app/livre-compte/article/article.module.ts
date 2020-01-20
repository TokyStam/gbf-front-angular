import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleComponent } from './article.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [ArticleComponent, CreateArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
