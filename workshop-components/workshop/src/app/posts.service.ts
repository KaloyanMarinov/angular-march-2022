import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost } from './interfaces/post';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  loadPosts(limit?: number) {
    return this.http.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
