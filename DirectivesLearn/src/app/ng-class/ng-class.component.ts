import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  p=false;
  f=false;
  obj={ primary:false ,fontStyle:false};
  toggleCSS1(){
    this.p=!this.p;
  }
  toggleCSS2(){
    this.f=!this.f;
  }
}
