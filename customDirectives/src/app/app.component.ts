import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { cdDirective } from './CustomDirective/cd-class.directive';
import { CustomNgClassDirective } from './CustomDirective/custom-ng-class.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CustomNgClassDirective,cdDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  class='h1';
}
