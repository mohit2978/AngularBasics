import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {
  @Input() counter:number=0;

  incrCount(){
    this.counter++;
  }
}
