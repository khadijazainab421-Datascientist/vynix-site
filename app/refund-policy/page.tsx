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
  RefreshCw,
  XCircle,
  Info,
  Calendar,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function RefundPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy - Vynex Hosting",
    "description": "Read Vynex's Refund Policy to understand our 30-day money-back guarantee for web hosting and refund conditions for VPS, RDP, Dedicated Servers, and domains.",
    "url": "https://vynex.pk/refund-policy",
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
        <title>Refund Policy - Vynex Hosting | 30-Day Money Back Guarantee</title>
        <meta name="description" content="Read Vynex's Refund Policy. We offer a 30-day money-back guarantee on web hosting (cPanel). VPS, RDP, Dedicated Servers, and Domains are non-refundable after delivery." />
        <meta name="keywords" content="Refund Policy, Money Back Guarantee, Vynex Refund, Hosting Refund, VPS Refund, Web Hosting Refund, Pakistan Hosting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Refund Policy - Vynex Hosting | 30-Day Money Back Guarantee" />
        <meta property="og:description" content="Read Vynex's Refund Policy. 30-day money-back guarantee on web hosting. VPS, RDP, Dedicated Servers, and Domains are non-refundable after delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/refund-policy" />
        <meta property="og:image" content="https://vynex.pk/og-image.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund Policy - Vynex Hosting | 30-Day Money Back Guarantee" />
        <meta name="twitter:description" content="Read Vynex's Refund Policy. 30-day money-back guarantee on web hosting. VPS, RDP, Dedicated Servers, and Domains are non-refundable after delivery." />
        <meta name="twitter:image" content="https://vynex.pk/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/refund-policy" />
        
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
        .refund-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf8ff 0%, #f0ebf8 50%, #e8e0f5 100%);
          padding: 120px 32px 70px;
          border-bottom: 1px solid #e8e0f5;
          min-height: 35vh;
        }
        .refund-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .refund-hero-bg .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }
        .refund-hero-bg .orb-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          right: -80px;
        }
        .refund-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #7c3aed;
          bottom: -120px;
          left: -80px;
          opacity: 0.2;
        }
        .refund-hero-bg .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .refund-hero-inner {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .refund-hero-content .eyebrow {
          align-self: center;
        }
        .refund-hero-content h1 {
          font-size: 48px;
          line-height: 1.1;
          margin: 16px 0 14px;
        }
        .refund-hero-content h1 span {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .refund-hero-content p {
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

        /* ---------- Refund Policy Content ---------- */
        .refund-content {
          padding: 64px 32px 80px;
          max-width: 900px;
          margin: 0 auto;
        }
        .refund-section {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #f0ebf8;
        }
        .refund-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .refund-section h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .refund-section h2 svg {
          color: #6d28d9;
          flex-shrink: 0;
        }
        .refund-section p {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin: 0 0 12px;
        }
        .refund-section p:last-child {
          margin-bottom: 0;
        }
        .refund-section ul {
          margin: 8px 0 12px;
          padding-left: 24px;
        }
        .refund-section ul li {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 6px;
        }
        .refund-section ul li:last-child {
          margin-bottom: 0;
        }
        .refund-section ul li::marker {
          color: #6d28d9;
        }

        /* Summary Cards */
        .refund-summary {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 30px 0 10px;
        }
        .refund-summary-card {
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid #f0ebf8;
          background: #faf8ff;
          transition: all 0.15s ease;
        }
        .refund-summary-card:hover {
          border-color: #ded1fb;
          transform: translateY(-2px);
        }
        .refund-summary-card .icon-wrap {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .refund-summary-card .icon-wrap.green {
          color: #059669;
        }
        .refund-summary-card .icon-wrap.red {
          color: #dc2626;
        }
        .refund-summary-card p {
          font-size: 14px;
          color: #475569;
          margin: 0;
          line-height: 1.6;
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
          .refund-hero {
            padding: 100px 20px 50px;
            min-height: 30vh;
          }
          .refund-hero-content h1 {
            font-size: 28px;
          }
          .refund-hero-content p {
            font-size: 15px;
          }
          .refund-content {
            padding: 40px 20px 60px;
          }
          .refund-section h2 {
            font-size: 20px;
          }
          .refund-section p,
          .refund-section ul li {
            font-size: 14px;
          }
          .page-section {
            padding: 48px 20px;
          }
          .refund-summary {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="refund-hero" aria-labelledby="hero-heading">
          <div className="refund-hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="grid-overlay" />
          </div>
          <div className="refund-hero-inner">
            <div className="refund-hero-content">
              <span className="eyebrow" aria-hidden="true">
                <RefreshCw size={13} /> Refund Policy
              </span>
              <h1 id="hero-heading" className="heading">
                Our <span>Refund</span> Policy
              </h1>
              <p>
                We stand behind our services. Learn about our refund policy, including 
                our 30-day money-back guarantee for web hosting and non-refundable products.
              </p>
              <span className="last-updated">📅 Last Updated: August 2026</span>
            </div>
          </div>
        </section>

        {/* ================= REFUND POLICY CONTENT ================= */}
        <div className="refund-content">
          {/* Refund Summary */}
          <div className="refund-section">
            <h2>
              <Info size={22} />
              Quick Summary
            </h2>
            <p>
              Here's a quick overview of our refund policy:
            </p>
            <div className="refund-summary">
              <div className="refund-summary-card">
                <div className="icon-wrap green">
                  <CheckCircle2 size={18} />
                  Refundable (30 Days)
                </div>
                <p>
                  <strong>Web Hosting (cPanel):</strong> 30-day money-back guarantee 
                  on all web hosting plans.
                </p>
              </div>
              <div className="refund-summary-card">
                <div className="icon-wrap red">
                  <XCircle size={18} />
                  Non-Refundable
                </div>
                <p>
                  <strong>VPS, RDP, Dedicated Servers, Domains:</strong> Not refundable 
                  after delivery. Refunds only if we fail to deliver.
                </p>
              </div>
            </div>
          </div>

          {/* 30-Day Money Back Guarantee */}
          <div className="refund-section">
            <h2>
              <Calendar size={22} />
              30-Day Money-Back Guarantee
            </h2>
            <p>
              We offer a 30-day money-back guarantee on our <strong>web hosting (cPanel)</strong> plans. 
              If you are not completely satisfied with our web hosting service within the first 30 days 
              of your purchase, you may request a full refund.
            </p>
            <p>This guarantee applies to:</p>
            <ul>
              <li>All cPanel web hosting plans</li>
              <li>Shared hosting packages</li>
              <li>Reseller hosting plans</li>
            </ul>
            <p>
              To request a refund, please contact our support team within 30 days of your purchase date.
            </p>
          </div>

          {/* Non-Refundable Services */}
          <div className="refund-section">
            <h2>
              <XCircle size={22} />
              Non-Refundable Services
            </h2>
            <p>
              The following services are <strong>not refundable</strong> after delivery:
            </p>
            <ul>
              <li>
                <strong>VPS Hosting:</strong> Once your VPS is provisioned and delivered, it is 
                non-refundable. Refunds are only issued if we fail to deliver the service.
              </li>
              <li>
                <strong>RDP Hosting:</strong> RDP services are non-refundable after delivery. 
                Refunds only apply if we are unable to provide the service.
              </li>
              <li>
                <strong>Dedicated Servers:</strong> Dedicated servers are non-refundable after 
                provisioning. Refunds only if we fail to deliver.
              </li>
              <li>
                <strong>Domains:</strong> Domain registrations and transfers are final and 
                non-refundable once processed.
              </li>
            </ul>
            <p>
              These services require provisioning of dedicated resources, hardware, or domain 
              registrations that cannot be reversed after delivery.
            </p>
          </div>

          {/* When Refunds Are Issued */}
          <div className="refund-section">
            <h2>
              <CheckCircle2 size={22} />
              When Refunds Are Issued
            </h2>
            <p>Refunds are issued in the following cases:</p>
            <ul>
              <li>
                <strong>Web Hosting:</strong> Within 30 days of purchase, you are eligible for 
                a full refund on cPanel web hosting plans.
              </li>
              <li>
                <strong>Service Failure:</strong> If we fail to deliver any service (VPS, RDP, 
                Dedicated Servers) due to technical issues or other reasons.
              </li>
              <li>
                <strong>Billing Errors:</strong> If you were charged incorrectly or if there was 
                a billing error.
              </li>
              <li>
                <strong>Fraud Prevention:</strong> In cases of fraudulent transactions, refunds 
                will be processed after verification.
              </li>
            </ul>
          </div>

          {/* How to Request a Refund */}
          <div className="refund-section">
            <h2>
              <Mail size={22} />
              How to Request a Refund
            </h2>
            <p>To request a refund, please follow these steps:</p>
            <ul>
              <li>Contact our support team via email at <strong>info@vynex.pk</strong></li>
              <li>Include your account details and order number</li>
              <li>Explain the reason for your refund request</li>
              <li>Our team will review your request and process the refund</li>
            </ul>
            <p>
              Refunds are typically processed within 5-7 business days and credited back to your 
              original payment method.
            </p>
          </div>

          {/* Refund Processing Time */}
          <div className="refund-section">
            <h2>
              <Clock size={22} />
              Refund Processing Time
            </h2>
            <p>Refund processing times vary by payment method:</p>
            <ul>
              <li>
                <strong>Bank Transfers:</strong> 3-5 business days
              </li>
              <li>
                <strong>JazzCash / EasyPaisa:</strong> 24-48 hours
              </li>
              <li>
                <strong>Credit/Debit Cards:</strong> 3-7 business days (depending on bank)
              </li>
            </ul>
            <p>
              Please note that processing times may vary depending on your bank or payment provider.
            </p>
          </div>

          {/* Conditions and Exceptions */}
          <div className="refund-section">
            <h2>
              <AlertCircle size={22} />
              Conditions and Exceptions
            </h2>
            <p>Refunds are subject to the following conditions:</p>
            <ul>
              <li>
                Refunds are not available for services that have been used for more than 30 days 
                (for web hosting) or that have been actively used with significant resource consumption.
              </li>
              <li>
                VPS, RDP, and Dedicated Server refunds are only issued if we fail to deliver the 
                service at our end.
              </li>
              <li>
                Domain registrations are final and cannot be refunded once processed.
              </li>
              <li>
                Setup fees, domain registration fees, and third-party service fees are non-refundable.
              </li>
              <li>
                Violations of our Terms of Service or Acceptable Use Policy may void your eligibility 
                for a refund.
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="refund-section">
            <h2>
              <Mail size={22} />
              Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding our Refund Policy, 
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