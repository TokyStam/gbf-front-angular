import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCompteModule } from './all-compte.module';
import { AllCompteComponent } from './all-compte.component';


const routes: Routes = [
  {
    path: "",
    component: AllCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCompteRoutingModule { }
