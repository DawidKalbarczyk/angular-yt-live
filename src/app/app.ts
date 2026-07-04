import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { LeftBar} from './left-bar/left-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, LeftBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-yt-live');
}
