import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Carousel -->
    <div id="carouselExampleRide" class="carousel slide hero-carousel" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://dbe101ba.delivery.rocketcdn.me/wp-content/uploads/2025/05/40085246_1923403371052109_6621248452552556544_n-1-1-1.webp" class="d-block w-100" alt="Hero 1">
            </div>
            <div class="carousel-item">
                <img src="https://static.ambitionbox.com/api/v2/photo/RHIwODlFbHVaTGVuekljamhNSmdGdz09" class="d-block w-100" alt="Hero 2">
            </div>
            <div class="carousel-item">
                <img src="https://nestdigital.com/wp-content/uploads/2023/08/ktu-on-board-banner-top.png" class="d-block w-100" alt="Hero 3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 mb-4">
            <div class="stat-number">25+</div>
            <p class="fs-5">Years of Excellence</p>
          </div>
          <div class="col-md-3 mb-4">
            <div class="stat-number">10,000+</div>
            <p class="fs-5">Talented Employees</p>
          </div>
          <div class="col-md-3 mb-4">
            <div class="stat-number">60+</div>
            <p class="fs-5">Global Clients</p>
          </div>
          <div class="col-md-3 mb-4">
            <div class="stat-number">6</div>
            <p class="fs-5">Countries</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
        <div class="row g-0 align-items-center">
            <div class="col-md-6">
                <div class="mission-text container ps-md-5">
                    We combine our deep domain expertise, reusable digital platforms, & complimentary services to deliver world class solutions that brings outstanding success for our customers
                </div>
            </div>
            <div class="col-md-6">
                <div class="mission-img-container">
                    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Team meeting">
                </div>
            </div>
        </div>
    </section>

    <!-- Industries Preview -->
    <section class="container pt-5 pb-5">
      <h2 class="section-title text-center">Industries We Serve</h2>
      <p class="section-subtitle text-center text-muted mb-5">Delivering vertical-specific solutions that drive efficiency and growth across major sectors.</p>
      
      <div class="row">
        <!-- Loop through first 3 industries from DataService -->
        <div class="col-md-4 mb-4" *ngFor="let ind of industries.slice(0,3)">
          <a [routerLink]="['/industry', ind.id]" class="industry-item d-block text-decoration-none">
            <img [src]="ind.heroImage" [alt]="ind.title">
            <div class="industry-overlay">
              <div class="industry-title">{{ ind.title }}</div>
            </div>
          </a>
        </div>
      </div>
      <div class="text-center mt-3">
        <a routerLink="/business" class="btn btn-outline-primary rounded-pill px-4">View All Industries</a>
      </div>
    </section>

    <!-- Blogs Section -->
    <section class="blog-section container">
        <div class="row">
            <div class="col-lg-3 mb-4">
                <h2 class="blog-title">Explore Blogs</h2>
                <p class="text-muted">Check out the latest trends and innovations in the tech industry by our experts.</p>
                <p class="text-muted small">Featuring compelling and engaging stories here, whether you’re a tech enthusiast, a business owner looking to stay competitive...</p>
                <a [routerLink]="['/blog', blogs[0].id]" class="btn-discover">Discover Here</a>
            </div>

            <!-- Loop through Blogs from DataService -->
            <div class="col-lg-3 col-md-4 mb-4" *ngFor="let blog of blogs">
                <a [routerLink]="['/blog', blog.id]" class="blog-link">
                    <div class="blog-card">
                        <img [src]="blog.image" [alt]="blog.title">
                        <div class="blog-overlay">
                            <h5>{{ blog.title }}</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonial-section container">
        <div class="row align-items-center">
            <div class="col-md-5">
                <h2 class="testi-heading">What our<br>Customers<br>say about us</h2>
            </div>
            <div class="col-md-7">
                <div id="carouselTestimonials" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="testi-icon"><i class="fas fa-industry"></i></div>
                            <p class="testi-text">
                                "We appreciate the thoughtfulness at NeST’s side in this difficult situation for taking effective steps to ensure that the services go on, uninterrupted, by minimizing any impact of this pandemic. We sincerely hope that everybody recovers from the aftereffects of COVID-19 very soon."
                            </p>
                            <p class="testi-author">CEO,<br><span class="text-primary">Engineering major based in the USA</span></p>
                        </div>
                        <div class="carousel-item">
                            <div class="testi-icon"><i class="fas fa-building"></i></div>
                            <p class="testi-text">
                                "Even if your team is at home/office, we are always receiving immediate response from your team and this is certainly praiseworthy."
                            </p>
                            <p class="testi-author">Engineering Director,<br><span class="text-primary">US based Industrial Client</span></p>
                        </div>
                    </div>
                    <div class="carousel-indicators" style="position: static; justify-content: start; margin-top: 20px; margin-left: 0;">
                        <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="0" class="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="1"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [`
    /* --- HERO CAROUSEL --- */
    .hero-carousel .carousel-item img {
        height: 500px; 
        object-fit: cover; 
    }

    /* --- STATS SECTION --- */
    .stats-section {
        background-color: #f0f4fa; 
        padding: 50px 0;
        border-bottom: 1px solid #e0e0e0;
    }
    .stat-number {
        color: #1a2340; 
        font-size: 3rem; 
        font-weight: 700;
        line-height: 1;
        margin-bottom: 10px;
    }

    /* --- MISSION SECTION --- */
    .mission-section {
        background-color: #ffffff; 
        overflow: hidden;
        position: relative;
    }
    .mission-text {
        padding: 80px 20px;
        color: #1a2340;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.6;
    }
    .mission-img-container {
        clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        height: 100%;
    }
    .mission-img-container img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        .mission-img-container { clip-path: none; height: 300px; }
    }

    /* --- SECTIONS COMMON --- */
    .section-title {
        color: #1a2340;
        font-weight: 700;
        font-size: 2.5rem;
        margin-bottom: 10px;
        text-align: center;
    }
    .section-subtitle {
        color: #666;
        text-align: center;
        margin-bottom: 50px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    /* --- INDUSTRY ITEMS --- */
    .industry-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 24px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .industry-item img {
        width: 100%;
        height: 250px; 
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    .industry-item:hover img {
        transform: scale(1.1);
    }
    .industry-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to top, #1a2340 0%, transparent 100%);
        padding: 30px 20px 20px 20px;
    }
    .industry-title {
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    /* --- BLOGS SECTION --- */
    .blog-section {
        padding: 80px 0;
        background-color: #fff;
    }
    .blog-title {
        color: #1a0033;
        font-weight: 700;
        font-size: 2.5rem;
        margin-bottom: 20px;
    }
    .btn-discover {
        border: 1px solid #ff9933;
        color: #ff9933;
        background: white;
        padding: 10px 30px;
        border-radius: 50px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        margin-top: 20px;
        transition: all 0.3s;
        cursor: pointer;
    }
    .btn-discover:hover {
        background: #ff9933;
        color: white;
    }
    .blog-link {
        text-decoration: none;
        display: block;
        height: 100%;
    }
    .blog-card {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        height: 400px;
        color: white;
        cursor: pointer;
    }
    .blog-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }
    .blog-card:hover img {
        transform: scale(1.05);
    }
    .blog-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        padding: 20px;
    }
    .blog-overlay h5 {
        font-weight: 700;
        font-size: 1.1rem;
        color: white;
    }

    /* --- TESTIMONIALS --- */
    .testimonial-section {
        padding: 80px 0;
        background-color: #fff;
    }
    .testi-heading {
        color: #007bff;
        font-weight: 700;
        font-size: 3rem;
        line-height: 1.2;
    }
    .testi-icon { font-size: 40px; color: #ccc; margin-bottom: 20px; }
    .testi-text { font-size: 1.1rem; color: #333; margin-bottom: 20px; line-height: 1.6; }
    .testi-author { font-weight: 700; color: #1a2340; }
    .carousel-indicators [data-bs-target] { background-color: #999; }
  `]
})
export class HomeComponent {
  dataService = inject(DataService);
  industries = this.dataService.industries;
  blogs = this.dataService.blogs;
}