import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Programme310Component } from './programme310.component';
import { Annee310Component } from './annee310/annee310.component';
import { BudgetAnnuelComponent } from './budget-annuel/budget-annuel.component';


const routes: Routes = [
  {
    path:"",
    component: Programme310Component
  },
  {
    path:"annee-etablissement",
    component: Annee310Component
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
export class Programme310RoutingModule { }
