import { Component, OnInit } from '@angular/core';
import { RandService } from '../../services/random.service';

@Component({
  selector: 'app-rand-comp',
  standalone: true,
  imports: [],
  templateUrl: './rand-comp.component.html',
  styleUrl: './rand-comp.component.css'
})
export class RandCompComponent implements OnInit{
   random=0;
    constructor(private randomService:RandService){

    }
  ngOnInit(): void {
    this.random=this.randomService.getrand();
  }
}
