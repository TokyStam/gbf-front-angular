import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Budget028RoutingModule } from './budget028-routing.module';
import { FormComponent } from './form/form.component';
import { Budget028Component } from './budget028.component';


@NgModule({
  declarations: [FormComponent, Budget028Component],
  imports: [
    CommonModule,
    Budget028RoutingModule
  ]
})
export class Budget028Module { }
