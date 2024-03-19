import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Person } from '../../models/survey';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  idLocalStorage = "";
  posts:Post[] = [];
  follows: Person[] = []

  constructor(private postService: PostService, private userService: UserService){

  }

  ngOnInit(): void {
    this.authSession();
    let x = localStorage.getItem('User');
    if(x!=null){
      let UserLocalStorage = JSON.parse(x);
      this.idLocalStorage = UserLocalStorage.id;
    }

    this.ocultarSiSinSrc("ImagenLoad");
    this.getAllPosts();
    this.getUser();
  }
  
  /**funcion para detectar si esta logeado */
  authSession():void{
    let x = localStorage.length;

    if(x==0){
      window.location.replace('http://localhost:4200/Login')
    }
  }
  /**  fin función */

  /** funcion Pintar todos los post */

  getAllPosts(){
    this.postService.getPosts().subscribe((res) => {
      if(res){
        this.posts = res as Post[]
        this.posts.reverse();
      }else{
        window.alert("Hubo alerta trayendo los pots, reinicia")
      }
    });
  }
  /** fin funcion */

  getUser(){
    this.userService.getUser(this.idLocalStorage).subscribe((res) => {
      if(res){
        this.follows = res.follows as Person[]
      }else{
        window.alert("Hubo un error trayendo los follows")
      }
    })
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
