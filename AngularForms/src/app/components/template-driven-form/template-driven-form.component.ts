import { Component, OnInit ,ViewChild} from '@angular/core';
import { User } from '../../models/User';
import {  FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('userForm', { static: true }) userForm: NgForm | undefined;
  user = new User('', '', '', '', '', 0);

  ngOnInit(): void {
    console.log(this.userForm);
    this.user.name = '';

    setTimeout(() => {
      this.userForm?.setValue(this.user);
    });
  }
  formSubmitted(userForm: NgForm) {
    console.log('form submitted');
    console.log(userForm);
    console.table(userForm.value);
    console.log(userForm.form.controls['name'].value);
    console.log(userForm.valid);
    this.user.name = 'Ankit';
    this.user.about = 'I dont know programming';
    this.user.email = 'ankit@gmail.com';
    this.user.gender = 'Female';
    this.user.city = 'Delhi';
  }
}
