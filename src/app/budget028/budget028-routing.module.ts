import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Budget028Component } from './budget028.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '',
    component: Budget028Component,
    children: [
      {
        path: 'create',
        component: FormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Budget028RoutingModule { }
