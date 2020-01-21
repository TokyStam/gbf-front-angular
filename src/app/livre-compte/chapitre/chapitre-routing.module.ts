import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapitreComponent } from './chapitre.component';
import { CreateChapitreComponent } from './create-chapitre/create-chapitre.component';


const routes: Routes = [
  {
    path: "",
    component: ChapitreComponent
  },
  {
    path: "create-chapitre",
    component: CreateChapitreComponent
  },
  {
    path: ":id/edit",
    component: CreateChapitreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapitreRoutingModule { }
