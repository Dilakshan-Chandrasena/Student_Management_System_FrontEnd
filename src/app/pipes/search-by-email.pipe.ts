import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student';

@Pipe({
  name: 'searchByEmail'
})
export class SearchByEmailPipe implements PipeTransform {

  transform(value:any, selectedEmail:any) {
        // returns an array of student details based on the selected email
    if(selectedEmail == ''){
      return value;
    }
    const students:Student[]=[];
    for (let i = 0; i < value.length; i++) {
      let studentName =value[i].email.toLowerCase() ;
     
      if(studentName.startsWith(selectedEmail.toLowerCase())){
        students.push(value[i]);
      }
    }
    console.log(students);
    
    return students;
  }
}
