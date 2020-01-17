import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtablissementRoutingModule } from './etablissement-routing.module';
import { EtablissementComponent } from './etablissement.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [EtablissementComponent, CreateComponent],
  imports: [
    CommonModule,
    EtablissementRoutingModule
  ]
})
export class EtablissementModule { }
