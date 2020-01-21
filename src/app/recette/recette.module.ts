import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetteRoutingModule } from './recette-routing.module';
import { RecetteComponent } from './recette.component';


@NgModule({
  declarations: [RecetteComponent],
  imports: [
    CommonModule,
    RecetteRoutingModule
  ]
})
export class RecetteModule { }
