import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{
  name='';
  changesSaved=true;
  constructor(private activatedRoutes:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoutes.queryParamMap.subscribe(mp=>{
      let name=mp.get("name");
      console.log(name);
      this.name=name || '';
    })
  }
}
