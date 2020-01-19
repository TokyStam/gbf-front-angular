import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget.component';
import { CreatBudgetComponent } from './creat-budget/creat-budget.component';
import { CreateInvestiComponent } from './create-investi/create-investi.component';


const routes: Routes = [
  {
    path: 'budget',
    component: BudgetComponent,
  },
  {
    path: 'create-budget',
    component: CreatBudgetComponent
  },
  {
    path: 'create-budget-investissement',
    component: CreateInvestiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
