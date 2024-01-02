import { Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
      userService:UserService;
      users:User[] |undefined
      constructor(){
        this.userService=new UserService();
      }
      getUsers(){
        this.users=this.userService.getUsers();
        return this.users;
      }
      insertUsers(){
        this.userService.addUsers(new User("ram","ram.shayam@gmail.com","god"))
      }
}
