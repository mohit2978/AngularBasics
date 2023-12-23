import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { SwitchCompComponent } from './components/switch-comp/switch-comp.component';
import { FormsModule } from '@angular/forms';
import { NgIfCompComponent } from './components/ng-if-comp/ng-if-comp.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    NgForComponent,SwitchCompComponent,FormsModule,
    CommonModule,NgIfCompComponent,NgClassComponent,
    NgStyleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DirectivesLearn';
}
