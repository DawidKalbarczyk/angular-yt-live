import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(daysFromToday: string): string {
    const differenceInDays = parseInt(daysFromToday, 10);

    if (Number.isNaN(differenceInDays)) {
      return 'Unknown date';
    }

    if (differenceInDays < 1) {
      return 'Today';
    } else if (differenceInDays === 1) {
      return 'Yesterday';
    } else if (differenceInDays < 7) {
      return `${differenceInDays} days ago`;
    } else if (differenceInDays < 30) {
      const weeks = Math.floor(differenceInDays / 7);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (differenceInDays < 365) {
      const months = Math.floor(differenceInDays / 30);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(differenceInDays / 365);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  }
}
