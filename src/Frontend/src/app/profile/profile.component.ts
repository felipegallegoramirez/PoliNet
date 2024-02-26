import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  ngOnInit(): void {
    this.CheckUsers();
    this.buttons();
    this.gotoEdit("editProfile");
    this.ocultarSiSinSrc("ImagenLoad");
  }

  ocultarSiSinSrc(idImagen:string):void {
    let imgElements = document.querySelectorAll(`#${idImagen}`) as NodeListOf<HTMLImageElement>;
    imgElements.forEach(imgElement => {
      let url = imgElement.currentSrc;

      if(url === ""){
          imgElement.style.display = "none";
      }else{
          console.log("La imagen tiene una URL válida");
      }
    });
  }
  
  CheckUsers(){
    let followMeButton = document.getElementById('followMeButton');
    let buttonEnterprisePriv = document.getElementById('EnterprisePriv');
    let buttonEnterprisePub = document.getElementById('EnterprisePub');
    let MentorPriv = document.getElementById('MentorPriv');
    let MentorPub = document.getElementById('MentorPub');
    let UserRecurrent = document.getElementById('UserRecurrent');
    let Advertice = document.getElementById('Advertice');
    let rol = "EnterprisePub";
   
    switch(rol){
      case "MentorPub":
        MentorPub!.style.display = 'grid'; 
        followMeButton!.style.display = 'block';
        break;
      case "EnterprisePub":
        buttonEnterprisePub!.style.display = 'grid';
        followMeButton!.style.display = 'block';
        break;
      case "MentorPriv":
        MentorPriv!.style.display = 'grid';
        break;
      case "EnterprisePriv":
        buttonEnterprisePriv!.style.display = 'grid';
        break;
      case "UserRecurrent":
        Advertice!.style.display = 'flex';
        UserRecurrent!.style.display = 'grid';
        break;
    }
    
  }

  buttons(){
    let makePost = document.querySelector('#makePost');
    makePost?.addEventListener('click', () => {
      window.location.replace('http://localhost:4200/makePost')
    })
  }
  
  SubEnterpriseOpen(modalId:String): void{
    let modals = document.querySelectorAll(`#${modalId}`) as NodeListOf<HTMLDivElement>;
    modals.forEach(modalId => {
      modalId!.classList.add('visto');
    });
  }
  SubEnterpriseClose(modalId:String): void{
    let modals = document.querySelectorAll(`#${modalId}`) as NodeListOf<HTMLDivElement>;
    modals.forEach(modalId => {
      modalId!.classList.remove('visto');
    });
  }

  gotoEdit(editProfile:string): void{
    let ButtonEdit = document.querySelectorAll(`#${editProfile}`) as NodeListOf<HTMLButtonElement>;
    ButtonEdit.forEach(editProfile => {
      editProfile?.addEventListener('click', () => {
        window.location.replace('http://localhost:4200/editProfile')
      }) 
    })
  }

}
