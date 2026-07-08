import { Component, inject, signal, OnInit, ChangeDetectorRef, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Video } from '../video-model/video-model';
import { DateFormatPipe } from '../pipes/date-format-pipe';
import { ViewFormatPipe } from '../pipes/view-format-pipe';
import { SearchService } from '../services/search';
import { SearchBarPipe } from '../pipes/search-bar-pipe';
import { TitleFormatPipe } from '../pipes/title-format-pipe';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DateFormatPipe, ViewFormatPipe, SearchBarPipe, TitleFormatPipe, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit, AfterViewInit {
  videos: Video[] = [];
  protected searchService = inject(SearchService);
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  displayLimit = signal(16);
  loadingMore = signal(false);
  loadMore(step: number = 16) {
    if (this.loadingMore()) return;
    this.loadingMore.set(true);
    
    setTimeout(() => {
      this.displayLimit.update(current => current + step);
      this.loadingMore.set(false);
    }, 1000);
  }

  @ViewChildren('observed') observedElements!: QueryList<ElementRef>;

  ngOnInit() {
    this.http.get<Video[]>('/videos.json').subscribe((data) => {
      this.videos = data;
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.observedElements.changes.subscribe(() => {
      this.observeLastElement();
    });
    this.observeLastElement();
  }

  private observeLastElement() {
    const elements = this.observedElements.toArray();
    if (!elements.length) return;

    const last = elements[elements.length - 1].nativeElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadMore();
          observer.disconnect();
        }
      });
    });

    observer.observe(last);
  }
}