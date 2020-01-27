import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCompteRoutingModule } from './all-compte-routing.module';
import { AllCompteComponent } from './all-compte.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllCompteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
    AllCompteRoutingModule
  ]
})
export class AllCompteModule { }
