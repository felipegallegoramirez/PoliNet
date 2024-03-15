import { AfterViewInit,Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { User,userLogin } from '../../models/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../models/survey';



@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef, private loginService: LoginService, private userService: UserService) {

  }

  ngOnInit(): void {
      this.authSession();
  }

  
  /* Inicio Registro */

  formRegister = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  signIn(): void{
    
    let _id = "";
    let name = this.formRegister.value.name;
    let email = this.formRegister.value.email;
    let password = this.formLogin.value.password;
    let rol = "userRecurrent";
    let files_id:string[] = [];
    let post_id:string[] = [];
    let bloq:Array<any> = [{
      day:Array<number>,
    }];
    let services:string[] = [];
    let booking:string[] = [];
    let code= "";
    let active = false;
    let description = "";
    let category = "";
    let locate = "";
    let link = "";
    let followers:string[]  = [];
    let follows: Person[] = [];

    if(name && email && password){
      const user: User = {

        _id: _id,
        name: name,
        email: email,
        rol: rol,
        password: password,
        files_id: files_id,
        post_id: post_id,
        bloq: bloq,
        services: services,
        booking: booking,
        code: code,
        active: active,
        description: description,
        category: category,
        locate: locate,
        followers: followers,
        follows: follows,
        link: link,
      };

      this.userService.postUser(user).subscribe(res => {
        if(res){
          window.alert("Registrado");
          this.formRegister.reset();
        }else{
          window.alert("Este email ya esta registrado")
        }
      })
    }
  }


  /* fin Registro */

  /* Inicio login  */
  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });

  login(): void{
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;

    if (email && password) {
      const user: userLogin = {
        email: email,
        password: password
      };

      this.loginService.auth(user).subscribe(res => {
        let userTemporal = res as userLogin;

        if (userTemporal) {
          localStorage.setItem('User', JSON.stringify(userTemporal));
          window.location.replace('http://localhost:4200/Home')
        } else {
          console.log("No existe");
        }
        this.formLogin.reset();
      });
    }else{
      console.log("no existe")
    }
  }


  /*  Fin login  */ 

  /* Verificar si hay una sesión activa */

  authSession():void{
    let x = localStorage.getItem('User');

    if(x!=null){
      window.location.replace('http://localhost:4200/Home')
    }
  }

  /* Fin función */

  /*  Efecto de inicio de sesión */
  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    const registerBtn = this.elementRef.nativeElement.querySelector('#register');
    const loginBtn = this.elementRef.nativeElement.querySelector('#login');

    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
    });
  }

}
/* Fin animación */