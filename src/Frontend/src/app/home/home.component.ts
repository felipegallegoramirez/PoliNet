import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
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
}
