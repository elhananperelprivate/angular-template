import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VideosComponent} from "./features/videos/components/videos/videos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-template';
}
