import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PoliNet';
  contador:number = 0;
  
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
}
