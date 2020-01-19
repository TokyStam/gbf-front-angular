import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';


@NgModule({
  declarations: [CompteComponent, CreateCompteComponent],
  imports: [
    CommonModule,
    CompteRoutingModule
  ]
})
export class CompteModule { }
