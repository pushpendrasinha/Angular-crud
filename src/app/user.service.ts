import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/Users";

  getUsers(): Observable<User[]> {
  	return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id): Observable<User> {
  	return this.http.get<User>(this.baseUrl + '/' + id);
  }

  addUser(user: User): Observable<User> {
  	return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(id, firstname, lastname, email){
  	const user = {
  		id: id,
  		firstname: firstname,
  		lastname: lastname,
  		email: email
  	}
  	return this.http.put(this.baseUrl + '/' + user.id, user);  
  }

  deleteUser(id): Observable<User>{
  	return this.http.delete<User>(this.baseUrl + '/' + id);
  }

}
