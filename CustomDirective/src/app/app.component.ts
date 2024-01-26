import { Component } from '@angular/core';
import { cdIfClass } from './directives/cd-if.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'CustomDirective';
}
