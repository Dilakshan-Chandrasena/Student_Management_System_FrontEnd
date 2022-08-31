import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student';

@Pipe({
  name: 'searchByDegree'
})
export class SearchByDegreePipe implements PipeTransform {

  transform(value:any,selectedDegree:any) {
    if(selectedDegree==''){
      return value;
    }

    const degrees:Student[]=[];
    for (let i = 0; i < value.length; i++) {
      let degree =value[i].degree ;
      if(degree===selectedDegree){
        degrees.push(value[i]);
      }
    }
    
    return degrees;

  }

}
