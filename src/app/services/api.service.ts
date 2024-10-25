// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   constructor() {}
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // Obtener todos los posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  // Obtener posts por usuario
  getUserPosts(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts?userId=${userId}`);
  }

  // Obtener comentarios por post
  getPostComments(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}/comments`);
  }
}
