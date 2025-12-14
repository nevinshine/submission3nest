import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService, Industry } from './data.service';

@Component({
  selector: 'app-industry-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="industry; else notFound">
      <div class="page-hero" [style.backgroundImage]="'linear-gradient(rgba(26,35,64,0.7), rgba(26,35,64,0.7)), url(' + industry.heroImage + ')'">
        <div class="container text-center text-white">
          <h1 class="display-4 fw-bold">{{ industry.title }}</h1>
        </div>
      </div>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8">
            <h2 class="mb-4" style="color: #1a2340;">Overview</h2>
            <p class="lead">{{ industry.content }}</p>
            <h4 class="mt-4">Key Capabilities</h4>
            <ul><li *ngFor="let feat of industry.features">{{ feat }}</li></ul>
            <div class="mt-5"><a routerLink="/business" class="btn btn-outline-dark rounded-pill">Back to Business</a></div>
          </div>
          <div class="col-lg-4">
            <div class="p-4 bg-light rounded border">
              <h5>Need a Solution?</h5>
              <a routerLink="/contact" class="btn btn-primary w-100">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ng-template #notFound><div class="container py-5 text-center"><h2>Industry Not Found</h2></div></ng-template>
  `,
  styles: [`
    .page-hero { height: 400px; display: flex; align-items: center; justify-content: center; background-size: cover; background-position: center; }
  `]
})
export class IndustryDetailComponent {
  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  industry?: Industry;

  constructor() {
    this.route.params.subscribe(params => {
      this.industry = this.dataService.getIndustry(params['id']);
    });
  }
}