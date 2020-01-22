import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeFctComponent } from './liste-fct/liste-fct.component';
import { DetailFctComponent } from './detail-fct/detail-fct.component';


const routes: Routes = [
  {
    path: "liste-fct",
    component: ListeFctComponent
  },
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
