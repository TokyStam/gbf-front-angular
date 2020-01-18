import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtablissementComponent } from './etablissement.component';
import { CreateComponent } from './create/create.component';
import { ListeBudgetComponent } from './liste-budget/liste-budget.component';


const routes: Routes = [
  {
    path: "",
    component: EtablissementComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "1/liste-budget",
    component: ListeBudgetComponent
  },
  {
    path: '1/budget',
    loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablissementRoutingModule { }
