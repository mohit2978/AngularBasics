import { Component } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {
    friendList=[
      new Person("mohit","fbd","1244"),
      new Person("rohit","fbd","12214"),
      new Person("bhit","fbd122","12214"),
    ]
}
