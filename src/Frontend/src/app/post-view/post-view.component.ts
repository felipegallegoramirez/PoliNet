import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent implements OnInit {

  count:number = 0;

  ngOnInit(): void {
      
  }

  Likeit(){
    let likeIcon = document.getElementById("likeIcon");
    if(this.count == 0){
      this.count++
      likeIcon!.style.fontVariationSettings = "'FILL' 1, 'wght' 400,'GRAD' 0,'opsz' 24"
    }else{
      this.count--
      likeIcon!.style.fontVariationSettings = "'FILL' 0, 'wght' 400,'GRAD' 0,'opsz' 24"
    }
    
  }



}
