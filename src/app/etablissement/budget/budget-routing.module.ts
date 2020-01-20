import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget.component';
import { CreatBudgetComponent } from './creat-budget/creat-budget.component';
import { CreateInvestiComponent } from './create-investi/create-investi.component';
import { BudgetListeComponent } from './budget-liste/budget-liste.component';
import { BudgetAnnuelComponent } from './budget-annuel/budget-annuel.component';


const routes: Routes = [
  {
    path: "",
    component: BudgetComponent,
    children: [
      {
        path: 'liste-budget',
        component: BudgetListeComponent
      },
      {
        path: 'budget-annuel',
        component: BudgetAnnuelComponent
      },
    ]
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
