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
  ShieldCheck,
  HeadphonesIcon,
  Zap,
  Globe,
  Server,
  Rocket,
  Clock,
  ChevronDown,
  HardDrive,
  Network,
  Cpu,
  Users,
  Video,
  Mic,
  FileText,
  Lock,
  RefreshCw,
  Workflow,
  Boxes,
  Container,
  Database,
  Gamepad2,
  Radio,
  LayoutPanelTop,
  GraduationCap,
  Building2,
  TrendingUp,
  Bot,
  Share2,
  ShoppingCart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

interface Plan {
  name: string;
  ram: string;
  cpu: string;
  storage: string;
  bandwidth: string;
  features: string[];
  price: number;
  href: string;
  popular?: boolean;
}

interface CountryTab {
  key: string;
  label: string;
  icon: string;
  flag: string;
  location: string;
  slug: string;
  tagline: string;
  plans: Plan[];
}

const RDP_PLANS_BASE = (country: string, overrides: { ram: string; cpu: string; storage: string; price: number }[]): Plan[] => {
  const templates = [
    {
      name: "Starter RDP",
      support: "24/7 Support",
      extraSetup: false,
    },
    {
      name: "Business RDP",
      support: "24/7 Support",
      extraSetup: true,
    },
    {
      name: "Professional RDP",
      support: "Priority Support",
      extraSetup: true,
    },
    {
      name: "Enterprise RDP",
      support: "Premium Support",
      extraSetup: true,
    },
  ];

  return templates.map((t, i) => ({
    name: t.name,
    ram: overrides[i].ram,
    cpu: overrides[i].cpu,
    storage: overrides[i].storage,
    bandwidth: "Unlimited",
    price: overrides[i].price,
    href: `https://my.vynex.pk/index.php?rp=/store/${country}-rdp/${t.name
      .toLowerCase()
      .replace(" rdp", "")}-rdp`,
    features: [
      "Full Admin Access",
      "Windows 10 Pro",
      "Dedicated IP",
      "99.9% Uptime",
      ...(t.extraSetup ? ["Instant Setup"] : []),
      t.support,
    ],
  }));
};

const COUNTRY_TABS: CountryTab[] = [
  {
    key: "pakistan",
    label: "Pakistan",
    icon: "/pakistan-vps.svg",
    flag: "🇵🇰",
    location: "Karachi, Pakistan",
    slug: "pakistan",
    tagline: "Best Windows 10 RDP in Pakistan — Karachi & Lahore low-latency nodes",
    plans: RDP_PLANS_BASE("pakistan", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 1800 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "30 GB NVMe", price: 3200 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "50 GB NVMe", price: 4800 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "100 GB NVMe", price: 6800 },
    ]),
  },
  {
    key: "usa",
    label: "USA",
    icon: "/usa-vps.svg",
    flag: "🇺🇸",
    location: "Dallas, Texas",
    slug: "usa",
    tagline: "Cheap & fastest Windows 10 RDP in USA — Dallas, New York & Los Angeles datacenters",
    plans: RDP_PLANS_BASE("usa", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 1800 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "30 GB NVMe", price: 3200 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "50 GB NVMe", price: 4800 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "100 GB NVMe", price: 6800 },
    ]),
  },
  {
    key: "uk",
    label: "UK",
    icon: "/uk-vps.svg",
    flag: "🇬🇧",
    location: "London, UK",
    slug: "uk",
    tagline: "High-performance Windows 10 RDP in UK — London datacenter with fast European routing",
    plans: RDP_PLANS_BASE("uk", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 1800 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "30 GB NVMe", price: 3200 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "50 GB NVMe", price: 4800 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "100 GB NVMe", price: 6800 },
    ]),
  },
  {
    key: "australia",
    label: "Australia",
    icon: "/australia-vps.svg",
    flag: "🇦🇺",
    location: "Sydney, Australia",
    slug: "australia",
    tagline: "Affordable Windows 10 RDP in Australia — Sydney datacenter for APAC-facing workloads",
    plans: RDP_PLANS_BASE("australia", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2300 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "40 GB NVMe", price: 4000 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "60 GB NVMe", price: 5800 },
      { ram: "16 GB", cpu: "6 vCPU", storage: "120 GB NVMe", price: 8400 },
    ]),
  },
  {
    key: "canada",
    label: "Canada",
    icon: "/canada-vps.svg",
    flag: "🇨🇦",
    location: "Toronto, Canada",
    slug: "canada",
    tagline: "Reliable Windows 10 RDP in Canada — Toronto datacenter with North American reach",
    plans: RDP_PLANS_BASE("canada", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 2100 },
      { ram: "4 GB", cpu: "3 vCPU", storage: "35 GB NVMe", price: 3700 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "55 GB NVMe", price: 5400 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "110 GB NVMe", price: 7600 },
    ]),
  },
  {
    key: "dubai",
    label: "Dubai",
    icon: "/dubai-vps.svg",
    flag: "🇦🇪",
    location: "Dubai, UAE",
    slug: "dubai",
    tagline: "Premium Windows 10 RDP in Dubai — UAE datacenter with Middle East connectivity",
    plans: RDP_PLANS_BASE("dubai", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2000 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "50 GB NVMe", price: 3400 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price: 5000 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price: 9000 },
    ]),
  },
  {
    key: "germany",
    label: "Germany",
    icon: "/germany-vps.svg",
    flag: "🇩🇪",
    location: "Frankfurt, Germany",
    slug: "germany",
    tagline: "High-performance Windows 10 RDP in Germany — Frankfurt datacenter with European routing",
    plans: RDP_PLANS_BASE("germany", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2100 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "50 GB NVMe", price: 3700 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price: 5400 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price: 9200 },
    ]),
  },
  {
    key: "singapore",
    label: "Singapore",
    icon: "/singapore-vps.svg",
    flag: "🇸🇬",
    location: "Singapore",
    slug: "singapore",
    tagline: "Fast Windows 10 RDP in Singapore — Asia-Pacific datacenter with low latency",
    plans: RDP_PLANS_BASE("singapore", [
      { ram: "2 GB", cpu: "1 vCPU", storage: "25 GB NVMe", price: 2300 },
      { ram: "4 GB", cpu: "2 vCPU", storage: "50 GB NVMe", price: 4000 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price: 5800 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price: 8700 },
    ]),
  },
];

const FEATURES = [
  {
    icon: MonitorSmartphone,
    title: "Full Windows 10 Pro",
    description: "Genuine Windows 10 Professional with full administrator access and RDP support.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated IP Address",
    description: "Each RDP comes with a dedicated static IPv4 address for reliable remote access.",
  },
  {
    icon: Zap,
    title: "Blazing-Fast NVMe",
    description: "Ultra-fast NVMe SSD storage for superior performance and quick boot times.",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Support for multiple concurrent user sessions for teams and collaborative work.",
  },
  {
    icon: Video,
    title: "Camera & Audio Support",
    description: "Full camera and audio support for video conferencing and multimedia applications.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Pakistan-based technical support team available around the clock via WhatsApp and tickets.",
  },
];

const RDP_FEATURES = [
  {
    icon: Server,
    title: "Full Admin Access",
    description: "Complete administrator access to install any software and configure settings.",
  },
  {
    icon: Cpu,
    title: "Dedicated Resources",
    description: "Guaranteed CPU, RAM, and storage exclusively allocated to your RDP.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized infrastructure delivering fast, stable, and consistent performance.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe SSD storage for improved application speed and performance.",
  },
  {
    icon: Clock,
    title: "Instant Deployment",
    description: "Your RDP is provisioned instantly after payment confirmation.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "24/7 technical support via WhatsApp and tickets for all customers.",
  },
  {
    icon: Lock,
    title: "Secure Environment",
    description: "Firewall-protected and isolated RDP hosting with built-in security.",
  },
  {
    icon: Globe,
    title: "Global Locations",
    description: "Multiple locations worldwide for optimal performance and connectivity.",
  },
];

const RDP_USE_CASES = [
  {
    icon: MonitorSmartphone,
    title: "Remote Desktop Access",
    description: "Access your Windows 10 desktop from anywhere in the world with RDP.",
  },
  {
    icon: FileText,
    title: "Office & Productivity",
    description: "Run Microsoft Office, accounting software, and enterprise tools on your RDP.",
  },
  {
    icon: Video,
    title: "Multimedia & Streaming",
    description: "Stream videos, use video conferencing, and run multimedia applications.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Allow multiple users to access one RDP for teams and shared workflows.",
  },
  {
    icon: Lock,
    title: "Secure Remote Work",
    description: "Work securely from anywhere with encrypted remote desktop connections.",
  },
  {
    icon: RefreshCw,
    title: "Application Hosting",
    description: "Host Windows applications and legacy software on your dedicated RDP.",
  },
];

const OS_OPTIONS = [
  { icon: "/windows-10-vps.svg", label: "Windows 10 Pro", short: "Win 10 Pro", href: "/rdp/windows-10" },
  { icon: "/windows-server.svg", label: "Windows Server 2019", short: "Server 2019", href: "/rdp/windows-server" },
  { icon: "/windows-server.svg", label: "Windows Server 2022", short: "Server 2022", href: "/rdp/windows-server" },
  { icon: "/ubuntu.svg", label: "Ubuntu Linux", short: "Ubuntu", href: "/apps/ubuntu" },
  { icon: "/debian.svg", label: "Debian Linux", short: "Debian", href: "/apps/debian" },
  { icon: "/almalinux.svg", label: "AlmaLinux", short: "AlmaLinux", href: "/apps/almalinux" },
];

const APP_HOSTING = [
  { icon: "/n8n-vps.png", label: "n8n VPS", href: "/apps/n8n" },
  { icon: "/odoo-vps.png", label: "Odoo VPS", href: "/apps/odoo" },
  { icon: "/node-js-vps.png", label: "Node.js VPS", href: "/apps/nodejs" },
  { icon: "/container-vps.png", label: "Container VPS", href: "/apps/docker" },
  { icon: "/database-vps.png", label: "Database VPS", href: "/apps/database" },
  { icon: "/blue-stacks-vps.png", label: "Emulator VPS", href: "/apps/emulator" },
  { icon: "/wireguard-vps.svg", label: "Wireguard VPS", href: "/apps/wireguard" },
  { icon: "/streaming-vps.svg", label: "Streaming VPS", href: "/apps/streaming" },
  { icon: "/cpanel-server.svg", label: "cPanel VPS", href: "/vps/cpanel" },
  { icon: "/nvidia-gpu-pakistan.png", label: "GPU VPS/VDS", href: "/vps/gpu" },
  { icon: "/moodle-vps.svg", label: "Moodle VPS", href: "/apps/moodle" },
  { icon: "/big-blue-button-vps.png", label: "Big Blue Button VPS", href: "/apps/bigbluebutton" },
  { icon: "/microsoft-dynamic-vps.png", label: "ERP VPS", href: "/apps/erp" },
  { icon: "/crm-vps.png", label: "CRM VPS", href: "/apps/crm" },
  { icon: "/forex-vps.png", label: "Forex VPS", href: "/apps/forex" },
  { icon: "/botting-vps.png", label: "Botting VPS", href: "/apps/botting" },
  { icon: "/tiktok-vps.png", label: "Social Media VPS", href: "/apps/tiktok" },
  { icon: "/ecommerce-vps.png", label: "Ecommerce VPS", href: "/apps/ecommerce" },
];

const FAQS = [
  {
    q: "What is Windows 10 RDP?",
    a: "Windows 10 RDP (Remote Desktop Protocol) is a service that allows you to remotely access a Windows 10 desktop from anywhere in the world.",
  },
  {
    q: "What are the minimum requirements for Windows 10 RDP?",
    a: "You need a stable internet connection and any device that supports RDP (Windows, Mac, Linux, Android, iOS).",
  },
  {
    q: "Can I use multiple users on one RDP?",
    a: "Yes, our Windows 10 RDP supports multiple concurrent user sessions for teams and collaborative work.",
  },
  {
    q: "Is camera and audio supported?",
    a: "Yes, full camera and audio support is included for video conferencing and multimedia applications.",
  },
  {
    q: "What software can I install on my RDP?",
    a: "You have full administrator access to install any Windows-compatible software.",
  },
  {
    q: "How do I access my Windows 10 RDP?",
    a: "You can access your RDP using the built-in Remote Desktop Connection on Windows, Microsoft Remote Desktop on Mac, or any RDP client app.",
  },
  {
    q: "Is my data secure?",
    a: "Yes, all connections are encrypted and our servers are firewall-protected with built-in security measures.",
  },
  {
    q: "What are your VPS locations?",
    a: "We offer RDP hosting in Pakistan, USA, UK, Australia, Canada, Dubai, Germany, and Singapore.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, JazzCash, EasyPaisa, and credit/debit cards.",
  },
  {
    q: "Is support available 24/7?",
    a: "Yes, our technical support team is available 24/7 via WhatsApp and ticket system.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function Windows10RDPPage() {
  const [activeTab, setActiveTab] = useState(COUNTRY_TABS[0].key);
  const active = COUNTRY_TABS.find((t) => t.key === activeTab)!;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Windows 10 RDP Hosting - Affordable Remote Desktop in Multiple Countries",
    "description": "High-performance Windows 10 RDP hosting with NVMe SSD, dedicated IP, and 24/7 support. Available in Pakistan, USA, UK, Australia, and more.",
    "url": "https://vynex.pk/rdp/windows-10",
    "mainEntity": {
      "@type": "Product",
      "name": "Windows 10 RDP Hosting",
      "description": "Enterprise-grade Windows 10 RDP with full admin access, dedicated IP, and NVMe SSD storage.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "1800",
        "highPrice": "9200",
        "offerCount": "32"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Windows 10 RDP Hosting - Remote Desktop in Pakistan, USA, UK & More</title>
        <meta name="description" content="Best Windows 10 RDP hosting with full admin access, dedicated IP, NVMe SSD, and 24/7 support. Available in Pakistan, USA, UK, Australia, Canada, Dubai, Germany & Singapore." />
        <meta name="keywords" content="Windows 10 RDP, Remote Desktop, RDP Hosting, Windows RDP, Cheap RDP, RDP Pakistan, RDP USA, RDP UK, RDP Australia" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Windows 10 RDP Hosting - Remote Desktop in Multiple Countries | Vynex" />
        <meta property="og:description" content="High-performance Windows 10 RDP hosting with full admin access, dedicated IP, NVMe SSD, and 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/rdp/windows-10" />
        <meta property="og:image" content="https://vynex.pk/windows-10-rdp-og.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Windows 10 RDP Hosting - Remote Desktop in Multiple Countries | Vynex" />
        <meta name="twitter:description" content="High-performance Windows 10 RDP hosting with full admin access, dedicated IP, NVMe SSD, and 24/7 support." />
        <meta name="twitter:image" content="https://vynex.pk/windows-10-rdp-og.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/rdp/windows-10" />
        
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

        /* 3D Visual */
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

        /* ---------- Tabs ---------- */
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
        .plan-card.popular {
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
        .plan-name {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
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
        .plan-card.popular .plan-cta {
          background: #6d28d9;
          color: #fff;
        }
        .plan-card.popular .plan-cta:hover {
          background: #5b21b6;
        }

        /* ---------- Use Cases ---------- */
        .use-cases-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1280px;
          margin: 40px auto 0;
        }
        .use-case-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.15s ease;
        }
        .use-case-card:hover {
          border-color: #ded1fb;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.06);
        }
        .use-case-card .icon {
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
        .use-case-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .use-case-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* ---------- OS Section ---------- */
        .os-section {
          background: #ffffff;
          padding: 64px 32px;
          border-bottom: 1px solid #f0ebf8;
        }
        .os-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1280px;
          margin: 40px auto 0;
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
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .os-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .apps-grid {
            grid-template-columns: repeat(3, 1fr);
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
          .use-cases-section {
            padding: 48px 20px;
          }
          .os-section {
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
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
          .os-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .apps-grid {
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
          .tabs-bar {
            gap: 6px;
          }
          .tab-btn {
            font-size: 11px;
            padding: 6px 12px;
          }
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
                <MonitorSmartphone size={13} /> Windows 10 RDP Hosting
              </span>
              <h1 id="hero-heading" className="heading">
                Get Windows 10 RDP with <span>Full Admin Access</span>
              </h1>
              <p>
                High-performance Windows 10 Remote Desktop with NVMe SSD storage, dedicated IP, 
                and full administrator access. Available in Pakistan, USA, UK, Australia, and more.
              </p>
              <div className="hp-hero-ctas">
                <a
                  href="https://my.vynex.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label="Buy Windows 10 RDP"
                >
                  <Rocket size={16} aria-hidden="true" />
                  Buy Windows 10 RDP
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
                    <span className="label">WIN10-RDP</span>
                  </div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="hp-server-blade">
                      <div className="glow" />
                      <div className="activity" />
                    </div>
                  ))}
                  <div className="hp-server-footer">
                    <span><span className="dot green" /> RDP</span>
                    <span><span className="dot blue" /> IP</span>
                    <span style={{ marginLeft: 'auto' }}><span className="dot green" /> ADMIN</span>
                  </div>
                </div>
                <div className="hp-server-badge b1">
                  <Zap size={11} /> NVMe SSD
                </div>
                <div className="hp-server-badge b2">
                  <ShieldCheck size={11} /> Dedicated IP
                </div>
                <div className="hp-server-badge b3">
                  <Users size={11} /> Multi-User
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

        {/* ================= PRICING WITH TABS ================= */}
        <section className="tabs-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="tabs-head">
            <span className="eyebrow" aria-hidden="true">Pick your location</span>
            <h2 id="pricing-heading" className="heading">Windows 10 RDP Pricing by Location</h2>
            <p className="sub">
              Choose your preferred location for optimal performance. All plans include full admin access,
              dedicated IP, and NVMe SSD storage.
            </p>
          </div>

          <div className="tabs-bar" role="tablist" aria-label="Select RDP location">
            {COUNTRY_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-label={`${tab.label} Windows 10 RDP plans`}
                className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <img src={tab.icon} alt="" aria-hidden="true" />
                <span style={{ fontSize: '16px' }}>{tab.flag}</span>
                {tab.label}
              </button>
            ))}
          </div>
          <p className="tab-tagline">{active.tagline}</p>

          <div className="plan-grid">
            {active.plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`plan-card ${i === 2 ? "popular" : ""}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {i === 2 && <span className="plan-badge">Most Popular</span>}
                <div className="plan-name" itemProp="name">{plan.name}</div>
                <div className="plan-specs">
                  <span>{plan.ram} RAM</span>
                  <span>{plan.cpu} Cores</span>
                  <span>{plan.storage} Storage</span>
                  <span>{plan.bandwidth} Bandwidth</span>
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

        {/* ================= RDP FEATURES ================= */}
        <section className="use-cases-section" aria-labelledby="rdp-features-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Features</span>
            <h2 id="rdp-features-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              All Windows 10 RDP Plans Include
            </h2>
            <p className="sub">
              Enterprise-grade features included with every Windows 10 RDP, designed to deliver
              dedicated resources, ultra-fast NVMe storage, and secure remote access.
            </p>
          </div>
          <div className="use-cases-grid">
            {RDP_FEATURES.map((feature) => (
              <div key={feature.title} className="use-case-card">
                <div className="icon">
                  <feature.icon size={20} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= USE CASES ================= */}
        <section className="page-section" aria-labelledby="use-cases-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Use Cases</span>
            <h2 id="use-cases-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              Windows 10 RDP Use Cases
            </h2>
            <p className="sub">
              Discover how Windows 10 RDP can transform your workflow and business operations.
            </p>
          </div>
          <div className="use-cases-grid" style={{ marginTop: '40px' }}>
            {RDP_USE_CASES.map((useCase) => (
              <div key={useCase.title} className="use-case-card">
                <div className="icon">
                  <useCase.icon size={20} />
                </div>
                <h4>{useCase.title}</h4>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OS SECTION ================= */}
        <section className="os-section" id="os" aria-labelledby="os-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Operating Systems</span>
            <h2 id="os-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              Available Operating Systems
            </h2>
            <p className="sub">
              Choose from multiple operating systems for your RDP hosting needs.
            </p>
          </div>
          <div className="os-grid">
            {OS_OPTIONS.map((os) => (
              <Link key={os.label} href={os.href} className="os-item">
                <Image src={os.icon} alt={os.label} width={36} height={36} />
                <span>{os.label}</span>
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
              Get started quickly with pre-installed applications on your Windows 10 RDP.
              Run n8n, MetaTrader, your CRM, web apps, Odoo ERP, and more.
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
              <h2 id="cta-heading">Ready to Get Your Windows 10 RDP?</h2>
              <p>
                Get started with high-performance Windows 10 Remote Desktop today. 
                Full admin access, dedicated IP, and 24/7 support included.
              </p>
            </div>
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="final-btn"
              aria-label="Get Windows 10 RDP now"
            >
              Get RDP Now <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}