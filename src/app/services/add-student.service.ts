import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http:HttpClient) { }

  public createStudentRec(student:Student){
    let something =this.http.post('http://localhost:8080/student/create',student,{responseType:'text' as 'json'});
    return something;
  }
}
