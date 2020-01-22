import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { CreateArticleComponent } from './create-article/create-article.component';


const routes: Routes = [
  {
    path: "",
    component: ArticleComponent
  },
  {
    path: "create-article",
    component: CreateArticleComponent
  },
  {
    path: ":id/edit",
    component: CreateArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
