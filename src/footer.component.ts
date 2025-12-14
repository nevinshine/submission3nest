import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="pt-5 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-md-2 mb-4">
                    <h6 class="footer-heading">Quick Links</h6>
                    <a href="index.html" class="footer-link">Home</a>
                    <a href="business.html" class="footer-link">Business</a>
                    <a href="services.html" class="footer-link">Services</a>
                    <a href="contact.html" class="footer-link">Contact Us</a>
                </div>
                <div class="col-md-2 mb-4"> 
                    <h6 class="footer-heading">Businesses & Services</h6>
                    <a href="#" class="footer-link">Cloud Services</a>
                    <a href="#" class="footer-link">Cyber Security</a>
                    <a href="#" class="footer-link">Data Engineering</a>
                    <a href="#" class="footer-link">DevOps</a>
                    <a href="#" class="footer-link">GIS</a>
                </div>
                <div class="col-md-5 mb-4">
                    <h3 style="font-size: 24px; margin-bottom: 20px;">Get updates on our Insights</h3>
                    <p style="color: #d1d1d1; margin-bottom: 30px;">Stay connected with NeST Digital to get timely updates...</p>
                    <form class="d-flex align-items-end mb-5">
                        <input type="text" class="footer-input" placeholder="Name">
                        <input type="email" class="footer-input" placeholder="Email">
                        <button type="submit" class="btn-send">SEND</button>
                    </form>
                    <div class="row align-items-center">
                        <div class="col-md-6"><h3 style="font-size: 24px;">Get in touch with us</h3></div>
                        <div class="col-md-6 text-end text-md-start"><a href="contact.html" class="btn-contact-orange">CONTACT US</a></div>
                    </div>
                    <div class="mt-4">
                        <p class="mb-1"><strong>+91-484-4203333</strong></p>
                        <p><strong>connect.nestdigital@nestgroup.net</strong></p>
                    </div>
                </div>
            </div>
            <div class="row mt-4 mb-4">
                <div class="col-12 social-icons">
                    <a href="https://www.facebook.com/nestgroupdigital/"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/nest-digital-pvt-ltd"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/nest_digital_/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCq4sD18X5AFzXf4MjBOFjOQ"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="row footer-bottom">
                <div class="col-md-12 text-center text-md-start">
                    <span>2025 © NeST Digital Pvt Ltd. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </footer>
  `,
  styles: [`
    footer {
    background-color: #1a2340; 
    color: #ffffff;
    font-size: 14px;
    margin-top: auto;
}
.footer-heading { color: #ff9933; font-weight: 600; margin-bottom: 20px; }
.footer-link { color: #ffffff; text-decoration: none; display: block; margin-bottom: 10px; }
.footer-link:hover { color: #ff9933; }
.footer-input { background-color: transparent; border: none; border-bottom: 1px solid #6c757d; color: white; padding: 5px 0; margin-right: 10px; width: 100%; }
.footer-input:focus { outline: none; border-bottom: 1px solid #ff9933; }
.btn-send { color: #ff9933; font-weight: bold; border: none; background: none; }
.btn-contact-orange { background-color: #ff9933; color: white; border-radius: 50px; padding: 8px 25px; font-weight: bold; text-decoration: none; }
.btn-contact-orange:hover { background-color: #e68a2e; color: white; }
.social-icons a { color: white; margin-right: 15px; font-size: 18px; text-decoration: none; }
.footer-bottom { border-top: 1px solid #3e4a6e; padding-top: 20px; font-size: 12px; color: #d1d1d1; } `]
})
export class FooterComponent {}