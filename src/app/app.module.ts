import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	CommonModule,
	LocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { from } from 'rxjs';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';

import { Programme310Module } from './programme310/programme310.module';

@NgModule({
	declarations: [
		AppComponent,
		SpinnerComponent,
		FullComponent,
		NavigationComponent,
		BreadcrumbComponent,
		SidebarComponent,
		AuthLayoutComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
		HttpClientModule,
    NgbModule,
    DemoMaterialModule,
		RouterModule.forRoot(Approutes, { useHash: false })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrl, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
