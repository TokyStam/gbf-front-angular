import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtablissementComponent } from './etablissement.component';
import { CreateComponent } from './create/create.component';
import { ListeBudgetComponent } from './budget/liste-budget.component';
import { CreatBudgetComponent } from './budget/creat-budget/creat-budget.component';


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
    path: "create-budget",
    component: CreatBudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablissementRoutingModule { }
