import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  formSubmit(userForm:NgForm){
    console.log("Form submitted");
    console.log(userForm);
    
    console.table(userForm.value);
    
  }

}
