import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { CreateSectionComponent } from './create-section/create-section.component';


@NgModule({
  declarations: [SectionComponent, CreateSectionComponent],
  imports: [
    CommonModule,
    SectionRoutingModule
  ]
})
export class SectionModule { }
