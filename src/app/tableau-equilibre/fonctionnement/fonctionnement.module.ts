import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionnementRoutingModule } from './fonctionnement-routing.module';
import { DetailFctComponent } from './detail-fct/detail-fct.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { MultiDatepickerModule } from 'src/app/multidatepicker/multidatepicker.module';


@NgModule({
  declarations: [DetailFctComponent],
  imports: [
    CommonModule,
    FonctionnementRoutingModule,
    DemoMaterialModule,
    MultiDatepickerModule
  ]
})
export class FonctionnementModule { }
