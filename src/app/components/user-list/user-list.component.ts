import { Component, OnInit } from '@angular/core';
import { users } from '../../data/users'
import { Kinja$User, getUsers } from '../../api/profile';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Kinja$User[] = [];

  constructor() { }

  ngOnInit(): void {
    getUsers().then(users => {
      this.users = users;
    });
  }

}
