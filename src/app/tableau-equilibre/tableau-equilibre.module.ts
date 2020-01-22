import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableauEquilibreRoutingModule } from './tableau-equilibre-routing.module';
import { TableauEquilibreComponent } from './tableau-equilibre.component';


@NgModule({
  declarations: [TableauEquilibreComponent],
  imports: [
    CommonModule,
    TableauEquilibreRoutingModule
  ]
})
export class TableauEquilibreModule { }
