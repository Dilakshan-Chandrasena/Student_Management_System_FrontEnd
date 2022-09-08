import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
// Getting all the student counts using GET requests and returing the retrieved counts
  public getStudentCount(){
    return this.http.get("http://localhost:8080/student/studentCount");
  }

  public getStudentCountByDegree(degree:string){
    return this.http.get("http://localhost:8080/student/studentCountDegree/" + degree);
  }

  public getStudentCountByGender(gender:string){
    return this.http.get("http://localhost:8080/student/studentCountGender/" + gender);
  }
}
