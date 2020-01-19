import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './shared/authentication/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
			{
        path: 'dashboard',
        canActivate: [AuthGuard],
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'component',
				loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
			},
			{
				path: 'etablissement',
				loadChildren: () => import('./etablissement/etablissement.module').then(m => m.EtablissementModule)
			},
			{
				path: 'programme310',
				loadChildren: () => import('./programme310/programme310.module').then(m => m.Programme310Module)
			},
			{
				path: 'programme028',
				loadChildren: () => import('./programme028/programme028.module').then(m => m.Programme028Module)
			},
		]
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  },

	{
		path: '**',
		redirectTo: '/dashboard'
	}
];
