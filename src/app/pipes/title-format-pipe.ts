import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFormat',
})
export class TitleFormatPipe implements PipeTransform {
  transform(title: string): string {
    if (title.length > 60) {
      return title.substring(0, 60) + '...';
    } else {
      return title;
    }
  }
}
