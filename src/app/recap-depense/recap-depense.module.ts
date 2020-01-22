import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapDepenseRoutingModule } from './recap-depense-routing.module';
import { RecapDepenseComponent } from './recap-depense.component';
import { ListeDepenseComponent } from './liste-depense/liste-depense.component';
import { DetailDepenseComponent } from './detail-depense/detail-depense.component';


@NgModule({
  declarations: [RecapDepenseComponent, ListeDepenseComponent, DetailDepenseComponent],
  imports: [
    CommonModule,
    RecapDepenseRoutingModule
  ]
})
export class RecapDepenseModule { }
