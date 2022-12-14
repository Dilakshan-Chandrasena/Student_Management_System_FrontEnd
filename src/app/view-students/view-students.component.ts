import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ViewStudentsService } from '../services/view-students.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  degrees=['Bsc in Computer Science',
  'Bsc in Software Engineering',
  'Bsc in Aritificial Intelligence',
  'Bsc in Data Science',
  'Bsc in Business Information Systems'
  ]
  allStudents:any;
  // variables to filter student details
  searchByName='';
  searchByEmail='';
  searchByDegree='';
  constructor(private viewStudentService:ViewStudentsService) { }

  ngOnInit(): void {
    // All the student details will be assigned to allStudents variable
    this.viewStudentService.getAllStudents()
      .subscribe(data=>this.allStudents=data);
  }

  public deleteStudent(id:number){
    this.viewStudentService.deleteStudentById(id)
      .subscribe(data=> this.allStudents=data) 
          
  }

}
