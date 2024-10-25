// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-posts',
//   standalone: true,
//   imports: [],
//   templateUrl: './posts.component.html',
//   styleUrl: './posts.component.css'
// })
// export class PostsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  users: any[] = [];
  posts: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Cargar todos los usuarios
  loadUsers(): void {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  // Filtrar posts por usuario seleccionado
  onUserChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const userId = target.value;

    if (userId) {
      this.apiService.getUserPosts(Number(userId)).subscribe((data: any) => {
        this.posts = data;
      });
    } else {
      this.posts = [];
    }
  }

  // Redirigir a la ruta de comentarios
  onPostClick(post: any): void {
    this.router.navigate([`/comments/${post.id}`]);
  }
}
