import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-comp',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if-comp.component.html',
  styleUrl: './ng-if-comp.component.css'
})
export class NgIfCompComponent {
  active:boolean =false;
  count:number=0;

  incrCount(){
    this.count=this.count+1;
  }
  changeactive(){
    this.active=!this.active;
  }
}
