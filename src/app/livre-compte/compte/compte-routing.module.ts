import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';


const routes: Routes = [
  {
    path: "",
    component: CompteComponent
  },
  {
    path: "create-compte",
    component: CreateCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteRoutingModule { }
