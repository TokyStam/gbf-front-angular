import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeAdministrationComponent } from './liste-administration/liste-administration.component';
import { Annee028Component } from './annee028/annee028.component';
import { BudgetAnnuelComponent } from '../programme028/budget-annuel/budget-annuel.component';


const routes: Routes = [
  {
    path:"",
    component: ListeAdministrationComponent
  },
  {
    path:"annee-administration",
    component: Annee028Component
  },
  {
    path:"budget-annuel",
    component: BudgetAnnuelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Programme028RoutingModule { }
