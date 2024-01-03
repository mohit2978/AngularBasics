import { Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';
import { RandCompComponent } from '../rand-comp/rand-comp.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule,RandCompComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
  providers:[UserService]
})
export class ListUserComponent {
      users:User[] |undefined
      constructor(private userService:UserService){
        //this.userService=new UserService();
      }
      getUsers(){
        this.users=this.userService.getUsers();
        return this.users;
      }
      insertUsers(){
        this.userService.addUsers(new User("ram","ram.shayam@gmail.com","god"))
      }
}
