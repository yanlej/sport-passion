import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.roleForm = this.createFormGroup();

  }

  createFormGroup(): FormGroup {

    return new FormGroup({

      nomRole: new FormControl("", [Validators.required]),
      droit: new FormControl("", Validators.required)

    });
  }

}
