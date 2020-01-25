import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { AuthGuard } from "./shared/authentication/auth.guard";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/etablissement", pathMatch: "full" },
      {
        path: "dashboard",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "component",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./component/component.module").then(m => m.ComponentsModule)
      },
      {
        path: "etablissement",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./etablissement/etablissement.module").then(
            m => m.EtablissementModule
          )
      },
      {
        path: "livre-compte",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./livre-compte/livre-compte.module").then(
            m => m.LivreCompteModule
          )
      },
      {
        path: "recap-depense",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./recap-depense/recap-depense.module").then(
            m => m.RecapDepenseModule
          )
      },
      {
        path: "tableau-equilibre",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./tableau-equilibre/tableau-equilibre.module").then(
            m => m.TableauEquilibreModule
          )
      }
    ]
  },

  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then(m => m.LoginModule)
      }
    ]
  },

  {
    path: "**",
    redirectTo: "/dashboard"
  }
];
