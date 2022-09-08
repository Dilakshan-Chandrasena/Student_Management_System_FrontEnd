import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddStudentService } from '../services/add-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
// List of degrees available in the program
  degrees=['Bsc in Computer Science',
  'Bsc in Software Engineering',
  'Bsc in Aritificial Intelligence',
  'Bsc in Data Science',
  'Bsc in Business Information Systems'
  ]
  degreeHasError:boolean=true;
  studentModel: Student = new Student();
  message:any='';
  isAdded=false;
  constructor(private addStudentService:AddStudentService) { }
  
  ngOnInit(): void {
  }
  validateDegree(value:any){
    if(value === ''){
      this.degreeHasError= true;
    }else{
      this.degreeHasError = false;
    }
  }
   public addStudent(){
      let resp =this.addStudentService.createStudentRec(this.studentModel);
      resp.subscribe((data)=>this.message=data);
      this.isAdded=true;

  }
  addAnotherStudent(){
    this.studentModel.name='';
    this.studentModel.age='';
    this.studentModel.gender=''
    this.studentModel.email='';
    this.studentModel.contactNum='';
    this.studentModel.address='';
    this.studentModel.degree='';
    this.isAdded=false;
  }
}
