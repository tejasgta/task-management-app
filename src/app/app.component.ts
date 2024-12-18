import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from '../../public/assets/dummy-users';
import {type User} from './user/user.model';
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management-app';
  currentUser?: User;

  users: User[] = [];

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    this.users = DUMMY_USERS;
  }

  onSelectUser(user: User) {
    this.currentUser = user;
  }
}
