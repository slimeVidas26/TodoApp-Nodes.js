import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
{path : '',redirectTo : '/home' , pathMatch :'full'},
{path : 'home', component : HomeComponent},
{path : 'add', component : AddTodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
