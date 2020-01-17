import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeBudgetComponent } from './liste-budget.component';


const routes: Routes = [
  {
    path: 'liste-budget',
    component: ListeBudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
