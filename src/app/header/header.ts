import { Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  @ViewChild('livediv') liveDiv!: ElementRef;
  isRed = false;

  ngAfterViewInit() {
    setInterval(() => {
      this.isRed = !this.isRed;
      this.liveDiv.nativeElement.style.backgroundColor = this.isRed ? 'red' : 'black';
      this.liveDiv.nativeElement.style.border = this.isRed ? '1.5px solid black' : '1.5px solid white';
    
    }, 1500);
  }
}
