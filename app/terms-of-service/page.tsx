"use client";

import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Users,
  Server,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle2,
  Mail,
  Lock,
  Globe,
  Rocket,
  Scale,
  Gavel,
  RefreshCw,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function TermsOfServicePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Vynex Hosting",
    "description": "Read Vynex's Terms of Service to understand the rules, policies, and legal agreements governing the use of our VPS hosting services.",
    "url": "https://vynex.pk/terms-of-service",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vynex",
      "url": "https://vynex.pk",
      "legalName": "Vynex Hosting Solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wah Cantt",
        "addressCountry": "Pakistan"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Terms of Service - Vynex Hosting | VPS Hosting Policies</title>
        <meta name="description" content="Read Vynex's Terms of Service to understand the rules, policies, and legal agreements governing the use of our VPS hosting services." />
        <meta name="keywords" content="Terms of Service, Hosting Terms, Vynex Terms, VPS Hosting Policy, Service Agreement, Acceptable Use Policy, Pakistan Hosting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service - Vynex Hosting | VPS Hosting Policies" />
        <meta property="og:description" content="Read Vynex's Terms of Service to understand the rules, policies, and legal agreements governing the use of our VPS hosting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/terms-of-service" />
        <meta property="og:image" content="https://vynex.pk/og-image.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Vynex Hosting | VPS Hosting Policies" />
        <meta name="twitter:description" content="Read Vynex's Terms of Service to understand the rules, policies, and legal agreements governing the use of our VPS hosting services." />
        <meta name="twitter:image" content="https://vynex.pk/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/terms-of-service" />
        
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
          max-width: 900px;
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
        .terms-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf8ff 0%, #f0ebf8 50%, #e8e0f5 100%);
          padding: 120px 32px 70px;
          border-bottom: 1px solid #e8e0f5;
          min-height: 35vh;
        }
        .terms-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .terms-hero-bg .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }
        .terms-hero-bg .orb-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          right: -80px;
        }
        .terms-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #7c3aed;
          bottom: -120px;
          left: -80px;
          opacity: 0.2;
        }
        .terms-hero-bg .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .terms-hero-inner {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .terms-hero-content .eyebrow {
          align-self: center;
        }
        .terms-hero-content h1 {
          font-size: 48px;
          line-height: 1.1;
          margin: 16px 0 14px;
        }
        .terms-hero-content h1 span {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .terms-hero-content p {
          font-size: 18px;
          color: #475569;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .last-updated {
          display: inline-block;
          margin-top: 16px;
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
          background: #fff;
          padding: 6px 16px;
          border-radius: 999px;
          border: 1px solid #f0ebf8;
        }

        /* ---------- Terms Content ---------- */
        .terms-content {
          padding: 64px 32px 80px;
          max-width: 900px;
          margin: 0 auto;
        }
        .terms-section {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #f0ebf8;
        }
        .terms-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .terms-section h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .terms-section h2 svg {
          color: #6d28d9;
          flex-shrink: 0;
        }
        .terms-section p {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin: 0 0 12px;
        }
        .terms-section p:last-child {
          margin-bottom: 0;
        }
        .terms-section ul {
          margin: 8px 0 12px;
          padding-left: 24px;
        }
        .terms-section ul li {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 6px;
        }
        .terms-section ul li:last-child {
          margin-bottom: 0;
        }
        .terms-section ul li::marker {
          color: #6d28d9;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #6d28d9;
          font-weight: 600;
          text-decoration: none;
          margin-top: 40px;
          transition: gap 0.15s ease;
        }
        .back-link:hover {
          gap: 12px;
        }

        @media (max-width: 640px) {
          .terms-hero {
            padding: 100px 20px 50px;
            min-height: 30vh;
          }
          .terms-hero-content h1 {
            font-size: 28px;
          }
          .terms-hero-content p {
            font-size: 15px;
          }
          .terms-content {
            padding: 40px 20px 60px;
          }
          .terms-section h2 {
            font-size: 20px;
          }
          .terms-section p,
          .terms-section ul li {
            font-size: 14px;
          }
          .page-section {
            padding: 48px 20px;
          }
        }
      `}</style>

      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="terms-hero" aria-labelledby="hero-heading">
          <div className="terms-hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="grid-overlay" />
          </div>
          <div className="terms-hero-inner">
            <div className="terms-hero-content">
              <span className="eyebrow" aria-hidden="true">
                <FileText size={13} /> Terms of Service
              </span>
              <h1 id="hero-heading" className="heading">
                Our <span>Terms</span> &amp; Conditions
              </h1>
              <p>
                Please read these terms carefully before using our VPS hosting services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <span className="last-updated">📅 Last Updated: August 2026</span>
            </div>
          </div>
        </section>

        {/* ================= TERMS CONTENT ================= */}
        <div className="terms-content">
          {/* Acceptance of Terms */}
          <div className="terms-section">
            <h2>
              <CheckCircle2 size={22} />
              Acceptance of Terms
            </h2>
            <p>
              By using Vynex's services ("Services"), you agree to be bound by these Terms of Service 
              ("Terms"). If you do not agree to these Terms, please do not use our Services.
            </p>
            <p>
              We reserve the right to update these Terms at any time. Continued use of our Services 
              after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Services Provided */}
          <div className="terms-section">
            <h2>
              <Server size={22} />
              Services Provided
            </h2>
            <p>
              Vynex provides VPS hosting, dedicated servers, RDP hosting, business email hosting, 
              and SSL certificates. Our services are designed to meet the needs of businesses and 
              individuals requiring reliable cloud infrastructure.
            </p>
            <p>Our services include:</p>
            <ul>
              <li>Linux and Windows VPS hosting</li>
              <li>Dedicated servers</li>
              <li>RDP hosting services</li>
              <li>Business email hosting</li>
              <li>SSL certificates</li>
              <li>24/7 technical support</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="terms-section">
            <h2>
              <Users size={22} />
              User Responsibilities
            </h2>
            <p>As a user of our Services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when signing up</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our Services in compliance with all applicable laws</li>
              <li>Not use our Services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt our Services or servers</li>
              <li>Pay all fees associated with your use of our Services</li>
            </ul>
          </div>

          {/* Acceptable Use Policy */}
          <div className="terms-section">
            <h2>
              <ShieldCheck size={22} />
              Acceptable Use Policy
            </h2>
            <p>You agree not to use our Services for:</p>
            <ul>
              <li>Illegal activities or content that violates any laws</li>
              <li>Spamming, phishing, or distributing malware</li>
              <li>Hosting or distributing copyrighted material without permission</li>
              <li>Engaging in any activity that harms minors</li>
              <li>Attempting to gain unauthorized access to any systems</li>
              <li>Any form of network abuse or resource overuse</li>
            </ul>
            <p>
              Violation of this policy may result in immediate termination of your account without 
              refund.
            </p>
          </div>

          {/* Payment and Billing */}
          <div className="terms-section">
            <h2>
              <DollarSign size={22} />
              Payment and Billing
            </h2>
            <p>Our billing policies include:</p>
            <ul>
              <li>All payments are due in advance for the selected billing cycle</li>
              <li>We accept bank transfers, JazzCash, EasyPaisa, and credit/debit cards</li>
              <li>Late payments may result in suspension or termination of services</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Prices are subject to change with 30 days notice</li>
            </ul>
            <p>
              You are responsible for maintaining valid payment information and paying all fees 
              associated with your account.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="terms-section">
            <h2>
              <RefreshCw size={22} />
              Refund Policy
            </h2>
            <p>We offer a 7-day money-back guarantee on our VPS hosting plans:</p>
            <ul>
              <li>You may request a refund within the first 7 days of service</li>
              <li>Refunds are issued to the original payment method</li>
              <li>Setup fees are non-refundable</li>
              <li>Excessive use or abuse may void the refund policy</li>
            </ul>
          </div>

          {/* Service Level Agreement */}
          <div className="terms-section">
            <h2>
              <Clock size={22} />
              Service Level Agreement
            </h2>
            <p>We commit to:</p>
            <ul>
              <li>99.9% uptime guarantee for our VPS hosting services</li>
              <li>24/7 technical support via WhatsApp and tickets</li>
              <li>Instant setup after payment confirmation</li>
              <li>Proactive monitoring and maintenance</li>
            </ul>
            <p>
              In the event of a service interruption, we will make reasonable efforts to restore 
              service as quickly as possible.
            </p>
          </div>

          {/* Data and Privacy */}
          <div className="terms-section">
            <h2>
              <Lock size={22} />
              Data and Privacy
            </h2>
            <p>
              We take your data privacy seriously. Our privacy practices are outlined in our 
              <Link href="/privacy-policy" style={{ color: '#6d28d9', fontWeight: 600, textDecoration: 'none' }}>
                {" "}Privacy Policy
              </Link>.
            </p>
            <ul>
              <li>We do not sell or share your personal information with third parties</li>
              <li>You maintain ownership of your data stored on our servers</li>
              <li>We implement industry-standard security measures</li>
              <li>You are responsible for backing up your data</li>
            </ul>
          </div>

          {/* Termination */}
          <div className="terms-section">
            <h2>
              <AlertCircle size={22} />
              Termination
            </h2>
            <p>We may terminate or suspend your account if:</p>
            <ul>
              <li>You violate these Terms of Service</li>
              <li>You fail to make timely payments</li>
              <li>We suspect fraudulent or illegal activity</li>
              <li>You request account termination</li>
            </ul>
            <p>
              Upon termination, you will lose access to our Services. Any outstanding fees will 
              remain due.
            </p>
          </div>

          {/* Liability */}
          <div className="terms-section">
            <h2>
              <Scale size={22} />
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Vynex shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or downtime</li>
              <li>Security breaches beyond our reasonable control</li>
              <li>Any other damages arising from use of our Services</li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="terms-section">
            <h2>
              <Gavel size={22} />
              Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Pakistan. 
              Any disputes arising from these Terms shall be resolved in the courts of Pakistan.
            </p>
          </div>

          {/* Contact Us */}
          <div className="terms-section">
            <h2>
              <Mail size={22} />
              Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding these Terms of Service, 
              please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> info@vynex.pk</li>
              <li><strong>WhatsApp:</strong> +92 331 5676118</li>
              <li><strong>Address:</strong> Wah Cantt, Pakistan</li>
            </ul>
          </div>

          <Link href="/" className="back-link">
            <ArrowRight size={16} />
            Back to Home
          </Link>
        </div>

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