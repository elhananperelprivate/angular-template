import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Video, VideosService} from "../../data";
import {Observable, of} from "rxjs";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, TableModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent implements OnInit {
  private videosService: VideosService = inject(VideosService);
  videos$: Observable<Video[]> = of([]);

  ngOnInit() {
    this.videos$ = this.videosService.getVideos();
  }
}
