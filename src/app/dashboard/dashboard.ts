import { Component, inject } from '@angular/core';
import { videos } from '../video-model/video-model';
import { NgFor } from '@angular/common';
import { DateFormatPipe } from '../pipes/date-format-pipe';
import { ViewFormatPipe } from '../pipes/view-format-pipe';
import { SearchService } from '../services/search';
import { SearchBarPipe } from '../pipes/search-bar-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, DateFormatPipe, ViewFormatPipe, SearchBarPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly videos = videos;
  protected searchService = inject(SearchService);
}
