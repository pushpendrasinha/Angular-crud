import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	id: number;
	user: User;

  constructor(private us: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(parmas => {
  		this.id = +parmas.get('id');
  		this.us.getUserById(parmas.get('id'))
  			.subscribe(user=> this.user = user);
  	});
  }

}
