import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raceBadge'
})
export class RacePipe implements PipeTransform {

  transform(raceName: string): string {
    return 'badge '+raceName.toLowerCase()+'ColorBack';
  }

}
