import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionnementRoutingModule } from './fonctionnement-routing.module';
import { ListeFctComponent } from './liste-fct/liste-fct.component';
import { DetailFctComponent } from './detail-fct/detail-fct.component';


@NgModule({
  declarations: [ListeFctComponent, DetailFctComponent],
  imports: [
    CommonModule,
    FonctionnementRoutingModule
  ]
})
export class FonctionnementModule { }
