import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapitreRoutingModule } from './chapitre-routing.module';
import { ChapitreComponent } from './chapitre.component';
import { CreateChapitreComponent } from './create-chapitre/create-chapitre.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [ChapitreComponent, CreateChapitreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    ChapitreRoutingModule
  ]
})
export class ChapitreModule { }
