import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address',
  standalone: true
})
export class AddressPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string {
    return `${value[0]} - ${value[1]} - ${value[2]}, ${value[3]}`
  }

}
