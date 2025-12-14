import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page-header">
      <div class="container"><h1 class="fw-bold">Contact Us</h1></div>
    </div>
    <div class="container mb-5">
      <div class="row">
        <div class="col-lg-7">
          <div class="card p-4 border-0 shadow-sm">
            <h3>Send Message</h3>
            <form>
              <input type="text" class="form-control mb-3" placeholder="Name">
              <input type="email" class="form-control mb-3" placeholder="Email">
              <textarea class="form-control mb-3" rows="5" placeholder="Message"></textarea>
              <button class="btn w-100" style="background:#ff9933; color:white;">SEND</button>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="p-4">
            <h4>Locations</h4>
            <p><strong>India:</strong> Cochin Special Economic Zone</p>
            <p><strong>USA:</strong> Sterling, VA</p>
            <p><strong>UK:</strong> London</p>
          </div>
        </div>
      </div>
    </div>
    <div class="location-container" style="text-align: center; margin-bottom: 20px;">
    <h3>Our Location</h3>
    <p>NeST Digital, NeST Tech Park, Near Infopark, Kakkanad, Kochi, Kerala 682042</p>
</div>

<div class="map-container" style="width: 100%; height: 400px; border: 1px solid #333;">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9922084617274!2d76.36254207479385!3d10.017500990088788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b7fca7c6495%3A0x5c6cc61021571755!2sNeST%20Digital%2C%20NeST%20Tech%20Park!5e0!3m2!1sen!2sin!4v1765734721408!5m2!1sen!2sin"
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>
  `,
  styles: [`
    .page-header { background: #1a2340; color: white; padding: 60px 0; text-align: center; margin-bottom: 40px; }
    .map-container {
    border-radius: 12px; /* Rounds the corners */
    overflow: hidden;    /* Keeps the map inside the rounded corners */
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2); /* faint gold glow */
    margin-top: 20px;
}
  `]
})
export class ContactComponent {}