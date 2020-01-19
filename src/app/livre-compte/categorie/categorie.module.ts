import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';


@NgModule({
  declarations: [CategorieComponent, CreateCategorieComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
