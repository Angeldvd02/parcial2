// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { CommentsComponent } from './comments/comments.component'; // Importar el nuevo componente de comentarios

// const routes: Routes = [
//   { path: '', component: AppComponent }, // Ruta principal
//   { path: 'comments/:postId', component: CommentsComponent }, // Ruta para mostrar los comentarios
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component'; // Importar el nuevo componente de comentarios

// Exportar la constante routes para que pueda ser utilizada en otros módulos
export const routes: Routes = [
  //   { path: '', component: AppComponent }, // Ruta principal
  { path: '', component: PostsComponent }, // Ruta para mostrar los posts
  { path: 'comments/:postId', component: CommentsComponent }, // Ruta para mostrar los comentarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
