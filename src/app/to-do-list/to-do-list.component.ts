import { Component, OnInit } from '@angular/core';
import {todo} from '../todos';
import {tod} from '../mock-todos';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
   to=tod;
  constructor() { }

  ngOnInit() {
  }

}