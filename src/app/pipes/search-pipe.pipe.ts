import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value:any, selectedName:any): any {
    if(selectedName == ''){
      return value;
    }
    const students:Student[]=[];
        // returns an array of student details based on the selected name
    for (let i = 0; i < value.length; i++) {
      let studentName =value[i].name.toLowerCase() ;
     
      if(studentName.startsWith(selectedName.toLowerCase())){
        students.push(value[i]);
      }
    }
    console.log(students);
    
    return students;
  }

}
