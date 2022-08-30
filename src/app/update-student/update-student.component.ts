import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { UpdateStudentService } from '../update-student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private updateService:UpdateStudentService, private router:ActivatedRoute) { }
  student:any;
 
  isUpdated=false;
  id:any;
  degrees=['Bsc in Computer Science',
  'Bsc in Software Engineering',
  'Bsc in Aritificial Intelligence',
  'Bsc in Data Science',
  'Bsc in Business Information Systems'
  ]
  degreeHasError:boolean=true;

  ngOnInit(): void {
    this.router.paramMap.subscribe(param=> this.id=param.get('id'));
    this.updateService.findStudent(this.id)
    .subscribe(data=> this.student=data);
    
  
  }
  validateDegree(value:any){
    if(value === ''){
      this.degreeHasError= true;
    }else{
      this.degreeHasError = false;
    }
  }

  public updateStudent(){
    this.updateService.updateStudent(this.student)
      .subscribe(data=>this.student=data)
  }

}
