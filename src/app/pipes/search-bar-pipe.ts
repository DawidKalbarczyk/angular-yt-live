import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBar',
})
export class SearchBarPipe implements PipeTransform {
  transform(videos: any[], searchTerm: string): any[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return videos;
    }
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
