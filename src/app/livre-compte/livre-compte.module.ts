import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreCompteRoutingModule } from './livre-compte-routing.module';
import { LivreCompteComponent } from './livre-compte.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
import { CategorieModule } from './categorie/categorie.module';
import { CreateSectionComponent } from './article/create-article/create-section.component';


@NgModule({
  declarations: [LivreCompteComponent, CreateSectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    LivreCompteRoutingModule,
    CategorieModule
  ]
})
export class LivreCompteModule { }
