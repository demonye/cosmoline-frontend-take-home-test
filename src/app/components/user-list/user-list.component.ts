import { Component, OnInit } from '@angular/core';
import { users } from '../../data/users';
import { Facteon$User, getUsers } from '../../api/profile';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Facteon$User[] = [];

  constructor() { }

  ngOnInit(): void {
    getUsers().then(() => {
      this.users = users;
    });
  }

}
