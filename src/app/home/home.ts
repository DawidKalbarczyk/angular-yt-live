import { Component } from '@angular/core';
import { Header } from '../header/header';
import { LeftBar } from '../left-bar/left-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, LeftBar, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
