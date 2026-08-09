"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Clock,
  Globe,
  Building2,
  User,
  Rocket,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vynex - Get in Touch",
    "description": "Contact Vynex for VPS hosting, dedicated servers, and cloud infrastructure solutions. 24/7 support available.",
    "url": "https://vynex.pk/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vynex",
      "url": "https://vynex.pk",
      "email": "info@vynex.pk",
      "telephone": "+92 331 5676118",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "House No CB-277 Street no 08 shadman town Wah Cantt",
        "addressCountry": "Pakistan"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92 331 5676118",
        "contactType": "Sales",
        "availableLanguage": ["English", "Urdu"],
        "areaServed": "PK"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Vynex - Get in Touch for VPS Hosting & Support</title>
        <meta name="description" content="Contact Vynex for VPS hosting, dedicated servers, and cloud infrastructure solutions. Reach us via WhatsApp, email, or visit our office in Wah Cantt." />
        <meta name="keywords" content="Contact Vynex, VPS Hosting Support, WhatsApp Support, Email Support, Wah Cantt, Pakistan Hosting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Vynex - Get in Touch for VPS Hosting & Support" />
        <meta property="og:description" content="Contact Vynex for VPS hosting, dedicated servers, and cloud infrastructure solutions. 24/7 support available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/contact" />
        <meta property="og:image" content="https://vynex.pk/og-image.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Vynex - Get in Touch for VPS Hosting & Support" />
        <meta name="twitter:description" content="Contact Vynex for VPS hosting, dedicated servers, and cloud infrastructure solutions." />
        <meta name="twitter:image" content="https://vynex.pk/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/contact" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <style jsx global>{`
        /* ---------- Global ---------- */
        .page-section {
          padding: 80px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #6d28d9;
          background: #f8f5ff;
          border: 1px solid #eee5ff;
          padding: 5px 14px;
          border-radius: 999px;
        }
        .heading {
          font-family: "Inter", sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f172a;
        }
        .sub {
          font-family: "Inter", sans-serif;
          color: #64748b;
          line-height: 1.7;
        }

        /* ---------- HERO ---------- */
        .contact-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf8ff 0%, #f0ebf8 50%, #e8e0f5 100%);
          padding: 120px 32px 70px;
          border-bottom: 1px solid #e8e0f5;
          min-height: 40vh;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .contact-hero-bg .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }
        .contact-hero-bg .orb-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          right: -80px;
        }
        .contact-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #7c3aed;
          bottom: -120px;
          left: -80px;
          opacity: 0.2;
        }
        .contact-hero-bg .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .contact-hero-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }
        .contact-hero-content {
          max-width: 700px;
          margin: 0 auto;
        }
        .contact-hero-content .eyebrow {
          align-self: center;
        }
        .contact-hero-content h1 {
          font-size: 48px;
          line-height: 1.1;
          margin: 16px 0 14px;
        }
        .contact-hero-content h1 span {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contact-hero-content p {
          font-size: 18px;
          color: #475569;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ---------- Contact Info Grid ---------- */
        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 40px auto 0;
          max-width: 900px;
        }
        .contact-info-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.15s ease;
          text-decoration: none;
          color: inherit;
        }
        .contact-info-card:hover {
          border-color: #ded1fb;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.06);
        }
        .contact-info-card .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }
        .contact-info-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .contact-info-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }
        .contact-info-card .highlight {
          color: #6d28d9;
          font-weight: 600;
        }

        /* ---------- Contact Section ---------- */
        .contact-section {
          padding: 80px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Form */
        .contact-form-wrapper h2 {
          font-size: 28px;
          margin: 0 0 8px;
        }
        .contact-form-wrapper .sub {
          margin-bottom: 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }
        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-family: "Inter", sans-serif;
          transition: border-color 0.15s ease;
          background: #faf8ff;
          color: #0f172a;
          width: 100%;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6d28d9;
          box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94a3b8;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
          margin-top: 8px;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.3);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .success-message {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 10px;
          color: #065f46;
          font-weight: 600;
          font-size: 14px;
          margin-top: 12px;
        }
        .success-message svg {
          color: #10b981;
          flex-shrink: 0;
        }

        /* Info Side */
        .contact-info-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .contact-info-side h2 {
          font-size: 28px;
          margin: 0 0 8px;
        }
        .contact-info-side .sub {
          margin-bottom: 8px;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid #f0ebf8;
          transition: all 0.15s ease;
        }
        .info-item:hover {
          border-color: #ded1fb;
          background: #faf8ff;
        }
        .info-item .icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-item .content h4 {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 2px;
        }
        .info-item .content p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }
        .info-item .content a {
          color: #6d28d9;
          text-decoration: none;
          font-weight: 600;
        }
        .info-item .content a:hover {
          text-decoration: underline;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.15s ease;
          margin-top: 8px;
        }
        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
        }

        /* ---------- Office Hours ---------- */
        .hours-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .hours-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 40px auto 0;
        }
        .hours-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.15s ease;
        }
        .hours-card:hover {
          border-color: #ded1fb;
          transform: translateY(-2px);
        }
        .hours-card .icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }
        .hours-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .hours-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .contact-hero-content h1 {
            font-size: 36px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-info-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .hours-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .contact-hero {
            padding: 100px 20px 50px;
          }
          .page-section {
            padding: 48px 20px;
          }
          .contact-section {
            padding: 48px 20px;
          }
          .hours-section {
            padding: 48px 20px;
          }

          .contact-hero-content h1 {
            font-size: 28px;
          }
          .contact-hero-content p {
            font-size: 15px;
          }
          .contact-info-grid {
            grid-template-columns: 1fr;
          }
          .contact-grid {
            gap: 32px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .hours-grid {
            grid-template-columns: 1fr;
          }
          .contact-info-side h2 {
            font-size: 24px;
          }
          .contact-form-wrapper h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="contact-hero" aria-labelledby="hero-heading">
          <div className="contact-hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="grid-overlay" />
          </div>
          <div className="contact-hero-inner">
            <div className="contact-hero-content">
              <span className="eyebrow" aria-hidden="true">
                <Mail size={13} /> Get in Touch
              </span>
              <h1 id="hero-heading" className="heading">
                Let's <span>Connect</span>
              </h1>
              <p>
                Have questions about our VPS hosting solutions? Need support? 
                We're here to help. Reach out to us anytime.
              </p>

              <div className="contact-info-grid">
                <a
                  href="mailto:info@vynex.pk"
                  className="contact-info-card"
                  aria-label="Email us"
                >
                  <div className="icon-wrap" aria-hidden="true">
                    <Mail size={22} />
                  </div>
                  <h4>Email Us</h4>
                  <p>info@vynex.pk</p>
                </a>
                <a
                  href="https://wa.me/923315676118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card"
                  aria-label="WhatsApp us"
                >
                  <div className="icon-wrap" aria-hidden="true">
                    <MessageCircle size={22} />
                  </div>
                  <h4>WhatsApp</h4>
                  <p className="highlight">+92 331 5676118</p>
                </a>
                <div className="contact-info-card">
                  <div className="icon-wrap" aria-hidden="true">
                    <MapPin size={22} />
                  </div>
                  <h4>Visit Us</h4>
                  <p>House No CB-277 Street no 08 shadman town Wah Cantt, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT FORM & INFO ================= */}
        <section className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <span className="eyebrow" aria-hidden="true">
                <Send size={13} /> Send a Message
              </span>
              <h2 id="contact-heading" className="heading">
                Get in Touch
              </h2>
              <p className="sub">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
                {isSubmitted && (
                  <div className="success-message">
                    <CheckCircle2 size={20} />
                    <span>Your message has been sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Info Side */}
            <div className="contact-info-side">
              <span className="eyebrow" aria-hidden="true">
                <Building2 size={13} /> Contact Information
              </span>
              <h2 className="heading">Reach Out Anytime</h2>
              <p className="sub">
                We're here to answer your questions and help you find the perfect 
                hosting solution for your needs.
              </p>

              <div className="info-item">
                <div className="icon" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <a href="mailto:info@vynex.pk">info@vynex.pk</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon" aria-hidden="true">
                  <MessageCircle size={20} />
                </div>
                <div className="content">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/923315676118" target="_blank" rel="noopener noreferrer">
                    +92 331 5676118
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div className="content">
                  <h4>Address</h4>
                  <p>House No CB-277 Street no 08 shadman town Wah Cantt, Pakistan</p>
                </div>
              </div>

              <a
                href="https://wa.me/923315676118"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= OFFICE HOURS ================= */}
        <section className="hours-section" aria-labelledby="hours-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">
              <Clock size={13} /> Support Hours
            </span>
            <h2 id="hours-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              We're Here When You Need Us
            </h2>
            <p className="sub">
              Our team is available around the clock to assist you with any questions or issues.
            </p>
          </div>
          <div className="hours-grid">
            <div className="hours-card">
              <div className="icon" aria-hidden="true">
                <Clock size={22} />
              </div>
              <h4>24/7 Technical Support</h4>
              <p>Always available via WhatsApp and ticket system</p>
            </div>
            <div className="hours-card">
              <div className="icon" aria-hidden="true">
                <User size={22} />
              </div>
              <h4>Sales & Inquiries</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM (PKT)</p>
            </div>
            <div className="hours-card">
              <div className="icon" aria-hidden="true">
                <Globe size={22} />
              </div>
              <h4>Global Support</h4>
              <p>Serving customers across 8+ countries worldwide</p>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="page-section" aria-labelledby="cta-heading">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">
              <Rocket size={13} /> Get Started
            </span>
            <h2 id="cta-heading" className="heading" style={{ fontSize: '28px', margin: '14px 0 10px' }}>
              Ready to Get Started?
            </h2>
            <p className="sub" style={{ marginBottom: '24px' }}>
              Browse our VPS hosting plans and find the perfect solution for your needs.
            </p>
            <Link
              href="/#pricing"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                padding: '13px 26px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 12px 35px rgba(109, 40, 217, 0.3)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
            >
              View Plans <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}