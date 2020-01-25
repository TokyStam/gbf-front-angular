import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestissementRoutingModule } from './investissement-routing.module';
import { DetailInvestiComponent } from './detail-investi/detail-investi.component';


@NgModule({
  declarations: [DetailInvestiComponent],
  imports: [
    CommonModule,
    InvestissementRoutingModule
  ]
})
export class InvestissementModule { }
