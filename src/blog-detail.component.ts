import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService, Blog } from './data.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mt-5 mb-5" *ngIf="blog">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <img [src]="blog.image" class="w-100 rounded mb-4" style="height: 400px; object-fit: cover;">
          <h1 class="fw-bold mb-3">{{ blog.title }}</h1>
          <p class="lead" [innerHTML]="blog.content"></p>
          <div class="mt-5 text-center"><a routerLink="/" class="btn btn-outline-primary rounded-pill">Back to Home</a></div>
        </div>
      </div>
    </div>
  `
})
export class BlogDetailComponent {
  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  blog?: Blog;
  
  constructor() {
    this.route.params.subscribe(params => {
      this.blog = this.dataService.getBlog(params['id']);
    });
  }
}