import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentsComponent,
    SearchPipePipe,
    UpdateStudentComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent,AddStudentComponent]
})
export class AppModule { }
