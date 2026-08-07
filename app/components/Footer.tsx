"use client";

import Link from "next/link";
import Image from "next/image";
import {
 
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx global>{`
        .footer-main {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #2e1065 100%);
          color: #c4b5fd;
          border-top: 1px solid rgba(167, 139, 250, 0.1);
          font-family: "Inter", sans-serif;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 32px 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-brand p {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.7;
          margin: 12px 0 16px;
          max-width: 320px;
        }
        .footer-social {
          display: flex;
          gap: 10px;
        }
        .footer-social a {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(167, 139, 250, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c4b5fd;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .footer-social a:hover {
          background: #6d28d9;
          border-color: #6d28d9;
          color: #ffffff;
          transform: translateY(-2px);
        }
        .footer-heading {
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links li a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links li a:hover {
          color: #c4b5fd;
          transform: translateX(4px);
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #94a3b8;
          font-size: 14px;
          text-decoration: none;
          padding: 8px 0;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(167, 139, 250, 0.06);
        }
        .footer-contact-item:last-child {
          border-bottom: none;
        }
        .footer-contact-item:hover {
          color: #c4b5fd;
        }
        .footer-contact-item .icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(109, 40, 217, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #8b5cf6;
        }
        .footer-contact-item .contact-text {
          display: flex;
          flex-direction: column;
        }
        .footer-contact-item .contact-label {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .footer-contact-item .contact-value {
          font-weight: 500;
          color: #e2e8f0;
        }
        .footer-bottom {
          border-top: 1px solid rgba(167, 139, 250, 0.08);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-bottom p {
          color: #64748b;
          font-size: 13px;
          margin: 0;
        }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .footer-bottom-links a {
          color: #64748b;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-bottom-links a:hover {
          color: #c4b5fd;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .footer-logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 20px;
          font-weight: 900;
          position: relative;
          overflow: hidden;
        }
        .footer-logo-icon::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px 10px 50% 50%;
        }
        .footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .footer-logo-name {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.3px;
          color: #ffffff;
        }
        .footer-logo-sub {
          font-size: 7px;
          font-weight: 600;
          color: #8b5cf6;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-top: -1px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 640px) {
          .footer-inner {
            padding: 48px 20px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }
          .footer-brand p {
            max-width: 100%;
          }
        }
      `}</style>

      <footer className="footer-main">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <span style={{ position: "relative", zIndex: 1 }}>V</span>
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">Vynex</span>
                  <span className="footer-logo-sub">Hosting Solutions</span>
                </div>
              </Link>
              <p>
                Enterprise-grade VPS hosting with NVMe SSD storage, global 
                locations, and 24/7 Pakistan-based support.
              </p>
              <div className="footer-social">
               
                
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/vps/pakistan">VPS Hosting</Link></li>
                <li><Link href="/dedicated-servers">Dedicated Servers</Link></li>
                <li><Link href="/vps/windows">Windows VPS</Link></li>
                <li><Link href="/vps/linux">Linux VPS</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="footer-heading">Locations</h3>
              <ul className="footer-links">
                <li><Link href="/vps/pakistan">Pakistan VPS</Link></li>
                <li><Link href="/vps/usa">USA VPS</Link></li>
                <li><Link href="/vps/uk">UK VPS</Link></li>
                <li><Link href="/vps/australia">Australia VPS</Link></li>
                <li><Link href="/vps/canada">Canada VPS</Link></li>
                <li><Link href="/vps/dubai">Dubai VPS</Link></li>
                <li><Link href="/vps/germany">Germany VPS</Link></li>
                <li><Link href="/vps/singapore">Singapore VPS</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="footer-heading">Get in Touch</h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="https://vynex.pk" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                  <div className="icon-wrap"><Globe size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">Website</span>
                    <span className="contact-value">vynex.pk</span>
                  </div>
                </a>
                <a href="mailto:info@vynex.pk" className="footer-contact-item">
                  <div className="icon-wrap"><Mail size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">info@vynex.pk</span>
                  </div>
                </a>
                <a href="tel:03315676118" className="footer-contact-item">
                  <div className="icon-wrap"><Phone size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">0331-5676118</span>
                  </div>
                </a>
                <a href="https://wa.me/923315676118" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                  <div className="icon-wrap"><MessageCircle size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">0331-5676118</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p>
              &copy; {currentYear} <Link href="/" style={{ color: "#c4b5fd", textDecoration: "none" }}>Vynex</Link>. 
              All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}