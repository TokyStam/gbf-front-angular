import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreCompteRoutingModule } from './livre-compte-routing.module';
import { ListeLivreCompteComponent } from './liste-livre-compte/liste-livre-compte.component';


@NgModule({
  declarations: [ListeLivreCompteComponent],
  imports: [
    CommonModule,
    LivreCompteRoutingModule
  ]
})
export class LivreCompteModule { }
