import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	registrationForm: FormGroup;
	user: User;

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(5)]],
    lastname: ['',[Validators.required] ],
    email: ['', [Validators.required, Validators.email]]
    })
  }

 

  onSubmit() {
  	this.us.addUser(this.registrationForm.value)
  		.subscribe( 
  			userData => console.log(userData),
  			error => console.error("Error in adding user"),
  			);
  		  }

}
