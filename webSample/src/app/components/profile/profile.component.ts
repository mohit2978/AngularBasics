import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
    constructor(private activatedRoute:ActivatedRoute){

    }
  ngOnInit(): void {
    var id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    var name=this.activatedRoute.snapshot.params['name'];
    console.log(name);
    
  }
}
