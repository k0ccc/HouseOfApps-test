import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      'http://jsonplaceholder.typicode.com/posts'
    );
  }
  getPostById(idPost: number): Observable<Post> {
    return this.httpClient.get<Post>(
      'http://jsonplaceholder.typicode.com/posts/' + idPost
    );
  }
  patchPost(
    idPost: number,
    id?: number,
    title?: string,
    body?: string,
    userId?: string
  ) {
    return this.httpClient.patch(
      'http://jsonplaceholder.typicode.com/posts/' + idPost,
      {
        id: id,
        title: title,
        body: body,
        userId: userId,
      }
    );
  }
  deletePost(idPost:number){
    return this.httpClient.delete(
      'http://jsonplaceholder.typicode.com/posts/' + idPost
    );
  };
}