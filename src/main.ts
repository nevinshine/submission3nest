import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, RouterModule } from '@angular/router';

// Import Components (Corrected Paths: ./ instead of ./app/)
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { BusinessComponent } from './business.component';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';
import { IndustryDetailComponent } from './industry-detail.component';
import { BlogDetailComponent } from './blog-detail.component';
import { BackToTopComponent } from './back-to-top.component';

// Define Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'industry/:id', component: IndustryDetailComponent }, // Dynamic Route
  { path: 'blog/:id', component: BlogDetailComponent }, // Dynamic Route
  { path: '**', redirectTo: '' }
];

// Root Component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, BackToTopComponent],
  template: `
    <!-- External CSS for Bootstrap & FontAwesome -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <app-navbar></app-navbar>
    <app-back-to-top></app-back-to-top>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; min-height: 100vh; }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});