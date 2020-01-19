import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapitreRoutingModule } from './chapitre-routing.module';
import { ChapitreComponent } from './chapitre.component';
import { CreateChapitreComponent } from './create-chapitre/create-chapitre.component';


@NgModule({
  declarations: [ChapitreComponent, CreateChapitreComponent],
  imports: [
    CommonModule,
    ChapitreRoutingModule
  ]
})
export class ChapitreModule { }
