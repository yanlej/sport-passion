import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { ListeComponent } from './liste/liste.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const activiteRoutes: Routes = [

  { path: 'activite/details/:id', component: DetailsComponent},
  { path: 'activite/formulaire', component: FormulaireComponent},
  { path: 'activite', component: ListeComponent }

];

@NgModule({

  imports: [
    RouterModule.forChild(activiteRoutes)
  ],
  exports: [RouterModule]
})
export class ActiviteRoutingModule { }
