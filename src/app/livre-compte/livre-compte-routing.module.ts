import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreCompteComponent } from './livre-compte.component';


const routes: Routes = [
  {
    path: "",
    component: LivreCompteComponent,
    children: [
      {
        path: 'categorie',
        loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule)
      },
      {
        path: 'chapitre',
        loadChildren: () => import('./chapitre/chapitre.module').then(m => m.ChapitreModule)
      },
      {
        path: 'section',
        loadChildren: () => import('./section/section.module').then(m => m.SectionModule)
      },
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
      },
      {
        path: 'compte',
        loadChildren: () => import('./compte/compte.module').then(m => m.CompteModule)
      },
      {
        path: 'all-compte',
        loadChildren: () => import('./all-compte/all-compte.module').then(m => m.AllCompteModule)
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreCompteRoutingModule { }
