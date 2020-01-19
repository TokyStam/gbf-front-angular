import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeLivreCompteComponent } from './liste-livre-compte/liste-livre-compte.component';


const routes: Routes = [
  {
    path: "",
    component: ListeLivreCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreCompteRoutingModule { }
