import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg custom-nav sticky-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" routerLink="/">
          <img src="https://i.tracxn.com/logo/company/nestdigital.com_Logo_424d7302-a021-48d4-b752-8056951cbda4.jpg" alt="Logo" width="40" height="40" class="me-2">
          NeST Digital
        </a>
        <button class="navbar-toggler" type="button" (click)="isMenuOpen = !isMenuOpen">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" [class.show]="isMenuOpen">
          <div class="navbar-nav">
            <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            <a class="nav-link" routerLink="/business" routerLinkActive="active">Business</a>
            <a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a>
            <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
/* --- NAVIGATION STYLES --- */
.navbar.custom-nav {
    background-color: #ffffff !important; 
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}
.navbar-brand {
    color: #000080 !important; /* Navy Blue */
    font-weight: bold;
}

/* --- NAV LINK ANIMATION --- */
.nav-link {
    color: #000080 !important; 
    font-weight: 500;
    margin-right: 15px;
    white-space: nowrap;
    position: relative; /* Required for the animation line */
    text-decoration: none; /* Remove default underline */
}

/* The Animated Line */
.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px; /* Thickness of the line */
    bottom: 0;
    left: 0;
    background-color: #ff9933; /* NeST Orange */
    transition: width 0.3s ease-in-out; /* Smooth animation */
}

/* Hover Effects */
.nav-link:hover {
    color: #0000cd !important; /* Lighter Blue text on hover */
}

.nav-link:hover::after {
    width: 100%; /* Line grows to full width */
}

/* Active Link State (Keep line visible for active page) */
.nav-link.active::after {
    width: 100%;
}
 `]
})
export class NavbarComponent {
  isMenuOpen = false;
}