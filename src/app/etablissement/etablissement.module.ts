import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtablissementRoutingModule } from './etablissement-routing.module';
import { EtablissementComponent } from './etablissement.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from '../material-module';
import { BudgetModule } from '../budget/budget.module';

@NgModule({
  declarations: [
    EtablissementComponent, 
    CreateComponent, 
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
    EtablissementRoutingModule,
    DemoMaterialModule,
    BudgetModule,
  ]
})
export class EtablissementModule { }
