// Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className="atelier-footer">
      <div className="footer-container">
        {/* Brand Segment */}
        <div className="footer-brand-pane">
          <h3 className="footer-logo">De'luxe Leather Atelier</h3>
          <p className="footer-tagline">Premium Leather Goods Born from Craft. Made in Nigeria.</p>
          
          {/* Social Anchor Handles */}
          <div className="footer-socials">
            <a 
              href="https://www.instagram.com/deluxe_avenue_/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="akar-icons--instagram-fill"></span>
            </a>
            <a 
              href="https://wa.me/message/PW54O23V22CAO1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <span className="akar-icons--whatsapp-fill"></span>
            </a>
            <a 
              href="https://web.facebook.com/people/Deluxe-Leather-Atelier/61590542520775/#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className="akar-icons--facebook-fill"></span>
            </a>
          </div>
        </div>

        {/* Contact/Location Channels */}
        <div className="footer-contact-pane">
          <h4>Atelier Inquiries</h4>
          <ul className="contact-list">
            <li>
              <span className="footer-email">favouragharese61@gmail.com</span>
            </li>
            <li>
              <a href="tel:+2348051185394" className="contact-link">
                <span className="ant-design--phone-twotone"></span> 0805 118 5394
              </a>
            </li>
            <li>
              <div className="contact-address">
                <span className="akar-icons--location"></span>
                <span>Lugbe, Abuja, Nigeria</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Sub-strip */}
      <div className="footer-bottom-strip">
        <p>&copy; {currentYear} De'luxe Leather Atelier. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
