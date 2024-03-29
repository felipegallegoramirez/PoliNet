import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private apiUrl = "http://localhost:3000/api/survey"

  constructor(private http: HttpClient){ }

  postSurvey(survey: Survey){
    return this.http.post<boolean>(this.apiUrl + '/', survey)
  }

  getSurvey(id: string){
    return this.http.get<Survey>(this.apiUrl + `/unique/${id}`)
  }

  getSurveys(){
    return this.http.get<Survey[]>(this.apiUrl + '/');
  }

}
