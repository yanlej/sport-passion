import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/material.module';

import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ParticipantRoutingModule } from './participant-routing.module';





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
    ParticipantRoutingModule
  ]
})
export class ParticipantModule { }
