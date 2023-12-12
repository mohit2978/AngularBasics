import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  standalone: true,
  imports: [],
  templateUrl: './prop-binding.component.html',
  styleUrl: './prop-binding.component.css'
})
export class PropBindingComponent {
      val:boolean=false;
      html:string="<b>This is bold from div tag</b>";
      obj={
        color:"white",
        backgroundColor:"red"
      };
}
