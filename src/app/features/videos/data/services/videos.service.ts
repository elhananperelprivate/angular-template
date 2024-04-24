import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../types';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('http://localhost:3000/videos');
  }
}
