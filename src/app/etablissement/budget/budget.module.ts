import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { CreatBudgetComponent } from './creat-budget/creat-budget.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreatBudgetComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
    BudgetRoutingModule,
    DemoMaterialModule,
  ]
})
export class BudgetModule { }
