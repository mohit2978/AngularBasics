import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {
  name="mohit";
  value="";
  getValueDirect(ip:HTMLInputElement){
      this.value=ip.value;
  }
  changeName(ip:HTMLInputElement){
    this.name=ip.value;
  }
}
