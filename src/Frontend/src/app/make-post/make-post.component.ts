import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-make-post',
  standalone: true,
  imports: [],
  templateUrl: './make-post.component.html',
  styleUrl: './make-post.component.css'
})
export class MakePostComponent {
  
  photoSelected: string | ArrayBuffer | any = 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png';
  file: File | any = [];
  
  onPhotoSelected(event:any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }  
  }
}
