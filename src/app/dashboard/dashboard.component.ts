import { Component, OnInit } from '@angular/core';
import {reminder} from '../reminders';
import {reminding} from '../mock-reminders';
import {notification} from '../notifications';
import {notify} from '../mock-notifications';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  note=notify;
  rem=reminding;
  remind : reminder = {
    data : 'quiz on next monday',
    date :   '25-10-2018'
  } 
  constructor() { }

  ngOnInit() {
  }

}