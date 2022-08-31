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
  searchByName='';
  searchByEmail='';
  searchByDegree='';
  message:any='';
  constructor(private viewStudentService:ViewStudentsService) { }

  ngOnInit(): void {
    this.viewStudentService.getAllStudents()
      .subscribe(data=>this.allStudents=data);
  }

  public deleteStudent(id:number){
    this.viewStudentService.deleteStudentById(id)
      .subscribe(data=> this.allStudents=data) 
          
  }

}
