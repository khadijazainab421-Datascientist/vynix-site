"use client";

import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Users,
  Database,
  Mail,
  Clock,
  Globe,
  Rocket,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Vynex Hosting",
    "description": "Read Vynex's privacy policy to understand how we collect, use, and protect your personal information when you use our VPS hosting services.",
    "url": "https://vynex.pk/privacy-policy",
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
        <title>Privacy Policy - Vynex Hosting | Data Protection & Security</title>
        <meta name="description" content="Read Vynex's privacy policy to understand how we collect, use, and protect your personal information when you use our VPS hosting services." />
        <meta name="keywords" content="Privacy Policy, Data Protection, Vynex Privacy, Hosting Privacy, Data Security, GDPR, Pakistan Hosting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Vynex Hosting | Data Protection & Security" />
        <meta property="og:description" content="Read Vynex's privacy policy to understand how we collect, use, and protect your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/privacy-policy" />
        <meta property="og:image" content="https://vynex.pk/og-image.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Vynex Hosting | Data Protection & Security" />
        <meta name="twitter:description" content="Read Vynex's privacy policy to understand how we protect your personal information." />
        <meta name="twitter:image" content="https://vynex.pk/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/privacy-policy" />
        
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
        .policy-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf8ff 0%, #f0ebf8 50%, #e8e0f5 100%);
          padding: 120px 32px 70px;
          border-bottom: 1px solid #e8e0f5;
          min-height: 35vh;
        }
        .policy-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .policy-hero-bg .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }
        .policy-hero-bg .orb-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          right: -80px;
        }
        .policy-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #7c3aed;
          bottom: -120px;
          left: -80px;
          opacity: 0.2;
        }
        .policy-hero-bg .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .policy-hero-inner {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .policy-hero-content .eyebrow {
          align-self: center;
        }
        .policy-hero-content h1 {
          font-size: 48px;
          line-height: 1.1;
          margin: 16px 0 14px;
        }
        .policy-hero-content h1 span {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .policy-hero-content p {
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

        /* ---------- Policy Content ---------- */
        .policy-content {
          padding: 64px 32px 80px;
          max-width: 900px;
          margin: 0 auto;
        }
        .policy-section {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #f0ebf8;
        }
        .policy-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .policy-section h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .policy-section h2 svg {
          color: #6d28d9;
          flex-shrink: 0;
        }
        .policy-section p {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin: 0 0 12px;
        }
        .policy-section p:last-child {
          margin-bottom: 0;
        }
        .policy-section ul {
          margin: 8px 0 12px;
          padding-left: 24px;
        }
        .policy-section ul li {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 6px;
        }
        .policy-section ul li:last-child {
          margin-bottom: 0;
        }
        .policy-section ul li::marker {
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
          .policy-hero {
            padding: 100px 20px 50px;
            min-height: 30vh;
          }
          .policy-hero-content h1 {
            font-size: 28px;
          }
          .policy-hero-content p {
            font-size: 15px;
          }
          .policy-content {
            padding: 40px 20px 60px;
          }
          .policy-section h2 {
            font-size: 20px;
          }
          .policy-section p,
          .policy-section ul li {
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
        <section className="policy-hero" aria-labelledby="hero-heading">
          <div className="policy-hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="grid-overlay" />
          </div>
          <div className="policy-hero-inner">
            <div className="policy-hero-content">
              <span className="eyebrow" aria-hidden="true">
                <ShieldCheck size={13} /> Privacy Policy
              </span>
              <h1 id="hero-heading" className="heading">
                Your <span>Privacy</span> Matters
              </h1>
              <p>
                We are committed to protecting your personal information and being transparent 
                about how we collect, use, and safeguard your data.
              </p>
              <span className="last-updated">📅 Last Updated: August 2026</span>
            </div>
          </div>
        </section>

        {/* ================= POLICY CONTENT ================= */}
        <div className="policy-content">
          {/* Introduction */}
          <div className="policy-section">
            <h2>
              <Lock size={22} />
              Introduction
            </h2>
            <p>
              At Vynex ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit 
              our website and use our VPS hosting services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By using our website and services, you 
              consent to the practices described in this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="policy-section">
            <h2>
              <Database size={22} />
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, billing 
                address, and payment information when you sign up for our services.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and account preferences 
                for accessing our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website 
                and services, including IP addresses, browser types, and access times.
              </li>
              <li>
                <strong>Communication Data:</strong> Records of your communications with us, 
                including emails, support tickets, and chat messages.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="policy-section">
            <h2>
              <Users size={22} />
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, maintain, and improve our VPS hosting services</li>
              <li>Process transactions and send order confirmations</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor and analyze usage patterns to improve our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
              <li>Comply with legal obligations and regulatory requirements</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="policy-section">
            <h2>
              <Eye size={22} />
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may 
              share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share information with trusted third-party 
                service providers who assist us in operating our website and providing our services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law 
                or in response to valid legal requests.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset 
                sale, your information may be transferred to the new entity.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="policy-section">
            <h2>
              <ShieldCheck size={22} />
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Firewall protection and intrusion detection systems</li>
              <li>Regular security assessments and vulnerability scanning</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure data centers with physical security measures</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission over the 
              internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies */}
          <div className="policy-section">
            <h2>
              <FileText size={22} />
              Cookies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our 
              website. Cookies help us:
            </p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Improve our services and user experience</li>
              <li>Provide relevant content and marketing communications</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences. However, disabling 
              cookies may affect your experience on our website.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="policy-section">
            <h2>
              <Globe size={22} />
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review the 
              privacy policies of any third-party websites you visit.
            </p>
          </div>

          {/* Your Rights */}
          <div className="policy-section">
            <h2>
              <CheckCircle2 size={22} />
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <strong>info@vynex.pk</strong>.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="policy-section">
            <h2>
              <Users size={22} />
              Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly 
              collect personal information from children. If we become aware that we have collected 
              personal information from a child, we will take steps to delete it.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="policy-section">
            <h2>
              <Clock size={22} />
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date. We 
              encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact Us */}
          <div className="policy-section">
            <h2>
              <Mail size={22} />
              Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please 
              contact us:
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