import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="container"><h1 class="fw-bold">Industries We Serve</h1></div>
    </div>
    <div class="container mb-5">
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let ind of industries">
          <a [routerLink]="['/industry', ind.id]" class="industry-item d-block text-decoration-none">
            <img [src]="ind.heroImage" class="w-100" style="height: 300px; object-fit: cover;">
            <div class="industry-overlay">
              <div class="industry-title text-white fw-bold">{{ ind.title }}</div>
              <small class="text-light">Click to read more...</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header { background: #1a2340; color: white; padding: 60px 0; text-align: center; margin-bottom: 40px; }
    .industry-item { position: relative; overflow: hidden; border-radius: 8px; transition: transform 0.3s; }
    .industry-item:hover { transform: scale(1.02); }
    .industry-overlay { position: absolute; bottom: 0; width: 100%; background: linear-gradient(to top, #1a2340 10%, transparent); padding: 20px; color: white; }
  `]
})
export class BusinessComponent {
  dataService = inject(DataService);
  industries = this.dataService.industries;
}