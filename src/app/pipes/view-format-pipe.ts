import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewFormat',
})
export class ViewFormatPipe implements PipeTransform {
  transform(views: number): string {
    if (views >= 1000000) {
      if ((Math.round(views % 1000000) <= 500000)) {
        return ((views / 1000000).toFixed(0)).toString() + 'M';
      }
      let result = (views / 1000000).toFixed(1);
      if (result.endsWith('.0')) {
        result = result.slice(0, -2);
      }
      return result + 'M';
    }
    if (views >= 1000) {
      if ((Math.round(views % 1000) <= 500)) {
        return ((views / 1000).toFixed(0)).toString() + 'K';
      }
      let result = (views / 1000).toFixed(1);
      if (result.endsWith('.0')) {
        result = result.slice(0, -2);
      }
      return result + 'K';
    }
    return views.toString();
  }
}
