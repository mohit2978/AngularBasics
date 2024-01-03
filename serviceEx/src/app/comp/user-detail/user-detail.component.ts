import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  providers:[LoginService]
})
export class UserDetailComponent {
    constructor(private loginservice:LoginService){
      
    }

    checkService(){
      this.loginservice.login();
    }
}
