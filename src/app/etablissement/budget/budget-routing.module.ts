import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatBudgetComponent } from './creat-budget/creat-budget.component';


const routes: Routes = [
  {
    path: 'create-budget',
    component: CreatBudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
