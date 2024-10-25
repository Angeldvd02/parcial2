// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'parcial';
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
