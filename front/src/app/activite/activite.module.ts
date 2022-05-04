import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ActiviteRoutingModule } from './activite-routing.module';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListeComponent,
    DetailsComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ActiviteRoutingModule
  ]
})
export class ActiviteModule { }
