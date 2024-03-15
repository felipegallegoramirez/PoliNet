import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { Comment } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Person } from '../../models/survey';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent implements OnInit {
  idUser = "";
  nameUser = "";
  count:number = 0;
  idsession: string = "";
  post:Post = new Post();
  Boxcomments: Comment[] = [];

  constructor( private activatedRoute: ActivatedRoute, private postService: PostService){

  }

  ngOnInit(): void {
    let likeIcon = document.getElementById("likeIcon");
    let x = localStorage.getItem("User");
    if(x!=null){
      let UserLocalStorage = JSON.parse(x);
      this.idUser = UserLocalStorage.id;
      this.nameUser = UserLocalStorage.name;
    }
  
    this.activatedRoute.params.subscribe(params => {
      this.idsession = params['id'];

      this.postService.getPostUnique(this.idsession).subscribe((res) => {
        this.post = res as Post;
        if(this.post.likes.findIndex(x => this.idUser == x._id) != -1){
          this.count = 1;
          likeIcon!.style.fontVariationSettings = "'FILL' 1, 'wght' 400,'GRAD' 0,'opsz' 24"
        }
        this.Boxcomments = res.comments as Comment[];
      });
    })
    console.log(this.post.image)
    console.log(this.idUser)
    
    
  }
  /** Funcion sobre likes */
  likeit(){
    let likeIcon = document.getElementById("likeIcon");
        let _idPerson = this.idUser;
        let namePerson = this.nameUser;

        const person: Person = {
          _id: _idPerson,
          name:namePerson,
        }

        let _idPost = this.post._id;
        let title = this.post.title;
        let photoPost = this.post.image;
        let creator_image = "";
        let creator_name = this.post.creator_name;
        let creator_id = this.post.creator_id;
        let descriptionPost = this.post.description;
        let likes: Person[] = this.post.likes;
        let comments: Comment[] = this.post.comments;
         
        if(this.count == 0){
          likes.push(person);
          const post: Post = {
            _id: _idPost, 
            title: title,
            image: photoPost,
            description: descriptionPost,
            creator_image: creator_image,
            creator_name: creator_name,
            creator_id: creator_id,
            likes: likes,
            comments: comments
          }
          this.count++
          likeIcon!.style.fontVariationSettings = "'FILL' 1, 'wght' 400,'GRAD' 0,'opsz' 24"
          this.postService.putPost(post, this.idsession).subscribe((res) => {
          })
          
        }else{
          let deletePerson = likes.indexOf(person);
          likes.splice(deletePerson,1);
          const post: Post = {
            _id: _idPost, 
            title: title,
            image: photoPost,
            description: descriptionPost,
            creator_image: creator_image,
            creator_name: creator_name,
            creator_id: creator_id,
            likes: likes,
            comments: comments
          }
          this.count--
          likeIcon!.style.fontVariationSettings = "'FILL' 0, 'wght' 400,'GRAD' 0,'opsz' 24"
          this.postService.putPost(post, this.idsession).subscribe((res) => {
          })
        }
    
    /**Fin función */
  }


  /**  función para los comentarios*/

  commentForm = new FormGroup({
    commentUser: new FormControl("", [Validators.required]) 
  })

  comment(): void{
    
    /** Comment */
    let _idComment = this.idUser
    let creatorCommentName = this.nameUser;
    let commentDescription = this.commentForm.value.commentUser;

    const commentSend: Comment ={
      _id: _idComment,
      name: creatorCommentName,
      description: commentDescription || "",
    }
    /** Post */
    let _idPost = this.post._id;
    let title = this.post.title;
    let photoPost = this.post.image;
    let creator_image = "";
    let creator_name = this.post.creator_name;
    let creator_id = this.post.creator_id;
    let descriptionPost = this.post.description;
    let likes:Person[] = this.post.likes;
    let comments: Comment[] = this.post.comments;

    if(!comments){
      comments = []
    }

    comments.push(commentSend);

    const post: Post = {
      _id: _idPost, 
      title: title,
      image: photoPost,
      description: descriptionPost,
      creator_image: creator_image,
      creator_name: creator_name,
      creator_id: creator_id,
      likes: likes,
      comments: comments
    }
    this.postService.putPost(post, this.idsession).subscribe((res) => {
      if(res){
        this.commentForm.reset();
      }else{
        window.alert("No se ha podido enviar el comentario");
      }
    })
     
  
  }

}
