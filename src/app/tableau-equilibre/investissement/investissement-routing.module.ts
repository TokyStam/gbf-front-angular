import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailInvestiComponent } from './detail-investi/detail-investi.component';


const routes: Routes = [
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
