import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtablissementRoutingModule } from './etablissement-routing.module';
import { EtablissementComponent } from './etablissement.component';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from '../material-module';
import { BudgetModule } from '../budget/budget.module';
import { ListeBudgetComponent } from './liste-budget/liste-budget.component';


@NgModule({
  declarations: [
    EtablissementComponent, 
    CreateComponent, 
    ListeBudgetComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
    EtablissementRoutingModule,
    DemoMaterialModule,
    BudgetModule
  ]
})
export class EtablissementModule { }
