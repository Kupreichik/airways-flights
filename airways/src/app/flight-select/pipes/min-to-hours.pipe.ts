import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToHours',
})
export class MinToHoursPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}h ${minutes}m`;
  }
}
