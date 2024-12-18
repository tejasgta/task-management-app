import {Component, computed, EventEmitter, input, Input, Output, signal} from '@angular/core';
import {User} from './user.model';
import {CardComponent} from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selectedUser = new EventEmitter<User>();


  // user = input.required<User>();

  onSelectUser() {
    this.selectedUser.emit(this.user);
  }

  get userName() {
    return this.user.name;
  }

  // imagePath = computed(() => 'assets/users/' + this.user().avatar);
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
