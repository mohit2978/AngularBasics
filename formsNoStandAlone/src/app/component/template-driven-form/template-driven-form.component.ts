import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { table } from 'console';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  submitForm(userForm:NgForm){
      console.log("form Submitted");
      console.log(userForm);
      console.table(userForm.value);
  }
}
