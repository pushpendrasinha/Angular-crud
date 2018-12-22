import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
	users: User[];

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
  	this.us.getUsers()
  		.subscribe( userData => {
  			this.users = userData
  		});
  }

  editUser(user: User){
    this.router.navigate(['/edit', user.id]);
  }

  onDelete(user: User){
    this.us.deleteUser(user.id)
      .subscribe( ()=> {
        this.router.navigate(['list']);
      });
  }

  gotocreate(){
    this.router.navigate(['create']);
  }

  details(id: number){
    this.router.navigate(['/details', id])
  }

}
