import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-comp',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './switch-comp.component.html',
  styleUrl: './switch-comp.component.css'
})
export class SwitchCompComponent {
    n:number=3;
    number=1;
    page=1;
}
