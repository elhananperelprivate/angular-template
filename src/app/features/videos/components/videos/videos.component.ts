import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {VideosService} from "../../data/videos.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent implements OnInit{
  private videosService: VideosService = inject(VideosService);
  videos$: Observable<any[]> = of([]);

  ngOnInit() {
    this.videos$ = this.videosService.getVideos();
  }

}
