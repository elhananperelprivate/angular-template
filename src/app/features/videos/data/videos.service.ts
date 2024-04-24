import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getVideos(): Observable<
    { title: string; description: string; thumbnail: string }[]
  > {
    return this.http.get<
      { title: string; description: string; thumbnail: string }[]
    >('http://localhost:3000/videos');
  }
}
