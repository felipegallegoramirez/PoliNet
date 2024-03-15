import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { userLogin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  auth(userLogin: userLogin){
    return this.http.post<userLogin>(this.apiUrl + '/', userLogin);
  }

  
}


