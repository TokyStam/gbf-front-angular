import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [CategorieComponent, CreateCategorieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
