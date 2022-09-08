import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalStudents:any;
  degrees=['Bsc in Computer Science',
  'Bsc in Software Engineering',
  'Bsc in Aritificial Intelligence',
  'Bsc in Data Science',
  'Bsc in Business Information Systems'
  ]
  csCount:any;
  seCount:any;
  aiCount:any;
  dsCount:any;
  bisCount:any;

  maleCount:any;
  femaleCount:any;


  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    // getting all the relevant student counts from the database and assigning
    this.dashboardService.getStudentCount()
      .subscribe(data => this.totalStudents =data);

    this.dashboardService.getStudentCountByDegree(this.degrees[0])
      .subscribe(data => this.csCount = data)

    this.dashboardService.getStudentCountByDegree(this.degrees[1])
    .subscribe(data => this.seCount = data) 

    this.dashboardService.getStudentCountByDegree(this.degrees[2])
    .subscribe(data => this.aiCount = data)
    
    this.dashboardService.getStudentCountByDegree(this.degrees[3])
    .subscribe(data => this.dsCount = data) 

    this.dashboardService.getStudentCountByDegree(this.degrees[4])
    .subscribe(data => this.bisCount = data) 

    this.dashboardService.getStudentCountByGender("M")
    .subscribe(data => this.maleCount = data) 

    this.dashboardService.getStudentCountByGender("F")
    .subscribe(data => this.femaleCount = data) 
  }

}
