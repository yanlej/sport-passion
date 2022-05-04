import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategorieComponent } from './categorie/categorie.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PoleComponent } from './pole/pole.component';
import { RoleComponent } from './role/role.component';
import { ServiceSPComponent } from './service-sp/service-sp.component';

const routes: Routes = [
  
  { path: 'services', component: ServiceSPComponent},
  { path: 'poles', component: PoleComponent},
  { path: 'roles', component: RoleComponent},
  { path: 'categories', component: CategorieComponent},
  { path: 'admin', component: DashboardAdminComponent},
  { path: '', redirectTo: '/admin', pathMatch: 'full'},
  { path: '**', redirectTo: '/admin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
