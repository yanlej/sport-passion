import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetailsComponent } from "./details/details.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { ListeComponent } from "./liste/liste.component";


const participantRoutes: Routes = [

    { path: 'participant/details/:id', component: DetailsComponent },
    { path: 'participant/formulaire', component: FormulaireComponent },
    { path: 'participant', component: ListeComponent}

];

@NgModule({

    imports: [
        RouterModule.forChild(participantRoutes)
    ],
    exports: [RouterModule]
})

export class ParticipantRoutingModule { }