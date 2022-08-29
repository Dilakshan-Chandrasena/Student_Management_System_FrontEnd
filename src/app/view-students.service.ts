import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewStudentsService {

  constructor(private http:HttpClient) { }

  public getAllStudents(){
    return this.http.get('http://localhost:8080/student/list');
  }
}
