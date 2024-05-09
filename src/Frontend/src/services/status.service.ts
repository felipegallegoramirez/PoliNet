import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'http://localhost:3000/api/status'
  
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<any>(this.apiUrl + "/",);
  }
}
