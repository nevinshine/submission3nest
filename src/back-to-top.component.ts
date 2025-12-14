import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class.show]="showButton" 
      (click)="scrollToTop()" 
      class="back-to-top" 
      title="Go to top">
      <i class="fas fa-arrow-up"></i>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ff9933; /* NeST Orange */
      color: white;
      border: none;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      z-index: 1000;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .back-to-top:hover {
      background-color: #e68a2e; /* Darker Orange */
      transform: translateY(-5px);
    }

    /* Show state */
    .back-to-top.show {
      opacity: 1;
      visibility: visible;
    }
  `]
})
export class BackToTopComponent {
  showButton = false;

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when scrolled down 300px
    this.showButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}