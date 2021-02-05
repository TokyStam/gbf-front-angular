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
import { RecetteAnnuelComponent, DialogRecette } from './recette-annuel/recette-annuel.component';
import { MultiDatepickerModule } from 'src/app/multidatepicker/multidatepicker.module';
import { ListeRecetteComponent } from './liste-recette/liste-recette.component';


@NgModule({
  declarations: [
    RecetteComponent,
    CreateFonctComponent,
    CreateInvestiComponent,
    RecetteAnnuelComponent,
    DialogRecette,
    ListeRecetteComponent

  ],
  entryComponents:[DialogRecette],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    RecetteRoutingModule,
    MultiDatepickerModule
  ]
})
export class RecetteModule { }
