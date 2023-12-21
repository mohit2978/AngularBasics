import { Component } from '@angular/core';
import { Student } from '../../models/Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
    id:number=6;
    students=[
      new Student(1,"mohit kumar",97172301011,"CSE"),
      new Student(2,"akshay kumar",97172301011,"ECE"),
      new Student(3,"rahnyan kumar",97172301011,"CSE"),
      new Student(4,"tarz kumar",97172301011,"ME"),
      new Student(5,"farxzan kumar",97172301011,"CE")
    ]
    removeStudent(){
      this.students.shift();
    }
    addStudent(){
      this.students.push(new Student(this.id,"abcTemp",1234567890,"Temp"));
      this.id=this.id+1;
    }
}
