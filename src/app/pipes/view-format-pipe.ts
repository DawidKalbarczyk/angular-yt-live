import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewFormat',
})
export class ViewFormatPipe implements PipeTransform {
  transform(views: number): string {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    }
    if (views >= 1000) {
      return (views / 1000).toFixed(0) + 'K';
    }
    return views.toString();
  }
}
