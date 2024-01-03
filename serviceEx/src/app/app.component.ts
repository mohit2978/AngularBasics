import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from './comp/list-user/list-user.component';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { UserDetailComponent } from './comp/user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListUserComponent,UserDetailComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[LoginService]
})
export class AppComponent {
  title = 'serviceEx';
}
