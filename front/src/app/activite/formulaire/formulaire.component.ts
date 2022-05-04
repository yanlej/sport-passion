import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    { provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [ MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS ]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class FormulaireComponent implements OnInit {

  public activiteForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.activiteForm = this.createFormGroup();

  }

  createFormGroup(): FormGroup {

    return new FormGroup ({

      date: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required]),
      pole1:new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      duree: new FormControl('', [Validators.required]),
      lieu: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      poleParticipant1: new FormControl('', [Validators.required]),
      etat: new FormControl('', [Validators.required]),
      raison: new FormControl('', [Validators.required]),

    })
  }

   
    
}
