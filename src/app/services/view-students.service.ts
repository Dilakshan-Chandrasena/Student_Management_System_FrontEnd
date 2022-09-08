import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewStudentsService {

  constructor(private http:HttpClient) { }
// Getting all the student details using GET request and returning the details
  public getAllStudents(){
    return this.http.get('http://localhost:8080/student/list');
  }
// Deleting a student using a DELETE request
  public deleteStudentById(id:any){
    return this.http.delete('http://localhost:8080/student/delete/' + id);
  }
}
