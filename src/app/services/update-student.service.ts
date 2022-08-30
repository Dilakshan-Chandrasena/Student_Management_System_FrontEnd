import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentService {

  constructor(private http:HttpClient) { }

  public updateStudent(student:Student){
    return this.http.put('http://localhost:8080/student/update',student);
  }

  public findStudent(id:any){
    return this.http.get('http://localhost:8080/student/findstudent/' + id)
  }
}
