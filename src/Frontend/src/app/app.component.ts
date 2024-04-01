import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PoliNet';
  idUser: String = "";
  contador:number = 0;
  rol: String = "";

  ngOnInit(): void{
    this.HideButton();
    this.closeSession();
    this.authUser();
    this.CheckUsers();
  }

  CheckUsers() {
    let buttonMeetings = document.getElementById('button2-meetings');
    let linkPub = document.getElementById('LinkPub');
    let linkPriv = document.getElementById('LinkPriv');

    let x = localStorage.getItem('User');

    if (x != null) {
      let UserLocalStorage = JSON.parse(x);
      this.rol = UserLocalStorage.rol;

      switch (this.rol) {
        case "userRecurrent":
          buttonMeetings !.style.display = 'none';          
          break;
        case "enterprise":
          buttonMeetings !.style.display = 'flex';
          break;
        case "teacher":
          buttonMeetings !.style.display = 'flex';
          break;
        case "Admon":
          linkPub!.style.display = 'none';
          linkPriv!.style.display = 'flex';
          break;
      }
    }
  }

  /** Función para visitar perfil con localstorage */
  authUser(){
    let x = localStorage.getItem("User");

    if(x!=null){
      let User = JSON.parse(x);
      this.idUser = User.id;
    }
  }
  /** Fin función */
  

  CloseSideBar(){
    let box = document.getElementById('SideBar');
    let words = document.getElementsByClassName('LinksWord') as HTMLCollectionOf<HTMLElement>;
    let Arrow = document.getElementById('Arrow');

    if(this.contador == 0){
    
      for (let i = 0; i < words.length; i++) {
        words[i].style.color = 'var(--sw)';
      }
      Arrow!.style.transform = 'rotate(180deg)';
      box!.style.transform = 'translate(-150px)';
      this.contador++;
    }else{
      for (let i = 0; i < words.length; i++) {
        words[i].style.color = 'var(--b)';
        words[i].style.transition = 'color .2s linear';
      }
      box!.style.transform = "translate(0px)";
      Arrow!.style.transform = 'rotate(0deg)';
      this.contador--;
    }
  }

  HideButton(){
    let x = localStorage.getItem('User');
    let ButtonLogIn = document.getElementById('Log-in');
    let ButtonSignOut = document.getElementById('Sign-out');
    if(x!=null){
      ButtonLogIn!.style.display = "none";
      ButtonSignOut!.style.display= "block";
    }
  }
  closeSession(){
    let ButtonSignOut = document.getElementById('Sign-out');
    ButtonSignOut?.addEventListener('click',() => {
     localStorage.removeItem('User')
     window.location.replace('http://localhost:4200/Login')
    })
  }


}
