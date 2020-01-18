import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Programme310RoutingModule } from './programme310-routing.module';
import { Progamme310Component } from './progamme310.component';


@NgModule({
  declarations: [Progamme310Component],
  imports: [
    CommonModule,
    Programme310RoutingModule
  ]
})
export class Programme310Module { }
