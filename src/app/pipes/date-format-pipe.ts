import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(date: Date): string {
    const d = new Date();

    const differenceInMilliseconds = d.getTime() - date.getTime();
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

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
