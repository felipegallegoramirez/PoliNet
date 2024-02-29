import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  post: Post[] = [];

  private apiUrl = 'http://localhost:3000';

  createPost(post:Post){
    return this.http.post<boolean>(this.apiUrl + "/", Post);
  }

  getPosts(){
    return this.http.get<Post[]>(this.apiUrl + "/");
  }

  getPost(id:string){
    return this.http.get<Post>(this.apiUrl + `/${id}`);
  }

  deletePost(id:string){
    return this.http.delete<Post>(this.apiUrl + `/${id}`)
  }
}
