import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';


import { UserService } from '../user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	id: string;
	updateForm: FormGroup;
	user: User;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private us: UserService) 
   { this.createForm(); }

  ngOnInit() {
  	this.route.params.subscribe( params => {
  		this.id = params.id;
  		this.us.getUserById(this.id).subscribe( res=> {
  			this.user = res;
  			this.updateForm.get('firstname').setValue(this.user.firstname);
  			this.updateForm.get('lastname').setValue(this.user.lastname);
  			this.updateForm.get('email').setValue(this.user.email);
  		})
  	})
  	
  }

  createForm() {
  	this.updateForm = this.fb.group({
  		firstname: ['',[Validators.required, Validators.minLength(5)] ],
  		lastname: ['', [Validators.required]],
  		email: ['', [Validators.required, Validators.email] ]
  	});
  }

  onUpdate( firstname, lastname, email){
  	this.us.updateUser(this.id, firstname, lastname, email)
  	.subscribe( ()=> {
  		this.router.navigate(['list']);
  	});
  }

}
