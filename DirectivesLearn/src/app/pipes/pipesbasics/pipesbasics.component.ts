import { DatePipe, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PowerPipePipe } from '../../customPipes/power-pipe.pipe';

@Component({
  selector: 'app-pipesbasics',
  standalone: true,
  imports: [DatePipe,LowerCasePipe,PowerPipePipe],
  templateUrl: './pipesbasics.component.html',
  styleUrl: './pipesbasics.component.css'
})
export class PipesbasicsComponent {
    val=4;
}
