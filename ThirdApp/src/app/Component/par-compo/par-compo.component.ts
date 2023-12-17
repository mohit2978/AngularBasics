import { Component } from '@angular/core';
import { ChildCompoComponent } from '../child-compo/child-compo.component';

@Component({
  selector: 'app-par-compo',
  standalone:true,
  imports:[ChildCompoComponent],
  templateUrl: './par-compo.component.html',
  styleUrl: './par-compo.component.css'
})
export class ParCompoComponent {

}
