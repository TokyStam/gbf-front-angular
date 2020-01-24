import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecapDepenseComponent } from './recap-depense.component';
import { DetailDepenseComponent } from './detail-depense/detail-depense.component';


const routes: Routes = [
  {
    path: "",
    component: RecapDepenseComponent,
    children: [
      {
        path: "detail-depense",
        component: DetailDepenseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecapDepenseRoutingModule { }
