import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImage'
})
export class PipeImagePipe implements PipeTransform {
  transform(value: string): string {
   
  
    if (!value || value.trim() === '') {
      return 'assets/images/rotating_card_profile.png';
    }
    return value;
  }
}