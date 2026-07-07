import { Component, ElementRef, AfterViewInit, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../services/search';
import { NotificationPanel } from '../components/notification-panel/notification-panel';


@Component({
  selector: 'app-header',
  imports: [RouterLink, NotificationPanel],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  @ViewChild('livediv') liveDiv!: ElementRef;
  @ViewChild('not_panel') not_panel!: ElementRef;
  @ViewChild('notification_clicked') notification_clicked!: ElementRef;
  isRed = false;
  isNotificationClicked = false;

  private notificationPanel!: HTMLElement;
  private searchService = inject(SearchService);

  ngAfterViewInit() {
    this.notificationPanel = this.not_panel.nativeElement;

    setInterval(() => {
      this.isRed = !this.isRed;
      this.liveDiv.nativeElement.style.backgroundColor = this.isRed ? 'red' : 'black';
      this.liveDiv.nativeElement.style.border = this.isRed ? '1.5px solid black' : '1.5px solid white';
    }, 1500);
  }

  onSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.searchService.setSearchTerm(searchTerm);
  }

  showNotificationPanel() {
    this.notificationPanel.classList.add('notification-panel-toggle',);
  }

  hideNotificationPanel() {
    if (this.isNotificationClicked) {
      return;
    } else {
      this.notificationPanel.classList.remove('notification-panel-toggle');
    }
  }

  toggleNotificationPanel() {
    this.isNotificationClicked = !this.isNotificationClicked;
    this.notification_clicked.nativeElement.style.backgroundColor 
    = this.isNotificationClicked ? 'rgb(148, 1, 1)' : 'transparent';
    if (this.isNotificationClicked) {
      this.hideNotificationPanel();
    } else {
      this.showNotificationPanel();
    }
  }
}

