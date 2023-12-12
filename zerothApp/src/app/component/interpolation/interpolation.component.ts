import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  fName="Mohit";
  lName="Kumar";
  Name=this.fName+" "+this.lName;
  laptop=["sony VAIO","Lenovo","samsung"];
  adress='J-29889,Sainik Colony,FBD,HRY';

  getnamecaps():string{
    return this.Name.toLocaleUpperCase();
  }
}
