import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private tasks = [];
  notice = 'Loading...';


  constructor(private todoservice : TodoService) { }

  ngOnInit() {

    this.todoservice.getTasks().subscribe(
      result => {
        console.log(result);
        this.tasks = result;
      },
      err => {
        this.notice = err;
      });

  }



  

}
