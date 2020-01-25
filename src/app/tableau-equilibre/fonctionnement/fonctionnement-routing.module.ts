import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailFctComponent } from './detail-fct/detail-fct.component';


const routes: Routes = [
  {
    path: "detail-fct",
    component: DetailFctComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionnementRoutingModule { }
