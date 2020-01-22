import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailInvestiComponent } from './detail-investi/detail-investi.component';
import { ListeInvestiComponent } from './liste-investi/liste-investi.component';


const routes: Routes = [
  {
  path: "liste-investi",
  component: ListeInvestiComponent
  },
  {
    path: "detail-investi",
    component: DetailInvestiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestissementRoutingModule { }
