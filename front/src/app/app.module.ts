import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './home/menu/menu.component';
import { HeaderComponent } from './home/header/header.component';
import { MaterialModule } from 'src/material.module';
import { ActiviteModule } from './activite/activite.module';
import { ServiceSPComponent } from './service-sp/service-sp.component';
import { PoleComponent } from './pole/pole.component';
import { RoleComponent } from './role/role.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ParticipantModule } from './participant/participant.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ChartsComponent } from './charts/charts.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ServiceSPComponent,
    PoleComponent,
    RoleComponent,
    CategorieComponent,
    DashboardAdminComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    ActiviteModule,
    ParticipantModule,
    AppRoutingModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, MenuComponent, HeaderComponent]
})
export class AppModule { }
