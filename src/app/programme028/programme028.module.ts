import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Programme028RoutingModule } from './programme028-routing.module';
import { ListeAdministrationComponent } from './liste-administration/liste-administration.component';
import { Annee028Component } from './annee028/annee028.component';
import { BudgetAnnuelComponent } from '../programme028/budget-annuel/budget-annuel.component';


@NgModule({
  declarations: [
    ListeAdministrationComponent, 
    Annee028Component,
    BudgetAnnuelComponent
  ],
  imports: [
    CommonModule,
    Programme028RoutingModule
  ]
})
export class Programme028Module { }
