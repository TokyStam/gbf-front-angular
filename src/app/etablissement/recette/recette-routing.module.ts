import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './recette.component';
import { ListeRecetteComponent } from './liste-recette/liste-recette.component';
import { CreateFonctComponent } from './create-fonct/create-fonct.component';
import { CreateInvestiComponent } from './create-investi/create-investi.component';
import { RecetteAnnuelComponent } from './recette-annuel/recette-annuel.component';


const routes: Routes = [
  {
    path: "",
    component: RecetteComponent,
    children: [
      {
        path: 'liste-recette',
        component: ListeRecetteComponent
      },
      {
        path: 'create-fonctionnement',
        component: CreateFonctComponent
      },
      {
        path: 'create-investissement',
        component: CreateInvestiComponent
      },
      {
        path: 'recette-annuel',
        component: RecetteAnnuelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetteRoutingModule { }
