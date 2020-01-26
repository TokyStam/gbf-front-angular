import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapDepenseRoutingModule } from './recap-depense-routing.module';
import { RecapDepenseComponent } from './recap-depense.component';
import { DetailDepenseComponent } from './detail-depense/detail-depense.component';
import { DemoMaterialModule } from '../material-module';
import { MultiDatepickerModule } from '../multidatepicker/multidatepicker.module';


@NgModule({
  declarations: [RecapDepenseComponent, DetailDepenseComponent],
  imports: [
    CommonModule,
    RecapDepenseRoutingModule,
    DemoMaterialModule,
    MultiDatepickerModule
  ]
})
export class RecapDepenseModule { }
