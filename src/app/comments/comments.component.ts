// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-comments',
//   standalone: true,
//   imports: [],
//   templateUrl: './comments.component.html',
//   styleUrl: './comments.component.css'
// })
// export class CommentsComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  postId: number | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Obtener el postId desde la URL
    this.route.paramMap.subscribe((params) => {
      this.postId = Number(params.get('postId'));

      if (this.postId) {
        this.loadComments(this.postId);
      }
    });
  }

  // Cargar comentarios del post seleccionado
  loadComments(postId: number): void {
    this.apiService.getPostComments(postId).subscribe((data: any) => {
      this.comments = data;
    });
  }
}
