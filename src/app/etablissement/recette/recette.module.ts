import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetteRoutingModule } from './recette-routing.module';
import { RecetteComponent } from './recette.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';
import { CreateFonctComponent } from './create-fonct/create-fonct.component';
import { CreateInvestiComponent } from './create-investi/create-investi.component';
import { RecetteAnnuelComponent } from './recette-annuel/recette-annuel.component';


@NgModule({
  declarations: [
    RecetteComponent, 
    CreateFonctComponent, 
    CreateInvestiComponent, RecetteAnnuelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    RecetteRoutingModule
  ]
})
export class RecetteModule { }
