import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css']
})
export class PoleComponent implements OnInit {

  poleForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.poleForm = this.createFormGroup();

  }

  createFormGroup(): FormGroup {

    return new FormGroup({

      nomPole: new FormControl("", [Validators.required])

    });
  }

}
