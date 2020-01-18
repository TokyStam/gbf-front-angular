import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { CreatBudgetComponent } from './creat-budget/creat-budget.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BudgetComponent } from './budget.component';
import { CreateInvestiComponent } from './create-investi/create-investi.component';


@NgModule({
  declarations: [
    CreatBudgetComponent,
    BudgetComponent,
    CreateInvestiComponent
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
