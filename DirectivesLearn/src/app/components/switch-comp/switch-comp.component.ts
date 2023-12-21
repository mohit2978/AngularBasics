import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-comp.component.html',
  styleUrl: './switch-comp.component.css'
})
export class SwitchCompComponent {
    n:number=2;
}
