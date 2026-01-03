import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* BRAND */}
        <div className="footer-section">
          <h3 className="footer-logo">HomeCare</h3>
          <p className="footer-text">
            Trusted home services for cleaning, care and repair.
          </p>
        </div>

        {/* PAGES */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Book Service</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><Mail size={16} /> support@homecare.com</p>
          <p><MapPin size={16} /> Your City, India</p>
        </div>

      </div>

      {/* SOCIAL */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">

          <p>© 2026 HomeCare. All rights reserved.</p>

          <div className="social-icons">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>

        </div>
      </div>
    </footer>
  );
}
