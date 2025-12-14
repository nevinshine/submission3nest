import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container"><h1 class="fw-bold">Our Services</h1></div>
    </div>
    <div class="container mb-5">
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let srv of services">
          <div class="service-card p-4 text-center h-100 shadow-sm">
            <i [class]="srv.icon + ' fa-3x mb-3'" style="color: #ff9933;"></i>
            <h4>{{ srv.title }}</h4>
            <p class="text-muted">{{ srv.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header { background: #1a2340; color: white; padding: 60px 0; text-align: center; margin-bottom: 40px; }
    .service-card { background: white; border: 1px solid #eee; border-radius: 12px; transition: 0.3s; }
    .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-bottom: 5px solid #ff9933; }
  `]
})
export class ServicesComponent {
  services = [
    { title: 'Cloud Services', icon: 'fas fa-cloud', desc: 'Scalable cloud solutions.' },
    { title: 'Cyber Security', icon: 'fas fa-shield-alt', desc: 'Robust security assessments.' },
    { title: 'Data Engineering', icon: 'fas fa-database', desc: 'Building robust data pipelines.' },
    { title: 'DevOps', icon: 'fas fa-code-branch', desc: 'Accelerating delivery with CI/CD.' },
    { title: 'GIS Services', icon: 'fas fa-map-marked-alt', desc: 'Geospatial data analysis.' },
    { title: 'Digital Consulting', icon: 'fas fa-lightbulb', desc: 'Strategic guidance.' }
  ];
}