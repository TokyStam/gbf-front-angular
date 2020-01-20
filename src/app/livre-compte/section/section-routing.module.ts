import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';
import { CreateSectionComponent } from './create-section/create-section.component';


const routes: Routes = [
  {
    path: "",
    component: SectionComponent
  },
  {
    path: "create-section",
    component: CreateSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
