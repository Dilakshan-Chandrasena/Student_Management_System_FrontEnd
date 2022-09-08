import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http:HttpClient) { }
// radding a student to the database using POST request. returs a message from the database
  public createStudentRec(student:Student){
    let message =this.http.post('http://localhost:8080/student/create',student,{responseType:'text' as 'json'});
    return message;
  }
}
