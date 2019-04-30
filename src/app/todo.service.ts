import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private postTaskEndpoint = 'http://localhost:3000/api/task';
  private deleteTaskEndpoint = 'http://localhost:3000/api/task/';
  private getTasksEndpoint = 'http://localhost:3000/api/tasks';
  private getUserssEndpoint = 'http://localhost:3000/api/users';




   constructor(private _http : HttpClient) { }

   
  getTasks() {
    return this._http.get< any>(this.getTasksEndpoint);
  }
  getUsers() {
    return this._http.get< any>(this.getUserssEndpoint);
  }

  deleteTask(task : Task){
    return  this._http.delete(this.deleteTaskEndpoint + task._id)
  }


addTask(text :string , user : string){
  return this._http.post<any>(this.postTaskEndpoint,{
  text : text,
  user : user
  }
  )}



}





