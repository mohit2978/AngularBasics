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
    posts:Post[];
    constructor(private http:HttpClient){
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
}
