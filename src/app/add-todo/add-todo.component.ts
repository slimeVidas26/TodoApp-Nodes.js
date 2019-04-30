import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  private users = [];
  notice = 'Loading...';
  tasks=[] ;
  task : any;
  text: '';
  user: '';

  constructor(private todoservice : TodoService ,  private router: Router) { }

  ngOnInit() {
    this.todoservice.getUsers().subscribe(
      result => {
        console.log(result);
        this.users = result;
      },
      err => {
        this.notice = err;
      });

  }


  onSubmitAddTask(){
    this.todoservice.addTask(this.text , this.user)
    .subscribe(resNewTask=>{
    this.tasks.push(resNewTask);
console.log(resNewTask);
    this.router.navigate([`/home`]);  
   
    });
     }

}
