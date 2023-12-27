import { Component } from '@angular/core';
import { FriendListComponent } from '../friend-list/friend-list.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FriendListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    name="Mohit Kumar";
    contact="7011819741";
}
