import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe',
  standalone: true
})
export class PowerPipePipe implements PipeTransform {

  transform(value: number,exp:number): number {
    return Math.pow(value,exp);
  }

}
