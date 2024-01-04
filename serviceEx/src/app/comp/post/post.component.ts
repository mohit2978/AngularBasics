import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../model/post.mode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
    allpostsurl='https://jsonplaceholder.typicode.com/posts';
    singleposturl='https://jsonplaceholder.typicode.com/posts/1';
    posts:Post[];
    post:Post|undefined;
    loading=false;
    constructor(private http:HttpClient,
      ){
        this.posts=[];
    }
    getAllPosts(){
      this.http.get<Post[]>(this.allpostsurl).subscribe({
        next:(resp)=>{
          console.log(resp);
          this.posts=resp;
          
        },
        error:(err)=>{
          console.log(err);
          
        },
        complete:()=>{
          console.log("completed");
          
        }
      });
    }

    getPost(){
      this.loading=true;
        this.http.get<Post>(this.singleposturl).subscribe({
          next:(data)=>{
            console.log(data);
            this.post=data;
          },
          error:(err)=>{
              console.log(err);
              
          },
          complete:()=>{
            console.log("complete");
            this.loading=false;
          }
        })
    }
}
