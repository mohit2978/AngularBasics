import { Component } from '@angular/core';

@Component({
  selector: 'AboutComponent',
  template: '<h1>using about component title {{title}} </h1>',
  styles: 'h1{ color:blue}'
})
export class AboutComponent {
  title = 'AboutComponent';
}
