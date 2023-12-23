import { Component, EventEmitter } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-comp',
  standalone: true,
  imports: [ChildCompComponent,CommonModule],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {
  val=0;
  isEven:boolean=true;
  parentMethod(event:any){
      this.val=event;
      if(this.val%2==0) this.isEven=true;
      else this.isEven=false;
  }
}
