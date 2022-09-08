import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentService {

  constructor(private http:HttpClient) { }
// Updateing student details in the database using PUT request.
  public updateStudent(student:Student){
    return this.http.put('http://localhost:8080/student/update',student);
  }
// Checking the a vailability in the database of the student to update
  public findStudent(id:any){
    return this.http.get('http://localhost:8080/student/findstudent/' + id)
  }
}
