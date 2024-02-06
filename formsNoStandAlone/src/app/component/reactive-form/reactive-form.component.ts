import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  host: {ngSkipHydration: 'true'},
})
export class ReactiveFormComponent implements OnInit {
  constructor(private formBuilder:FormBuilder){

  }
  userform=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl(''),
    city:new FormControl(''),
    gender:new FormControl(''),
    about:new FormControl('')
  });
  loginForm= this.formBuilder.group({
    email:["test@gmail.com"],
    pwd:["",Validators.required],
    adress:this.formBuilder.group({
      lane:["J-2978"],
      sector:["Sector-49"],
      city:[""]
    }),
    interests:this.formBuilder.array([])
  })
  ngOnInit(): void {
    this.loginForm.get('email').valueChanges.subscribe(val=>{
      console.log("value changes new value is "+val);
      
    });
    this.loginForm.valueChanges.subscribe(val=>{
      console.log("value 1 changes new value is ");
      console.log(val);
      
    });
  }
  getInterest():FormArray{
    return this.loginForm.get("interests") as FormArray
  }
  createInterest():FormGroup{
    return this.formBuilder.group({
      name:"",
      timeInWeeks:['']
    })
  }
   addInterest(){
    this.getInterest().push(this.createInterest());
   }

   removeInterest(i:number){
    this.getInterest().removeAt(i);
   }
  submitForm1(){
    console.log(this.loginForm.value);
    console.log("form submitted");
    
  }
  submitForm(){
    console.log(this.userform.value);
    console.log("form submitted");
    
  }
  
}
