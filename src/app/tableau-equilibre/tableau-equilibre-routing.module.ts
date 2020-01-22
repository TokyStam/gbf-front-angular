import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauEquilibreComponent } from './tableau-equilibre.component';


const routes: Routes = [
  {
    path: "",
    component: TableauEquilibreComponent,
    children: [
        {
          path: 'fonctionnement',
          loadChildren: () => import('./fonctionnement/fonctionnement.module').then(m => m.FonctionnementModule)
        },
        {
          path: 'investissement',
          loadChildren: () => import('./investissement/investissement.module').then(m => m.InvestissementModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableauEquilibreRoutingModule { }
