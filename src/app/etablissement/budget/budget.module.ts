import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { ListeBudgetComponent } from './liste-budget.component';
import { CreatBudgetComponent } from './creat-budget/creat-budget.component';
import { DemoMaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    ListeBudgetComponent, 
    CreatBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    DemoMaterialModule,
  ]
})
export class BudgetModule { }
