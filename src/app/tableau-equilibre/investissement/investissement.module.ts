import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestissementRoutingModule } from './investissement-routing.module';
import { DetailInvestiComponent } from './detail-investi/detail-investi.component';
import { MultiDatepickerModule } from 'src/app/multidatepicker/multidatepicker.module';


@NgModule({
  declarations: [DetailInvestiComponent],
  imports: [
    CommonModule,
    InvestissementRoutingModule,
    MultiDatepickerModule
  ]
})
export class InvestissementModule { }
