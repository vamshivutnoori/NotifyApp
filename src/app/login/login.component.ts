import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import {users } from '../mock-users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users=users;
  constructor() { }

  ngOnInit() {
  }
 
}
