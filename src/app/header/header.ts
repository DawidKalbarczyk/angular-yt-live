import { Component, ElementRef, AfterViewInit, ViewChild, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../services/search';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  @ViewChild('livediv') liveDiv!: ElementRef;
  isRed = false;
  private searchService = inject(SearchService);

  ngAfterViewInit() {
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
}
