import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/user'
  
  constructor(private http: HttpClient) { }

  postUser(user:User){
    return this.http.post<boolean>(this.apiUrl + "/", user);
  }

  getUser(id:string){
    return this.http.get<User>(this.apiUrl + `/unique/${id}`);
  }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl + "/")
  }

  getSearchUser(){
    return this.http.get<User[]>(this.apiUrl + '/search/')
  }

  putUserRol(email: string){
    return this.http.get(this.apiUrl + `/rol/${email}`)
  }
  
  putUser(user: User,id:string) {
    return this.http.put(this.apiUrl + `/editUser/${id}`,user);
  }

  SendCode(email: string, user: User){
    return this.http.post(this.apiUrl + `/sendCode/${email}`, user)
  }

  putProfilePhoto(file: File, id: string){
    const fd = new FormData();

    fd.append('image', file)

    return this.http.put(this.apiUrl + `/updateIMG/${id}`, fd)
  }

  putProfilepdf(file: File, id: string){
    const fd = new FormData();

    fd.append('pdf', file);

    return this.http.put(this.apiUrl + `/updatePDF/${id}`, fd)
  }
  
}
