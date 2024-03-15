import { Component, OnInit } from '@angular/core';
import { Person, Survey } from '../../models/survey';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {

  rolUser:String = "";


  ngOnInit(): void {
    let x = localStorage.getItem('User');

    if (x != null) {
      let UserLocalStorage = JSON.parse(x);
      this.rolUser = UserLocalStorage.rol;
    }
    this.checkUser();

  }

  /** función para enviar formulario de encuesta */

  formSurveyEnterprisetoTeacher = new FormGroup({
    description: new FormControl('',[Validators.required])
  })

  sendFormSurvey(){
    let _id = "";
    let title = "";
    let answer:string[] = [];
    let idbooking = "";
    let responsible = "";
    
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
