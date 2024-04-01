import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service';
import { ServiceService } from '../../../services/service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private serviceService:ServiceService) { }

  services:Array<Service>=[]
  selected:string=""

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(res=>{
      this.services=res as Service[]
      this.cargar();
    })

  }

  select(x:number){
    this.selected=this.services[x]._id||""
    let old=document.getElementsByClassName("select")[0]
    if(old){
      old.classList.remove("select");
    }
    let n = document.getElementsByClassName("card_service")[x]
    n.classList.add("select")
  }

  next(){
    if(this.selected!=""&& this.selected){
      let x= this.services.find(x=>x._id==this.selected)
      this.preview.service.push({
        title:x?.name||"",
        price:x?.price+""||""
      })
      this.preview.total=x?.price+""||""
      localStorage.setItem("preview",JSON.stringify(this.preview))
      localStorage.setItem("service_id",this.selected)
      window.location.replace("http://localhost:4200/Profesional");
    }else{
      alert("Seleccione un servicio")
    }
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
      localStorage.setItem("preview",JSON.stringify(this.preview))

  }




}
