import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  {path:"",redirectTo:"",pathMatch:"full", component:LoginComponent},
  {path:"list",component:ViewStudentsComponent},
  {path:"create", component:AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
