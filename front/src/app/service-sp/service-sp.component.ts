import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-sp',
  templateUrl: './service-sp.component.html',
  styleUrls: ['./service-sp.component.css']
})
export class ServiceSPComponent implements OnInit {

  serviceForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.serviceForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {

    return new FormGroup({

      nomService: new FormControl("", [Validators.required])

    });
  }

}
