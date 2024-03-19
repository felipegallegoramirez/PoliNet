import { Component, OnInit } from '@angular/core';
import { Person, Survey } from '../../models/survey';
import { SurveyService } from '../../services/survey.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {
  _idUser: String = "";
  nameUser: String = "";
  rolUser: String = "";

  constructor( private surveyService: SurveyService){  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.authSession();
    this.checkUser();
  }

  /**funcion get LocalStorage */

  checkLocalStorage() {
    let x = localStorage.getItem('User');

    if (x != null) {
      let UserLocalStorage = JSON.parse(x);
      this.rolUser = UserLocalStorage.rol;
      this._idUser = UserLocalStorage.id;
      this.nameUser = UserLocalStorage.name;

    }
  }

  /** fin funcion */


  /** función para enviar formulario de encuesta de emprendedor a mentor*/

  formSurveyEnterprisetoTeacher = new FormGroup({
    description0: new FormControl('', [Validators.required]),
    description1: new FormControl('', [Validators.required]),
    description2: new FormControl('', [Validators.required]),
    description3: new FormControl('', [Validators.required]),
    description4: new FormControl('', [Validators.required]),
  })

  sendFormSurveyEtoT(){
    /** Objeto persona del mentor */

    let _idTeacher = "";
    let nameTeacher = "";

    const teacher: Person = {
      _id: _idTeacher,
      name: nameTeacher,
    }
    /** Objeto persona del emprendedor */

    const enterprise: Person = {
      _id: this._idUser,
      name: this.nameUser,
    }

    /** Objeto encuesta */

    let _id = "";
    let title = "Emprendedor a mentor";
    let answer: string[] = [];
    let idbooking = "";
    let responsible = enterprise;
    let respondent = teacher;
    let rating = 0;

    answer.push(this.formSurveyEnterprisetoTeacher.value.description0 || "")
    answer.push(this.formSurveyEnterprisetoTeacher.value.description1 || "")
    answer.push(this.formSurveyEnterprisetoTeacher.value.description2 || "")
    answer.push(this.formSurveyEnterprisetoTeacher.value.description3 || "")
    answer.push(this.formSurveyEnterprisetoTeacher.value.description4 || "")

    const survey: Survey = {
      _id: _id,
      title: title,
      answers: answer,
      idbooking: idbooking,
      responsible: responsible,
      respondent: respondent,
      rating: rating
    }

    this.surveyService.postSurvey(survey).subscribe((res) => {
      if(res){
        window.alert('Encuesta enviada')
        //window.location.replace('http://localhost:4200/Home')
      }
    })
  }


  /**  fin función */

  /** función para enviar formulario de encuesta de mentor a emprendedor*/

  formSurveyTeachertoEnterprise = new FormGroup({
    description0: new FormControl('', [Validators.required]),
    description1: new FormControl('', [Validators.required]),
    description2: new FormControl('', [Validators.required]),
    description3: new FormControl('', [Validators.required]),
    description4: new FormControl('', [Validators.required]),
  })

  sendFormSurveyTtoE() {

  /** Objeto persona del mentor */

    const teacher: Person = {
      _id: this._idUser,
      name: this.nameUser,
    }
    /** Objeto persona del emprendedor */
    let _idEnterprise = "";
    let nameEnterprise = "";

    const enterprise: Person = {
      _id: _idEnterprise,
      name: nameEnterprise,
    }

    /** Objeto encuesta */

    let _id = "";
    let title = "Mentor a Emprendedor";
    let answer: string[] = [];
    let idbooking = "";
    let responsible = teacher;
    let respondent = enterprise;
    let rating = 0;

    answer.push(this.formSurveyTeachertoEnterprise.value.description0 || "")
    answer.push(this.formSurveyTeachertoEnterprise.value.description1 || "")
    answer.push(this.formSurveyTeachertoEnterprise.value.description2 || "")
    answer.push(this.formSurveyTeachertoEnterprise.value.description3 || "")
    answer.push(this.formSurveyTeachertoEnterprise.value.description4 || "")

    const survey: Survey = {
      _id: _id,
      title: title,
      answers: answer,
      idbooking: idbooking,
      responsible: responsible,
      respondent: respondent,
      rating: rating
    }

    this.surveyService.postSurvey(survey).subscribe((res) => {
      if(res){
        window.alert('Encuesta enviada')
        //window.location.replace('http://localhost:4200/Home')
      }
    })
  }
  /**  fin función */


  /**funcion para detectar si esta logeado */
  authSession(): void {
    let x = localStorage.length;
    if (x == 0) {
      window.location.replace('http://localhost:4200/Login')
    }
  }
  /**  fin función */

  /** Funcion para detectar el rol */
  checkUser() {
    let enterprise = document.getElementById('enterprise');
    let teacher = document.getElementById('teacher');

    switch (this.rolUser) {
      case "teacher":
        teacher!.style.display = 'block';
        break;
      case "enterprise":
        enterprise!.style.display = 'block';
        break;
    }
  }
  /** fin funcion */
}
