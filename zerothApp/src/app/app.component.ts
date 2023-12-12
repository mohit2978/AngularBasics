import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PropBindingComponent } from './component/prop-binding/prop-binding.component';
import { EventBindingComponent } from './component/event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet
    ,InterpolationComponent
    ,PropBindingComponent
    ,EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mohit Kumar';
}
