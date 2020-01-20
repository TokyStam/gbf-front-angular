import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';


const routes: Routes = [
  {
    path: "",
    component: CategorieComponent
  },
  {
    path: "create-categorie",
    component: CreateCategorieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
