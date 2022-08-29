import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ViewStudentsService } from '../view-students.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  allStudents:any;
  constructor(private viewStudentService:ViewStudentsService) { }

  ngOnInit(): void {
    this.viewStudentService.getAllStudents()
      .subscribe(data=>this.allStudents=data);
  }

}
