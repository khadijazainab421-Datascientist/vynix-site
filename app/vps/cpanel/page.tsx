"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Terminal,
  MonitorSmartphone,
  ServerCog,
  Mail,
  Workflow,
  Boxes,
  Container,
  Database,
  Gamepad2,
  ShieldCheck,
  Radio,
  LayoutPanelTop,
  Cpu,
  GraduationCap,
  Video,
  Building2,
  Users,
  TrendingUp,
  Bot,
  Share2,
  ShoppingCart,
  HeadphonesIcon,
  Zap,
  Globe,
  Server,
  Rocket,
  Clock,
  ChevronDown,
  HardDrive,
  Network,
  Gauge,
  Award,
  PanelLeft,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

interface Plan {
  name: string;
  ram: string;
  cpu: string;
  storage: string;
  features: string[];
  price: number;
  href: string;
  icon?: string;
}

interface LocationTab {
  key: string;
  label: string;
  icon: string;
  tagline: string;
  slug: string;
  plans: Plan[];
}

const basePlan = (
  slug: string,
  overrides: { ram: string; cpu: string; storage: string; price: number }[]
): Plan[] => {
  const templates = [
    {
      name: "Starter cPanel VPS",
      support: "24/7 Support",
      extraSetup: false,
    },
    {
      name: "Business cPanel VPS",
      support: "24/7 Support",
      extraSetup: true,
    },
    {
      name: "Professional cPanel VPS",
      support: "Priority Support",
      extraSetup: true,
    },
    {
      name: "Enterprise cPanel VPS",
      support: "Premium Support",
      extraSetup: true,
    },
  ];

  return templates.map((t, i) => ({
    name: t.name,
    ram: overrides[i].ram,
    cpu: overrides[i].cpu,
    storage: overrides[i].storage,
    price: overrides[i].price,
    icon: "/cpanel-server.svg",
    href: `https://my.vynex.pk/index.php?rp=/store/${slug}-cpanel-vps/${t.name
      .toLowerCase()
      .replace(" cpanel vps", "")
      .replace(" vps", "")}-vps`,
    features: [
      "Full cPanel/WHM Access",
      "99.9% Uptime",
      "Free cPanel License",
      ...(t.extraSetup ? ["Instant Setup"] : []),
      t.support,
    ],
  }));
};

const LOCATION_TABS: LocationTab[] = [
  {
    key: "pakistan",
    label: "Pakistan",
    icon: "/pakistan-vps.svg",
    slug: "pakistan",
    tagline: "Best cPanel VPS hosting in Pakistan — Islamabad, Karachi & Lahore low-latency nodes",
    plans: basePlan("pakistan", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 1700 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "30 GB NVMe", price: 3000 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "50 GB NVMe", price: 4500 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "100 GB NVMe", price: 6500 },
    ]),
  },
  {
    key: "usa",
    label: "USA",
    icon: "/usa-vps.svg",
    slug: "usa",
    tagline: "Cheap & fastest cPanel VPS in USA — Dallas, New York & Los Angeles datacenters",
    plans: basePlan("usa", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 1700 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "30 GB NVMe", price: 3000 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "50 GB NVMe", price: 4500 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "100 GB NVMe", price: 6500 },
    ]),
  },
  {
    key: "uk",
    label: "UK",
    icon: "/uk-vps.svg",
    slug: "uk",
    tagline: "High-performance cPanel VPS in UK — London datacenter with fast European routing",
    plans: basePlan("uk", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 1700 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "30 GB NVMe", price: 3000 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "50 GB NVMe", price: 4500 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "100 GB NVMe", price: 6500 },
    ]),
  },
  {
    key: "australia",
    label: "Australia",
    icon: "/australia-vps.svg",
    slug: "australia",
    tagline: "Affordable cPanel VPS in Australia — Sydney datacenter for APAC-facing workloads",
    plans: basePlan("australia", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2200 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "40 GB NVMe", price: 3800 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "60 GB NVMe", price: 5600 },
      { ram: "16 GB", cpu: "6 vCPU", storage: "120 GB NVMe", price: 8200 },
    ]),
  },
  {
    key: "canada",
    label: "Canada",
    icon: "/canada-vps.svg",
    slug: "canada",
    tagline: "Reliable cPanel VPS in Canada — Toronto datacenter with North American reach",
    plans: basePlan("canada", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 2000 },
      { ram: "4 GB", cpu: "3 vCPU", storage: "35 GB NVMe", price: 3500 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "55 GB NVMe", price: 5200 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "110 GB NVMe", price: 7400 },
    ]),
  },
  {
    key: "dubai",
    label: "Dubai",
    icon: "/dubai-vps.svg",
    slug: "dubai",
    tagline: "Premium cPanel VPS in Dubai — UAE datacenter with Middle East connectivity",
    plans: basePlan("dubai", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 1900 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "50 GB NVMe", price: 3200 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price: 4800 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price: 8800 },
    ]),
  },
  {
    key: "germany",
    label: "Germany",
    icon: "/germany-vps.svg",
    slug: "germany",
    tagline: "High-performance cPanel VPS in Germany — Frankfurt datacenter with European routing",
    plans: basePlan("germany", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2000 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "50 GB NVMe", price: 3500 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price: 5200 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price: 9000 },
    ]),
  },
  {
    key: "singapore",
    label: "Singapore",
    icon: "/singapore-vps.svg",
    slug: "singapore",
    tagline: "Fast cPanel VPS in Singapore — Asia-Pacific datacenter with low latency",
    plans: basePlan("singapore", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2200 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "50 GB NVMe", price: 3800 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price: 5600 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price: 8500 },
    ]),
  },
];

const FEATURES = [
  {
    icon: Server,
    title: "KVM Virtualization",
    description: "Full hardware virtualization with dedicated resources for maximum performance.",
  },
  {
    icon: ShieldCheck,
    title: "Free cPanel License",
    description: "cPanel & WHM license included at no additional cost with all cPanel VPS plans.",
  },
  {
    icon: PanelLeft,
    title: "Full cPanel/WHM Access",
    description: "Complete cPanel & WHM access to manage multiple websites, domains, and emails with ease.",
  },
  {
    icon: Globe,
    title: "Dedicated IP",
    description: "Each cPanel VPS comes with a genuine dedicated IPv4 address.",
  },
  {
    icon: Zap,
    title: "Blazing-Fast NVMe",
    description: "Ultra-fast NVMe SSD storage for superior performance and low latency.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Pakistan-based technical support team available around the clock.",
  },
];

const PLAN_FEATURES = [
  {
    icon: PanelLeft,
    title: "Full cPanel/WHM Access",
    description: "Complete control of your cPanel VPS with full cPanel & WHM administrator access.",
  },
  {
    icon: Cpu,
    title: "Dedicated Resources",
    description: "Guaranteed CPU, RAM, and storage exclusively allocated to your cPanel VPS.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized cloud infrastructure delivering fast, stable, and consistent performance.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe SSD storage for improved application speed and performance.",
  },
  {
    icon: Clock,
    title: "Instant Deployment",
    description: "Your cPanel VPS is provisioned instantly after payment confirmation.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "24/7 technical support via WhatsApp and tickets, available for both local and international customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Environment",
    description: "Firewall-protected, isolated, and hardened VPS hosting with built-in DDoS protection.",
  },
  {
    icon: Globe,
    title: "Global Locations",
    description: "Pakistan, USA, UK, Germany, Singapore, UAE, Canada & Australia.",
  },
];

const OS_OPTIONS = [
  { icon: "/cpanel-server.svg", label: "cPanel & WHM", short: "cPanel", href: "/vps/cpanel" },
  { icon: "/windows-server.svg", label: "Windows Server 2022", short: "Server 2022", href: "/vps/windows" },
  { icon: "/ubuntu.svg", label: "Ubuntu cPanel", short: "Ubuntu", href: "/apps/ubuntu" },
  { icon: "/debian.svg", label: "Debian cPanel", short: "Debian", href: "/apps/debian" },
  { icon: "/almalinux.svg", label: "AlmaLinux cPanel", short: "AlmaLinux", href: "/apps/almalinux" },
  { icon: "/cloudlinux.svg", label: "CloudLinux", short: "CloudLinux", href: "/vps/cloudlinux" },
];

const APP_HOSTING = [
  { icon: "/wordpress-vps.png", label: "WordPress VPS", href: "/apps/wordpress" },
  { icon: "/woocommerce-vps.png", label: "WooCommerce VPS", href: "/apps/woocommerce" },
  { icon: "/node-js-vps.png", label: "Node.js VPS", href: "/apps/nodejs" },
  { icon: "/container-vps.png", label: "Container VPS", href: "/apps/docker" },
  { icon: "/database-vps.png", label: "Database VPS", href: "/apps/database" },
  { icon: "/odoo-vps.png", label: "Odoo VPS", href: "/apps/odoo" },
  { icon: "/n8n-vps.png", label: "n8n VPS", href: "/apps/n8n" },
  { icon: "/crm-vps.png", label: "CRM VPS", href: "/apps/crm" },
  { icon: "/ecommerce-vps.png", label: "Ecommerce VPS", href: "/apps/ecommerce" },
  { icon: "/moodle-vps.svg", label: "Moodle VPS", href: "/apps/moodle" },
  { icon: "/big-blue-button-vps.png", label: "Big Blue Button VPS", href: "/apps/bigbluebutton" },
  { icon: "/microsoft-dynamic-vps.png", label: "ERP VPS", href: "/apps/erp" },
  { icon: "/streaming-vps.svg", label: "Streaming VPS", href: "/apps/streaming" },
  { icon: "/forex-vps.png", label: "Forex VPS", href: "/apps/forex" },
  { icon: "/botting-vps.png", label: "Botting VPS", href: "/apps/botting" },
  { icon: "/social-media-vps.png", label: "Social Media VPS", href: "/apps/social-media" },
];

const LOCATIONS = [
  { icon: "/usa-vps.svg", label: "USA VPS", locations: "USA" },
  { icon: "/pakistan-vps.svg", label: "Pakistan VPS", locations: "Pakistan" },
  { icon: "/uk-vps.svg", label: "UK VPS", locations: "Europe" },
  { icon: "/singapore-vps.svg", label: "Singapore VPS", locations: "Asia" },
  { icon: "/dubai-vps.svg", label: "UAE VPS", locations: "Middle East" },
  { icon: "/canada-vps.svg", label: "Canada VPS", locations: "Canada" },
  { icon: "/australia-vps.svg", label: "Australia VPS", locations: "Australia" },
];

const FAQS = [
  {
    q: "What is cPanel VPS?",
    a: "cPanel VPS is a virtual private server with cPanel & WHM pre-installed, allowing you to easily manage websites, domains, emails, and databases through an intuitive control panel interface.",
  },
  {
    q: "Is cPanel license included?",
    a: "Yes, a FREE cPanel & WHM license is included with all our cPanel VPS plans.",
  },
  {
    q: "What is the difference between cPanel VPS and shared hosting?",
    a: "cPanel VPS provides dedicated resources, root access, and full control over your server environment, while shared hosting shares resources with other users. VPS is more powerful, secure, and scalable.",
  },
  {
    q: "Can I host multiple websites on cPanel VPS?",
    a: "Yes, cPanel VPS allows you to host unlimited websites and manage them easily through WHM and cPanel interfaces.",
  },
  {
    q: "What control panels are available?",
    a: "We offer cPanel & WHM as the primary control panel. Other options include Plesk, DirectAdmin, and Webmin upon request.",
  },
  {
    q: "What are your VPS locations?",
    a: "We offer cPanel VPS hosting in Pakistan, USA, UK, Germany, Singapore, UAE, Canada, and Australia.",
  },
  {
    q: "Is support available 24/7?",
    a: "Yes, our technical support team is available 24/7 via WhatsApp and ticket system for cPanel-related issues.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, JazzCash, EasyPaisa, and credit/debit cards.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a 7-day money-back guarantee on all VPS hosting plans.",
  },
  {
    q: "Can I migrate my websites to cPanel VPS?",
    a: "Yes, our expert team can help you migrate your websites from any hosting provider to our cPanel VPS for free.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function cPanelVPSPage() {
  const [activeTab, setActiveTab] = useState(LOCATION_TABS[0].key);
  const active = LOCATION_TABS.find((t) => t.key === activeTab)!;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "cPanel VPS Hosting - Best cPanel Virtual Private Server in Pakistan",
    "description": "Best cPanel VPS hosting in Pakistan with FREE cPanel license, full WHM access, NVMe SSD, and 24/7 support. Available in Pakistan, USA, UK, Germany & more.",
    "url": "https://vynex.pk/vps/cpanel",
    "mainEntity": {
      "@type": "Product",
      "name": "cPanel VPS Hosting",
      "description": "High-performance cPanel VPS hosting with full cPanel/WHM access, dedicated IP, NVMe SSD, and 24/7 support.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "1700",
        "highPrice": "9000",
        "offerCount": "32"
      }
    }
  };

  return (
    <>
      <Head>
        <title>cPanel VPS Hosting - Best cPanel VPS in Pakistan, USA, UK & More</title>
        <meta name="description" content="Best cPanel VPS hosting in Pakistan, USA, UK, Canada, Australia & more. FREE cPanel license, full WHM access, NVMe SSD, and 24/7 support. Starting from 1,700 PKR." />
        <meta name="keywords" content="cPanel VPS, cPanel VPS Pakistan, WHM VPS, cPanel Hosting, VPS Hosting, cPanel VPS Hosting, Cheap cPanel VPS, Managed cPanel VPS" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="cPanel VPS Hosting - Best cPanel VPS in Pakistan, USA, UK & More" />
        <meta property="og:description" content="Best cPanel VPS hosting with FREE cPanel license, full WHM access, NVMe SSD, and 24/7 support. Available in Pakistan, USA, UK, Canada, Australia & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/vps/cpanel" />
        <meta property="og:image" content="https://vynex.pk/cpanel-vps-og.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="cPanel VPS Hosting - Best cPanel VPS in Pakistan, USA, UK & More" />
        <meta name="twitter:description" content="Best cPanel VPS hosting with FREE cPanel license, full WHM access, NVMe SSD, and 24/7 support." />
        <meta name="twitter:image" content="https://vynex.pk/cpanel-vps-og.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/vps/cpanel" />
        
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

        /* ---------- HERO 3D ---------- */
        .hp-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #faf8ff 0%, #f0ebf8 50%, #e8e0f5 100%);
          padding: 120px 32px 70px;
          border-bottom: 1px solid #e8e0f5;
          min-height: 60vh;
        }
        .hp-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .hp-hero-bg .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }
        .hp-hero-bg .orb-1 {
          width: 500px;
          height: 500px;
          background: #6d28d9;
          top: -150px;
          right: -80px;
        }
        .hp-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #7c3aed;
          bottom: -120px;
          left: -80px;
          opacity: 0.2;
        }
        .hp-hero-bg .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hp-hero-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .hp-hero-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .hp-hero-content .eyebrow {
          align-self: flex-start;
        }
        .hp-hero-content h1 {
          font-size: 44px;
          line-height: 1.1;
          margin: 0;
        }
        .hp-hero-content h1 span {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hp-hero-content p {
          font-size: 16px;
          color: #475569;
          max-width: 520px;
          line-height: 1.7;
        }
        .hp-hero-ctas {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 12px 35px rgba(109, 40, 217, 0.3);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(109, 40, 217, 0.4);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #1e293b;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          border: 1.5px solid #e5e0f5;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .btn-secondary:hover {
          background: #f8f5ff;
          border-color: #c4b5fd;
        }

        /* 3D Server Visual */
        .hp-hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }
        .hp-server-3d {
          position: relative;
          width: 280px;
          height: 240px;
          transform-style: preserve-3d;
          transform: rotateY(-15deg) rotateX(5deg);
          transition: transform 0.6s ease;
        }
        .hp-server-3d:hover {
          transform: rotateY(-5deg) rotateX(0deg);
        }
        .hp-server-body {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, #1a365d, #2b6cb0);
          border-radius: 20px;
          border: 1px solid rgba(99, 179, 237, 0.3);
          box-shadow: 
            0 30px 80px rgba(43, 108, 176, 0.25),
            inset 0 1px 0 rgba(255,255,255,0.08);
          padding: 24px 20px 20px;
          transform: translateZ(20px);
        }
        .hp-server-body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%);
          border-radius: 20px 20px 50% 50%;
          pointer-events: none;
        }
        .hp-server-leds {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
        }
        .hp-server-leds .led {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 12px currentColor;
        }
        .hp-server-leds .led.green { background: #22c55e; color: #22c55e; }
        .hp-server-leds .led.blue { background: #3b82f6; color: #3b82f6; }
        .hp-server-leds .led.yellow { background: #f59e0b; color: #f59e0b; }
        .hp-server-leds .label {
          margin-left: auto;
          color: rgba(255,255,255,0.3);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          font-family: monospace;
        }
        .hp-server-blade {
          height: 7px;
          margin-bottom: 6px;
          border-radius: 4px;
          background: rgba(99, 179, 237, 0.15);
          position: relative;
          overflow: hidden;
        }
        .hp-server-blade:nth-child(odd) {
          background: rgba(99, 179, 237, 0.25);
        }
        .hp-server-blade .glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: rgba(255,255,255,0.04);
          border-radius: 4px 4px 50% 50%;
        }
        .hp-server-blade .activity {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 2px;
          border-radius: 2px;
          background: rgba(34, 197, 94, 0.4);
        }
        .hp-server-blade:nth-child(3) .activity,
        .hp-server-blade:nth-child(5) .activity {
          background: rgba(59, 130, 246, 0.4);
        }
        .hp-server-footer {
          display: flex;
          gap: 14px;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(99, 179, 237, 0.1);
        }
        .hp-server-footer span {
          color: rgba(255,255,255,0.35);
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.5px;
          font-family: monospace;
        }
        .hp-server-footer .dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-right: 4px;
          vertical-align: middle;
        }
        .hp-server-footer .dot.green { background: #22c55e; }
        .hp-server-footer .dot.blue { background: #3b82f6; }

        .hp-server-badge {
          position: absolute;
          background: #fff;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 700;
          color: #2b6cb0;
          box-shadow: 0 8px 30px rgba(43, 108, 176, 0.12);
          border: 1px solid #bee3f8;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          transform: translateZ(40px);
        }
        .hp-server-badge.b1 { top: -8px; right: -15px; }
        .hp-server-badge.b2 { bottom: 35px; left: -25px; }
        .hp-server-badge.b3 { bottom: -8px; right: 15px; }

        /* ---------- Features Grid ---------- */
        .features-grid-section {
          background: #ffffff;
          padding: 64px 32px;
          border-bottom: 1px solid #f0ebf8;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .feature-card {
          text-align: center;
          padding: 28px 20px;
          border-radius: 16px;
          background: #faf8ff;
          border: 1px solid #f0ebf8;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(109, 40, 217, 0.08);
          border-color: #ded1fb;
        }
        .feature-card .icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6d28d9;
          margin: 0 auto 12px;
        }
        .feature-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .feature-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* ---------- Location tabs ---------- */
        .tabs-section {
          padding: 80px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .tabs-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px;
        }
        .tabs-head h2 {
          font-size: 32px;
          margin: 14px 0 10px;
        }
        .tabs-bar {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid #f0ebf8;
          background: #fff;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .tab-btn img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }
        .tab-btn:hover {
          border-color: #ded1fb;
          color: #6d28d9;
        }
        .tab-btn.active {
          background: #6d28d9;
          border-color: #6d28d9;
          color: #fff;
          box-shadow: 0 8px 20px rgba(109, 40, 217, 0.25);
        }
        .tab-tagline {
          text-align: center;
          font-size: 13px;
          color: #94a3b8;
          margin: -28px 0 36px;
        }

        /* ---------- Plan Cards ---------- */
        .plan-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .plan-card {
          border: 1px solid #f0ebf8;
          border-radius: 16px;
          padding: 24px 20px;
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .plan-card:hover {
          border-color: #ded1fb;
          transform: translateY(-3px);
        }
        .plan-card.pro {
          border-color: #6d28d9;
          background: linear-gradient(180deg, #faf6ff 0%, #ffffff 40%);
          position: relative;
        }
        .plan-badge {
          position: absolute;
          top: -12px;
          left: 22px;
          background: #6d28d9;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .plan-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .plan-header img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .plan-name {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
        }
        .plan-specs {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px dashed #ede7fb;
        }
        .plan-specs span {
          font-size: 13px;
          color: #475569;
          font-weight: 600;
        }
        .plan-features-list {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .plan-features-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #64748b;
          font-weight: 500;
        }
        .plan-features-list li svg {
          color: #6d28d9;
          min-width: 15px;
        }
        .plan-price {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .plan-price sup {
          font-size: 12px;
          font-weight: 700;
          color: #94a3b8;
          margin-right: 2px;
        }
        .plan-price-sub {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 14px;
        }
        .plan-cta {
          display: block;
          text-align: center;
          padding: 10px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid #6d28d9;
          color: #6d28d9;
          transition: all 0.15s ease;
        }
        .plan-cta:hover {
          background: #6d28d9;
          color: #fff;
        }
        .plan-card.pro .plan-cta {
          background: #6d28d9;
          color: #fff;
        }
        .plan-card.pro .plan-cta:hover {
          background: #5b21b6;
        }

        /* ---------- Plan Features ---------- */
        .plan-features-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .plan-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1280px;
          margin: 40px auto 0;
        }
        .plan-feature-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.15s ease;
        }
        .plan-feature-card:hover {
          border-color: #ded1fb;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.06);
        }
        .plan-feature-card .icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .plan-feature-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .plan-feature-card p {
          font-size: 12.5px;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* ---------- OS Section ---------- */
        .os-section {
          background: #ffffff;
          padding: 64px 32px;
          border-bottom: 1px solid #f0ebf8;
        }
        .os-head {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .os-head h2 {
          font-size: 30px;
          margin: 14px 0 10px;
        }
        .os-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .os-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 20px 12px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .os-item:hover {
          border-color: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);
        }
        .os-item img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }
        .os-item span {
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          text-align: center;
        }

        /* ---------- Locations Grid ---------- */
        .locations-section {
          padding: 64px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .locations-head {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .locations-head h2 {
          font-size: 30px;
          margin: 14px 0 10px;
        }
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 14px;
        }
        .location-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 16px 10px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .location-item:hover {
          border-color: #6d28d9;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);
        }
        .location-item img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        .location-item .loc-label {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .location-item .loc-sub {
          font-size: 9px;
          font-weight: 600;
          color: #94a3b8;
        }

        /* ---------- Apps grid ---------- */
        .apps-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .apps-head {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .apps-head h2 {
          font-size: 30px;
          margin: 14px 0 12px;
        }
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .app-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 14px;
          padding: 18px 12px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .app-item:hover {
          border-color: #6d28d9;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(109, 40, 217, 0.1);
        }
        .app-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8f5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .app-icon img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }
        .app-item span {
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
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

        /* ---------- Final CTA ---------- */
        .final-cta {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
        }
        .final-card {
          background: linear-gradient(120deg, #2b6cb0 0%, #1a365d 100%);
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
        .final-card::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          top: -180px;
          right: -120px;
        }
        .final-card h2 {
          color: #fff;
          font-size: 26px;
          margin: 0 0 6px;
          max-width: 480px;
          position: relative;
        }
        .final-card p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 14px;
          margin: 0;
          max-width: 460px;
          position: relative;
        }
        .final-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #2b6cb0;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 10px;
          text-decoration: none;
          position: relative;
          white-space: nowrap;
          transition: transform 0.15s ease;
        }
        .final-btn:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .hp-hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hp-server-3d {
            width: 240px;
            height: 210px;
          }
          .plan-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .plan-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .apps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .os-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .locations-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .hp-hero-content h1 {
            font-size: 36px;
          }
        }

        @media (max-width: 640px) {
          .hp-hero {
            padding: 100px 20px 50px;
            min-height: 50vh;
          }
          .page-section {
            padding: 48px 20px;
          }
          .tabs-section {
            padding: 48px 20px;
          }
          .features-grid-section {
            padding: 48px 20px;
          }
          .plan-features-section {
            padding: 48px 20px;
          }
          .os-section {
            padding: 48px 20px;
          }
          .locations-section {
            padding: 48px 20px;
          }
          .apps-section {
            padding: 48px 20px;
          }
          .faq-section {
            padding: 48px 20px;
          }
          .final-cta {
            padding: 48px 20px;
          }

          .hp-hero-content h1 {
            font-size: 28px;
          }
          .hp-hero-content p {
            font-size: 14px;
          }
          .tabs-head h2 {
            font-size: 24px;
          }
          .plan-grid {
            grid-template-columns: 1fr;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .plan-features-grid {
            grid-template-columns: 1fr;
          }
          .apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .os-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .locations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .final-card {
            padding: 32px 20px;
          }
          .final-card h2 {
            font-size: 20px;
          }
          .hp-server-3d {
            width: 180px;
            height: 160px;
          }
          .hp-server-badge {
            font-size: 8px;
            padding: 3px 8px;
          }
          .hp-server-badge.b1 { top: -6px; right: -10px; }
          .hp-server-badge.b2 { bottom: 25px; left: -15px; }
          .hp-server-badge.b3 { bottom: -6px; right: 8px; }
        }
      `}</style>

      <Header />

      <main>
        {/* ================= HERO 3D ================= */}
        <section className="hp-hero" aria-labelledby="hero-heading">
          <div className="hp-hero-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="grid-overlay" />
          </div>
          <div className="hp-hero-inner">
            <div className="hp-hero-content">
              <span className="eyebrow" aria-hidden="true">
                <PanelLeft size={13} /> cPanel VPS Hosting
              </span>
              <h1 id="hero-heading" className="heading">
                Best cPanel VPS in Pakistan for <span>Easy Website &amp; Server Management</span>
              </h1>
              <p>
                Choose Vynex for high-performance cPanel VPS hosting in Pakistan with FREE cPanel license 
                and full WHM access. Deploy your VPS instantly across Pakistan, USA, UK, Europe, Singapore, 
                and more, powered by NVMe SSD storage and 24/7 expert support.
              </p>
              <div className="hp-hero-ctas">
                <a
                  href="https://my.vynex.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label="Buy cPanel VPS Hosting"
                >
                  <Rocket size={16} aria-hidden="true" />
                  Buy cPanel VPS
                </a>
                <Link href="#pricing" className="btn-secondary">
                  View Plans <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hp-hero-visual" aria-hidden="true">
              <div className="hp-server-3d">
                <div className="hp-server-body">
                  <div className="hp-server-leds">
                    <span className="led green" />
                    <span className="led blue" />
                    <span className="led yellow" />
                    <span className="label">cPANEL</span>
                  </div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="hp-server-blade">
                      <div className="glow" />
                      <div className="activity" />
                    </div>
                  ))}
                  <div className="hp-server-footer">
                    <span><span className="dot green" /> cPanel</span>
                    <span><span className="dot blue" /> WHM</span>
                    <span style={{ marginLeft: 'auto' }}><span className="dot green" /> ADMIN</span>
                  </div>
                </div>
                <div className="hp-server-badge b1">
                  <Zap size={11} /> NVMe SSD
                </div>
                <div className="hp-server-badge b2">
                  <ShieldCheck size={11} /> cPanel License
                </div>
                <div className="hp-server-badge b3">
                  <Users size={11} /> WHM Access
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="features-grid-section" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">Features</h2>
          <div className="features-grid">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="icon-wrap" aria-hidden="true">
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING WITH LOCATION TABS ================= */}
        <section className="tabs-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="tabs-head">
            <span className="eyebrow" aria-hidden="true">Pick your region</span>
            <h2 id="pricing-heading" className="heading">cPanel VPS Pricing by Location</h2>
            <p className="sub">
              The same reliable Vynex cPanel VPS infrastructure, deployed in the
              datacenter closest to your users with FREE cPanel license included.
            </p>
          </div>

          <div className="tabs-bar" role="tablist" aria-label="Select VPS location">
            {LOCATION_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-label={`${tab.label} cPanel VPS hosting plans`}
                className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <img src={tab.icon} alt="" aria-hidden="true" />
                {tab.label} VPS
              </button>
            ))}
          </div>
          <p className="tab-tagline">{active.tagline}</p>

          <div className="plan-grid">
            {active.plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`plan-card ${i === 2 ? "pro" : ""}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {i === 2 && <span className="plan-badge">Most Popular</span>}
                <div className="plan-header">
                  {plan.icon && (
                    <Image src={plan.icon} alt="" width={24} height={24} />
                  )}
                  <div className="plan-name" itemProp="name">{plan.name}</div>
                </div>
                <div className="plan-specs">
                  <span>{plan.ram} RAM</span>
                  <span>{plan.cpu} Cores</span>
                  <span>{plan.storage} Storage</span>
                </div>
                <ul className="plan-features-list">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={15} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="plan-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <sup>PKR</sup>
                  <span itemProp="price">{plan.price.toLocaleString()}</span>
                  <meta itemProp="priceCurrency" content="PKR" />
                </div>
                <div className="plan-price-sub">Billed Monthly</div>
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plan-cta"
                  aria-label={`Order ${plan.name} for ${plan.price} PKR`}
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PLAN FEATURES ================= */}
        <section className="plan-features-section" aria-labelledby="plan-features-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Enterprise Features</span>
            <h2 id="plan-features-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              All cPanel VPS Plans Include
            </h2>
            <p className="sub">
              Enterprise-grade features included with every cPanel VPS, designed to deliver
              dedicated resources, ultra-fast NVMe storage, secure infrastructure, and reliable uptime.
            </p>
          </div>
          <div className="plan-features-grid">
            {PLAN_FEATURES.map((feature) => (
              <div key={feature.title} className="plan-feature-card">
                <div className="icon">
                  <feature.icon size={20} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OS SECTION ================= */}
        <section className="os-section" id="os" aria-labelledby="os-heading">
          <div className="os-head">
            <span className="eyebrow" aria-hidden="true">Operating Systems</span>
            <h2 id="os-heading" className="heading">Available Operating Systems &amp; Control Panels</h2>
            <p className="sub">
              Multiple OS &amp; Control Panel Options for cPanel VPS Hosting.
            </p>
          </div>
          <div className="os-grid">
            {OS_OPTIONS.map((os) => (
              <Link key={os.label} href={os.href} className="os-item">
                <Image src={os.icon} alt="" width={36} height={36} />
                <span>{os.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= GLOBAL LOCATIONS ================= */}
        <section className="locations-section" aria-labelledby="locations-heading">
          <div className="locations-head">
            <span className="eyebrow" aria-hidden="true">Global Presence</span>
            <h2 id="locations-heading" className="heading">Vynex's Global VPS Locations</h2>
            <p className="sub">
              Check Our Other VPS Locations — Deploy your cPanel VPS in the nearest location
              for maximum speed, uptime, and performance.
            </p>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map((loc) => (
              <Link key={loc.label} href={`/vps/${loc.label.toLowerCase().replace(' vps', '')}`} className="location-item">
                <Image src={loc.icon} alt={loc.label} width={28} height={28} />
                <div className="loc-label">{loc.label}</div>
                <div className="loc-sub">{loc.locations} Locations</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= PRE-INSTALLED APPS ================= */}
        <section className="apps-section" aria-labelledby="apps-heading">
          <div className="apps-head">
            <span className="eyebrow" aria-hidden="true">Pre-installed & ready</span>
            <h2 id="apps-heading" className="heading">
              Popular Applications Ready to Deploy
            </h2>
            <p className="sub">
              Get started quickly with pre-installed applications on your cPanel VPS.
              Run WordPress, WooCommerce, Node.js apps, CRMs, and more with ease.
            </p>
          </div>
          <div className="apps-grid">
            {APP_HOSTING.map((app) => (
              <Link key={app.label} href={app.href} className="app-item">
                <div className="app-icon">
                  <Image src={app.icon} alt="" width={22} height={22} />
                </div>
                <span>{app.label}</span>
              </Link>
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
                <ChevronDown size={18} style={{ color: '#6d28d9' }} />
              </summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="final-cta" aria-labelledby="cta-heading">
          <div className="final-card">
            <div>
              <h2 id="cta-heading">Ready to Deploy Your cPanel VPS?</h2>
              <p>
                Get started with high-performance cPanel VPS hosting today. 
                Full cPanel/WHM access, NVMe SSD, and 24/7 support included.
              </p>
            </div>
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="final-btn"
              aria-label="Launch your cPanel VPS now"
            >
              Deploy Now <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}