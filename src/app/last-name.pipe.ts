import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastName'
})
export class LastNamePipe implements PipeTransform {

  transform(value: any): string {
    const allNames = value.length;
    let oneName = '';
    for ( let i = 0; i < allNames; i++) {
      if (value.charAt(i) === '') {
        oneName = '';
      } else if (value.charAt(i) !== '') {
        oneName = oneName + value.charAt(i);
      }
    }
    return oneName;
  }
}
