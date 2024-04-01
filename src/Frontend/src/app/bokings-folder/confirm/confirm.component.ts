import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.cargar()
  }
  preview:{
    semana:string,
    dia:string,
    mes:string,
    hora:string
    service:Array<{
      title:string,
      price:string
    }>,
    profresional:string,
    total:string
  }={
    semana:"Sin seleccionar",
    dia:"",
    mes:"",
    profresional:"",
    hora:"Sin seleccionar",
    service:[],
    total:"0",
  }

  cargar(){
    let x = localStorage.getItem("preview")
    if(x){
      this.preview=JSON.parse(x);
    }else{
      localStorage.setItem("preview",JSON.stringify(this.preview))
    }
  }

}
