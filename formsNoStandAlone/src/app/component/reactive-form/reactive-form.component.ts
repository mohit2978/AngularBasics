import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  host: {ngSkipHydration: 'true'},
})
export class ReactiveFormComponent {
  userform=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    city:new FormControl(''),
    gender:new FormControl(''),
    about:new FormControl('')
  });

  submitForm(){
    console.log(this.userform.value);
    console.log("form submitted");
    
    
  }
}
