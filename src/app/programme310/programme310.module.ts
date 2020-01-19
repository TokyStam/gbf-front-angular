import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Programme310RoutingModule } from './programme310-routing.module';
import { Programme310Component } from './programme310.component';
import { Annee310Component } from './annee310/annee310.component';
import { BudgetAnnuelComponent } from './budget-annuel/budget-annuel.component';


@NgModule({
  declarations: [ 
    Programme310Component, 
    Annee310Component, BudgetAnnuelComponent
  ],
  imports: [
    CommonModule,
    Programme310RoutingModule
  ]
})
export class Programme310Module { }
