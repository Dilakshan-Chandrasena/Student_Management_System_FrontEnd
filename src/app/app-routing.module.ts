import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"main",component:NavComponent,canActivate:[AuthGuard]},
  {path:"list",component:ViewStudentsComponent,canActivate:[AuthGuard]},
  {path:"create", component:AddStudentComponent,canActivate:[AuthGuard]},
  {path:"update/:id",component:UpdateStudentComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
