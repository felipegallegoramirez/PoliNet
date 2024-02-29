import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  postUser(user:User){
    return this.http.post<boolean>(this.apiUrl, user);
  }

  getUser(id:string){
    return this.http.get<User>(this.apiUrl + `/${id}`);
  }

  putUser(user: User){
    return this.http.put(this.apiUrl +  `/${user._id}`, User);
  }
}
