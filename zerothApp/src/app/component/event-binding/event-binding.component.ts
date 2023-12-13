import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  getValue(event:KeyboardEvent){
     let ip=event.target as HTMLInputElement;
      console.log(ip);
      console.log(ip.value);
      
  }
  getValueDirect(ip:HTMLInputElement){
     console.log(ip.value);
     
 }
   buttonclick(event:any){
    alert("clicked the button");
    this.count++;
    this.styleObj.color='white'
    this.styleObj.backgroundColor='black';
    console.log(event);
    
   }
   count=0;
   styleObj={
    color:"green",
    backgroundColor: "red"};
   
}
