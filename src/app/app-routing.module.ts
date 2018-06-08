import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { LoginComponent } from './login/login.component';
const routes:Routes =[
  { path:'courses',component: CoursesComponent },{ path:'dashboard',component: DashboardComponent},{ path: '',component:LoginComponent  },{path:'to-do-list',component:ToDoListComponent}
];@NgModule({
exports: [ RouterModule ],
imports: [RouterModule.forRoot(routes)],


})
export class AppRoutingModule { }
