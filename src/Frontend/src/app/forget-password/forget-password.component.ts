import { Component,OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Person } from '../../models/survey';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent implements OnInit {
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
      
  }

  formSendCode = new FormGroup({
    email: new FormControl('', [Validators.required])
  })

  sendCode(){
    let _id = "";
    let name = "";
    let email = this.formSendCode.value.email || "";
    let password = "";
    let rol = "";
    let files_id:string[] = [];
    let post_id:string[] = [];
    let bloq:Array<any> = [{
      day:Array<number>,
    }];
    let services:string[] = [];
    let booking:string[] = [];
    let code= "";
    let active = true;
    let description = "";
    let category = "";
    let locate = "";
    let link = "";
    let followers:string[]  = [];
    let follows: Person[] = [];

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
    }

    this.userService.SendCode(email,user).subscribe((res) => {
      if(res){
        window.alert("Se ha enviado un correo a tu correo electronico")
      }else{
        window.alert("No se ha podido enviar el correo de confirmación puede que no este registrado o haya habido un error ")
      }
    })
  }
}
