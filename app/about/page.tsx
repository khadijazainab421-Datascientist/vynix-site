"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  ShieldCheck,
  HeadphonesIcon,
  Zap,
  Globe,
  Server,
  Rocket,
  Clock,
  Users,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Building2,
  User,
  Briefcase,
  Calendar,

  Code2,
  Database,
  BarChart3,
  Brain,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data */
/* ------------------------------------------------------------------ */

const CORE_VALUES = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "We constantly evolve our infrastructure with the latest technology to deliver cutting-edge hosting solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Your data security is our top priority with enterprise-grade protection and regular security audits.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make starts with our customers' needs and satisfaction.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "We deliver blazing-fast performance with NVMe SSD storage and optimized networks.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our team is always available to help you, day or night, with expert technical assistance.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We provide hosting solutions across multiple continents with local expertise.",
  },
];

const STATS = [
  { number: "8+", label: "Global Locations", icon: Globe },
  { number: "24/7", label: "Expert Support", icon: HeadphonesIcon },
  { number: "99.9%", label: "Uptime Guarantee", icon: Clock },
  { number: "1000+", label: "Happy Clients", icon: Users },
];

const SKILLS = [
  { icon: Code2, label: "Python", color: "#3776AB" },
  { icon: Database, label: "SQL", color: "#4479A1" },
  { icon: BarChart3, label: "Power BI", color: "#F2C811" },
  { icon: Brain, label: "Machine Learning", color: "#6d28d9" },
];

const FAQS = [
  {
    q: "Who founded Vynex?",
    a: "Vynex was founded in 2023 by Khadija Zainab, a passionate Data Scientist and tech entrepreneur with a vision to provide premium hosting solutions in Pakistan.",
  },
  {
    q: "What makes Vynex different from other hosting providers?",
    a: "We combine enterprise-grade infrastructure with Pakistan-based 24/7 support, offering localized expertise with global reach. Our commitment to performance and customer satisfaction sets us apart.",
  },
  {
    q: "Where is Vynex located?",
    a: "Our headquarters is in Wah Cantt, Pakistan, with datacenter locations across Pakistan, USA, UK, Canada, Australia, Dubai, Germany, and Singapore.",
  },
  {
    q: "What hosting services do you offer?",
    a: "We offer VPS hosting (Linux and Windows), Dedicated Servers, RDP hosting, Business Email hosting, and SSL certificates across multiple global locations.",
  },
  {
    q: "Is Vynex a registered company?",
    a: "Yes, Vynex is a fully registered and legitimate hosting company operating in Pakistan and internationally.",
  },
  {
    q: "What is your uptime guarantee?",
    a: "We offer a 99.9% uptime guarantee on all our hosting plans, backed by our enterprise-grade infrastructure.",
  },
];

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Vynex - Premium VPS Hosting Provider",
    "description": "Learn about Vynex, Pakistan's leading VPS hosting provider founded by Khadija Zainab in 2023 with global datacenter locations and 24/7 expert support.",
    "url": "https://vynex.pk/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vynex",
      "description": "Enterprise cloud infrastructure and VPS hosting provider",
      "url": "https://vynex.pk",
      "foundingDate": "2023",
      "founder": {
        "@type": "Person",
        "name": "Khadija Zainab",
        "jobTitle": "Founder & Data Scientist",
        "url": "https://github.com/khadijazainab421-Datascientist"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wah Cantt",
        "addressCountry": "Pakistan"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-123-456789",
        "contactType": "Sales"
      }
    }
  };

  return (
    <>
      <Head>
        <title>About Vynex - Premium VPS Hosting Founded by Khadija Zainab</title>
        <meta name="description" content="Learn about Vynex, Pakistan's leading VPS hosting provider founded by Khadija Zainab in 2023. Global datacenter locations, enterprise-grade infrastructure, and 24/7 expert support." />
        <meta name="keywords" content="About Vynex, Khadija Zainab, VPS Hosting, Cloud Infrastructure, Pakistan Hosting, Data Scientist, Global Datacenter" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Khadija Zainab - Vynex" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Vynex - Premium VPS Hosting Founded by Khadija Zainab" />
        <meta property="og:description" content="Learn about Vynex, Pakistan's leading VPS hosting provider founded by Khadija Zainab in 2023. Global datacenter locations and 24/7 expert support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/about" />
        <meta property="og:image" content="https://vynex.pk/ceo.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Vynex - Premium VPS Hosting Founded by Khadija Zainab" />
        <meta name="twitter:description" content="Learn about Vynex, Pakistan's leading VPS hosting provider founded by Khadija Zainab in 2023." />
        <meta name="twitter:image" content="https://vynex.pk/ceo.jpeg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/about" />
        
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
        .about-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf8ff 0%, #f0ebf8 50%, #e8e0f5 100%);
          padding: 120px 32px 70px;
          border-bottom: 1px solid #e8e0f5;
          min-height: 50vh;
        }
        .about-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .about-hero-bg .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }
        .about-hero-bg .orb-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          right: -80px;
        }
        .about-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #7c3aed;
          bottom: -120px;
          left: -80px;
          opacity: 0.2;
        }
        .about-hero-bg .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .about-hero-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .about-hero-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about-hero-content .eyebrow {
          align-self: flex-start;
        }
        .about-hero-content h1 {
          font-size: 44px;
          line-height: 1.1;
          margin: 0;
        }
        .about-hero-content h1 span {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-hero-content p {
          font-size: 16px;
          color: #475569;
          max-width: 520px;
          line-height: 1.7;
        }

        /* Founder Card */
        .founder-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(109, 40, 217, 0.08);
          transition: all 0.15s ease;
        }
        .founder-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 80px rgba(109, 40, 217, 0.12);
        }
        .founder-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 16px;
          border: 4px solid #ede9fe;
          display: block;
        }
        .founder-card h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .founder-card .title {
          font-size: 14px;
          color: #6d28d9;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .founder-card .bio {
          font-size: 14px;
          color: #64748b;
          margin: 8px 0 16px;
          line-height: 1.6;
        }
        .founder-social {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .founder-social a {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #f8f5ff;
          border: 1px solid #f0ebf8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6d28d9;
          transition: all 0.15s ease;
        }
        .founder-social a:hover {
          background: #6d28d9;
          color: #fff;
          border-color: #6d28d9;
          transform: translateY(-2px);
        }
        .founder-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-top: 12px;
        }
        .founder-skill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          background: #f8f5ff;
          color: #6d28d9;
          border: 1px solid #ede7fb;
        }

        .about-hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 900px;
          margin: 40px auto 0;
        }
        .about-stat-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 16px;
          padding: 20px 16px;
          text-align: center;
          transition: all 0.15s ease;
        }
        .about-stat-card:hover {
          border-color: #ded1fb;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.06);
        }
        .about-stat-card .number {
          font-size: 28px;
          font-weight: 800;
          color: #6d28d9;
        }
        .about-stat-card .label {
          font-size: 13px;
          color: #64748b;
          font-weight: 600;
          margin-top: 4px;
        }
        .about-stat-card .stat-icon {
          color: #6d28d9;
          margin-bottom: 6px;
        }

        /* ---------- Mission & Vision ---------- */
        .mission-section {
          background: #ffffff;
          padding: 80px 32px;
          border-bottom: 1px solid #f0ebf8;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .mission-card {
          text-align: center;
          padding: 32px 24px;
          border-radius: 16px;
          background: #faf8ff;
          border: 1px solid #f0ebf8;
          transition: all 0.15s ease;
        }
        .mission-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(109, 40, 217, 0.08);
          border-color: #ded1fb;
        }
        .mission-card .icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6d28d9;
          margin: 0 auto 14px;
        }
        .mission-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px;
        }
        .mission-card p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.7;
        }

        /* ---------- Core Values ---------- */
        .values-section {
          background: #faf8ff;
          padding: 80px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .values-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }
        .values-head h2 {
          font-size: 32px;
          margin: 14px 0 10px;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .value-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          transition: all 0.15s ease;
        }
        .value-card:hover {
          border-color: #ded1fb;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.06);
        }
        .value-card .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }
        .value-card h4 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .value-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* ---------- CTA ---------- */
        .cta-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
        }
        .cta-card {
          background: linear-gradient(120deg, #6d28d9 0%, #5321a8 100%);
          border-radius: 24px;
          padding: 56px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          overflow: hidden;
          position: relative;
        }
        .cta-card::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          top: -180px;
          right: -120px;
        }
        .cta-card h2 {
          color: #fff;
          font-size: 26px;
          margin: 0 0 6px;
          max-width: 480px;
          position: relative;
        }
        .cta-card p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 14px;
          margin: 0;
          max-width: 460px;
          position: relative;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #6d28d9;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 10px;
          text-decoration: none;
          position: relative;
          white-space: nowrap;
          transition: transform 0.15s ease;
        }
        .cta-btn:hover {
          transform: translateY(-1px);
        }

        /* ---------- FAQ ---------- */
        .faq-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 32px;
        }
        .faq-head {
          text-align: center;
          margin-bottom: 40px;
        }
        .faq-head h2 {
          font-size: 30px;
          margin: 14px 0 10px;
        }
        .faq-item {
          border-bottom: 1px solid #f0ebf8;
          padding: 16px 0;
        }
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-weight: 700;
          color: #0f172a;
          font-size: 15px;
          padding: 4px 0;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: "Inter", sans-serif;
        }
        .faq-question:hover {
          color: #6d28d9;
        }
        .faq-answer {
          margin-top: 8px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .about-hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-hero-content h1 {
            font-size: 36px;
          }
          .about-hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .mission-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .about-hero {
            padding: 100px 20px 50px;
            min-height: 40vh;
          }
          .page-section {
            padding: 48px 20px;
          }
          .mission-section {
            padding: 48px 20px;
          }
          .values-section {
            padding: 48px 20px;
          }
          .faq-section {
            padding: 48px 20px;
          }
          .cta-section {
            padding: 48px 20px;
          }

          .about-hero-content h1 {
            font-size: 28px;
          }
          .about-hero-content p {
            font-size: 15px;
          }
          .about-hero-stats {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .mission-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .cta-card {
            padding: 32px 20px;
          }
          .cta-card h2 {
            font-size: 20px;
          }
          .founder-card {
            padding: 24px;
          }
          .founder-image {
            width: 80px;
            height: 80px;
          }
          .founder-card h3 {
            font-size: 18px;
          }
        }
      `}</style>

      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="about-hero" aria-labelledby="hero-heading">
          <div className="about-hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="grid-overlay" />
          </div>
          <div className="about-hero-inner">
            <div className="about-hero-content">
              <span className="eyebrow" aria-hidden="true">
                <Building2 size={13} /> About Us
              </span>
              <h1 id="hero-heading" className="heading">
                Founded by <span>Khadija Zainab</span> in 2023
              </h1>
              <p>
                Vynex is Pakistan's leading VPS hosting provider, delivering enterprise-grade 
                cloud infrastructure with a commitment to performance, security, and exceptional 
                customer support.
              </p>
              <p style={{ fontSize: '14px', color: '#6d28d9', fontWeight: 600 }}>
                Data Scientist | Machine Learning | Data Analytics | Cybersecurity | Python • SQL • Power BI
              </p>

              <div className="about-hero-stats">
                {STATS.map((stat) => (
                  <div key={stat.label} className="about-stat-card">
                    <div className="stat-icon">
                      <stat.icon size={24} />
                    </div>
                    <div className="number">{stat.number}</div>
                    <div className="label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="founder-card">
                <Image
                  src="/ceo.jpeg"
                  alt="Khadija Zainab - Founder of Vynex"
                  width={120}
                  height={120}
                  className="founder-image"
                  priority
                />
                <h3>Khadija Zainab</h3>
                <div className="title">Founder & Data Scientist</div>
                <p className="bio">
                  Passionate about transforming raw data into meaningful insights through 
                  Machine Learning, Data Analytics, and Interactive Dashboards. Building 
                  Vynex to deliver premium hosting solutions with a data-driven approach.
                </p>
                <div className="founder-skills">
                  {SKILLS.map((skill) => (
                    <span key={skill.label} className="founder-skill">
                      <skill.icon size={14} /> {skill.label}
                    </span>
                  ))}
                </div>
                <div className="founder-social">
                
                  <a href="mailto:khadijazainab421@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="mission-section" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="sr-only">Mission & Vision</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="icon-wrap" aria-hidden="true">
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become Pakistan's most trusted and innovative cloud hosting provider, 
                empowering businesses with reliable, secure, and high-performance hosting solutions 
                backed by data-driven insights.
              </p>
            </div>
            <div className="mission-card">
              <div className="icon-wrap" aria-hidden="true">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional hosting services with enterprise-grade infrastructure, 
                24/7 local support, and a commitment to innovation and customer satisfaction 
                using modern technology and analytics.
              </p>
            </div>
            <div className="mission-card">
              <div className="icon-wrap" aria-hidden="true">
                <Heart size={28} />
              </div>
              <h3>Our Promise</h3>
              <p>
                We promise reliability, security, and performance with transparent pricing, 
                expert support, and a genuine commitment to our customers' success through 
                continuous improvement and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="values-section" aria-labelledby="values-heading">
          <div className="values-head">
            <span className="eyebrow" aria-hidden="true">Our Values</span>
            <h2 id="values-heading" className="heading">What Drives Us</h2>
            <p className="sub">
              Our core values shape everything we do — from the technology we build to 
              the support we provide.
            </p>
          </div>
          <div className="values-grid">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="value-card">
                <div className="icon-wrap" aria-hidden="true">
                  <value.icon size={24} />
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="faq-head">
            <span className="eyebrow" aria-hidden="true">Questions & Answers</span>
            <h2 id="faq-heading" className="heading">Frequently Asked Questions</h2>
          </div>
          {FAQS.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary className="faq-question">
                {faq.q}
                <ArrowRight size={18} style={{ color: '#6d28d9', transform: 'rotate(90deg)' }} />
              </summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="cta-card">
            <div>
              <h2 id="cta-heading">Ready to Experience the Vynex Difference?</h2>
              <p>
                Join thousands of satisfied customers who trust Vynex for their hosting needs. 
                Get started today with our premium VPS hosting solutions.
              </p>
            </div>
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              aria-label="Get started with Vynex"
            >
              Get Started <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}