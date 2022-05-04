import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categorieForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.categorieForm = this.createFormGroup();
    
  }

  createFormGroup(): FormGroup {

    return new FormGroup({

      nomCategorie: new FormControl("", [Validators.required])

    });
  }

}
