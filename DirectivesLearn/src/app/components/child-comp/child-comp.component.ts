import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent implements OnInit{
  ngOnInit(): void {
    this.customEventEmitter.emit(this.counter);
  }
  @Input() counter:number=0;
  @Output() customEventEmitter=new EventEmitter<number>();
  incrCount(){
    this.counter++;
    this.customEventEmitter.emit(this.counter);
  }
}
