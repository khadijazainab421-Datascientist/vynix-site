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
  Lock,
  Cloud,
  Settings,
  Wifi,
  FileCode,
  Megaphone,
  Fingerprint,
  Flag,
  Wifi as WifiIcon,
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
  uplink: string;
  ipv4: string;
  ipv6: string;
  features: string[];
  price: number;
  href: string;
  icon?: string;
  popular?: boolean;
}

const DUBAI_PLANS: Plan[] = [
  {
    name: "Starter VPS",
    ram: "2 GB",
    cpu: "1 vCPU",
    storage: "25 GB NVMe",
    bandwidth: "1 TB",
    uplink: "1 Gbps",
    ipv4: "1x IPv4",
    ipv6: "/64 IPv6",
    price: 1900,
    icon: "/windows-server.svg",
    href: "https://my.vynex.pk/index.php?rp=/store/dubai-windows-rdp/starter-rdp",
    features: [
      "Full Admin RDP Access",
      "Windows Server 2022",
      "99.9% Uptime Guarantee",
      "Dedicated IPv4 Address",
      "Free Setup",
      "Instant Delivery",
      "Windows/Linux Support",
      "24/7 Support",
    ],
  },
  {
    name: "Business VPS",
    ram: "4 GB",
    cpu: "2 vCPU",
    storage: "50 GB NVMe",
    bandwidth: "2 TB",
    uplink: "1 Gbps",
    ipv4: "1x IPv4",
    ipv6: "/64 IPv6",
    price: 3200,
    icon: "/windows-server.svg",
    href: "https://my.vynex.pk/index.php?rp=/store/dubai-windows-rdp/business-rdp",
    features: [
      "Full Admin RDP Access",
      "Windows Server 2022",
      "99.9% Uptime Guarantee",
      "Dedicated IPv4 Address",
      "Free Setup",
      "Instant Delivery",
      "Windows/Linux Support",
      "24/7 Support",
      "Priority Support",
    ],
  },
  {
    name: "Professional VPS",
    ram: "8 GB",
    cpu: "4 vCPU",
    storage: "100 GB NVMe",
    bandwidth: "4 TB",
    uplink: "1 Gbps",
    ipv4: "2x IPv4",
    ipv6: "/64 IPv6",
    price: 4800,
    icon: "/windows-server.svg",
    href: "https://my.vynex.pk/index.php?rp=/store/dubai-windows-rdp/professional-rdp",
    features: [
      "Full Admin RDP Access",
      "Windows Server 2022",
      "99.9% Uptime Guarantee",
      "Dedicated IPv4 Address",
      "Free Setup",
      "Instant Delivery",
      "Windows/Linux Support",
      "Priority Support",
      "DDoS Protection",
    ],
    popular: true,
  },
  {
    name: "Enterprise VPS",
    ram: "16 GB",
    cpu: "8 vCPU",
    storage: "200 GB NVMe",
    bandwidth: "8 TB",
    uplink: "1 Gbps",
    ipv4: "4x IPv4",
    ipv6: "/64 IPv6",
    price: 8800,
    icon: "/windows-server.svg",
    href: "https://my.vynex.pk/index.php?rp=/store/dubai-windows-rdp/enterprise-rdp",
    features: [
      "Full Admin RDP Access",
      "Windows Server 2022",
      "99.9% Uptime Guarantee",
      "Dedicated IPv4 Address",
      "Free Setup",
      "Instant Delivery",
      "Windows/Linux Support",
      "Premium Support",
      "Advanced DDoS Protection",
    ],
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
    title: "Free Windows OS",
    description: "Choose between Windows Server or Windows OS at no additional cost.",
  },
  {
    icon: MonitorSmartphone,
    title: "Full Admin RDP Access",
    description: "Complete administrator RDP access to install any Windows-compatible software.",
  },
  {
    icon: Globe,
    title: "Dedicated IP",
    description: "Each RDP comes with a genuine dedicated IPv4 address.",
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
    icon: MonitorSmartphone,
    title: "Full Admin RDP Access",
    description: "Complete control of your Windows RDP with full administrator access.",
  },
  {
    icon: Cpu,
    title: "Dedicated Resources",
    description: "Guaranteed CPU, RAM, and storage exclusively allocated to your Windows RDP.",
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
    description: "Your Windows RDP is provisioned instantly after payment confirmation.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "24/7 technical support via WhatsApp and tickets, available for both local and international customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Environment",
    description: "Firewall-protected, isolated, and hardened RDP hosting with built-in DDoS protection.",
  },
  {
    icon: Globe,
    title: "Global Locations",
    description: "Pakistan, USA, UK, Germany, Singapore, UAE, Canada & Australia.",
  },
];

const DUBAI_LOCATIONS = [
  { icon: "/dubai-vps.svg", label: "Dubai RDP", locations: "UAE" },
  { icon: "/dubai-vps.svg", label: "Abu Dhabi RDP", locations: "UAE" },
  { icon: "/dubai-vps.svg", label: "Sharjah RDP", locations: "UAE" },
  { icon: "/dubai-vps.svg", label: "Ajman RDP", locations: "UAE" },
  { icon: "/dubai-vps.svg", label: "Ras Al Khaimah RDP", locations: "UAE" },
  { icon: "/dubai-vps.svg", label: "Fujairah RDP", locations: "UAE" },
  { icon: "/dubai-vps.svg", label: "Umm Al Quwain RDP", locations: "UAE" },
];

const RDP_USE_CASES = [
  {
    icon: FileCode,
    title: "Software Development",
    description: "Build, test, and deploy applications in a Windows development environment.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Host and manage SQL Server and other databases with full admin access.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Desktop Access",
    description: "Access your Windows desktop from anywhere with secure RDP connection.",
  },
  {
    icon: ServerCog,
    title: "Server Administration",
    description: "Manage Windows Server roles, features, and services with administrative control.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Hosting",
    description: "Host Windows-based e-commerce platforms with full server control.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Migrate on-premises Windows workloads to our cloud infrastructure.",
  },
];

const OS_OPTIONS = [
  { icon: "/windows-server.svg", label: "Windows Server 2022", short: "Server 2022", href: "/rdp/windows-server" },
  { icon: "/windows-server.svg", label: "Windows Server 2019", short: "Server 2019", href: "/rdp/windows-server" },
  { icon: "/windows-10-vps.svg", label: "Windows 10 Pro", short: "Windows 10", href: "/rdp/windows-10" },
  { icon: "/windows-10-vps.svg", label: "Windows 11 Pro", short: "Windows 11", href: "/rdp/windows-11" },
  { icon: "/ubuntu.svg", label: "Ubuntu VPS", short: "Ubuntu", href: "/apps/ubuntu" },
  { icon: "/debian.svg", label: "Debian VPS", short: "Debian", href: "/apps/debian" },
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

const LOCATIONS = [
  { icon: "/dubai-vps.svg", label: "UAE RDP", locations: "Middle East" },
  { icon: "/usa-vps.svg", label: "USA RDP", locations: "USA" },
  { icon: "/uk-vps.svg", label: "UK RDP", locations: "Europe" },
  { icon: "/pakistan-vps.svg", label: "Pakistan RDP", locations: "Pakistan" },
  { icon: "/singapore-vps.svg", label: "Singapore RDP", locations: "Asia" },
  { icon: "/canada-vps.svg", label: "Canada RDP", locations: "Canada" },
  { icon: "/australia-vps.svg", label: "Australia RDP", locations: "Australia" },
];

const FAQS = [
  {
    q: "What is Windows RDP?",
    a: "Windows RDP (Remote Desktop Protocol) gives you remote access to a Windows Server with full administrator privileges. You can use it to run applications, host websites, manage databases, and perform any task as if you were sitting in front of the machine.",
  },
  {
    q: "Why choose Dubai RDP hosting?",
    a: "Dubai RDP hosting provides excellent connectivity for Middle East users, with low latency, high-speed connections, and reliable datacenters in Dubai and Abu Dhabi.",
  },
  {
    q: "Is Windows license included?",
    a: "Yes, a FREE Windows Server or Windows OS license is included with all our RDP plans.",
  },
  {
    q: "What is the difference between RDP and VPS?",
    a: "RDP (Remote Desktop Protocol) is the connection method used to access a Windows VPS. A Windows VPS provides the virtual server, and RDP is how you connect to it remotely.",
  },
  {
    q: "Can I install any software on my Windows RDP?",
    a: "Yes, you have full administrator access to install any Windows-compatible software on your RDP.",
  },
  {
    q: "What applications can I run on Windows RDP?",
    a: "You can run any Windows application including SQL Server, IIS, .NET applications, Microsoft Office, custom software, and more.",
  },
  {
    q: "Is support available 24/7?",
    a: "Yes, our technical support team is available 24/7 via WhatsApp and ticket system.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, JazzCash, EasyPaisa, and credit/debit cards.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a 7-day money-back guarantee on all RDP hosting plans.",
  },
  {
    q: "Can I upgrade my RDP plan later?",
    a: "Yes, you can easily upgrade your RDP plan at any time to get more resources as your needs grow.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function DubaiRDPPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Dubai Windows RDP Hosting - Best Windows Remote Desktop in UAE",
    "description": "Best Dubai Windows RDP hosting with FREE Windows OS, full admin RDP access, NVMe SSD, and 24/7 support. Available in Dubai & Abu Dhabi datacenters.",
    "url": "https://vynex.pk/rdp/dubai",
    "mainEntity": {
      "@type": "Product",
      "name": "Dubai Windows RDP Hosting",
      "description": "High-performance Dubai Windows RDP with full admin access, dedicated IP, NVMe SSD, and 24/7 support.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "1900",
        "highPrice": "8800",
        "offerCount": "4"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Dubai Windows RDP Hosting - Best Windows Remote Desktop in UAE</title>
        <meta name="description" content="Best Dubai Windows RDP hosting in UAE. FREE Windows OS, full admin RDP access, NVMe SSD, and 24/7 support. Starting from 1,900 PKR." />
        <meta name="keywords" content="Dubai RDP, Windows RDP Dubai, RDP Hosting UAE, Windows RDP UAE, RDP Dubai, Windows Server RDP, Cheap RDP Dubai, Best RDP Dubai" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dubai Windows RDP Hosting - Best Windows Remote Desktop in UAE" />
        <meta property="og:description" content="Best Dubai Windows RDP hosting with FREE Windows OS, full admin RDP access, NVMe SSD, and 24/7 support. Available in Dubai & Abu Dhabi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/rdp/dubai" />
        <meta property="og:image" content="https://vynex.pk/dubai-rdp-og.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dubai Windows RDP Hosting - Best Windows Remote Desktop in UAE" />
        <meta name="twitter:description" content="Best Dubai Windows RDP hosting with FREE Windows OS, full admin RDP access, NVMe SSD, and 24/7 support." />
        <meta name="twitter:image" content="https://vynex.pk/dubai-rdp-og.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/rdp/dubai" />
        
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
          color: #6d28d9;
          box-shadow: 0 8px 30px rgba(109, 40, 217, 0.12);
          border: 1px solid #eee5ff;
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

        /* ---------- Plan Cards ---------- */
        .pricing-section {
          padding: 80px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .pricing-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px;
        }
        .pricing-head h2 {
          font-size: 32px;
          margin: 14px 0 10px;
        }
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
          gap: 4px;
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px dashed #ede7fb;
        }
        .plan-specs span {
          font-size: 13px;
          color: #475569;
          font-weight: 600;
        }
        .plan-specs .spec-highlight {
          color: #6d28d9;
          font-weight: 700;
        }
        .plan-features-list {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .plan-features-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }
        .plan-features-list li svg {
          color: #6d28d9;
          min-width: 14px;
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

        /* ---------- Use Cases ---------- */
        .use-cases-section {
          background: #ffffff;
          padding: 64px 32px;
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
          text-align: center;
          background: #faf8ff;
          border: 1px solid #f0ebf8;
          border-radius: 14px;
          padding: 24px 20px;
          transition: all 0.15s ease;
        }
        .use-case-card:hover {
          border-color: #ded1fb;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(109, 40, 217, 0.08);
        }
        .use-case-card .icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }
        .use-case-card h4 {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .use-case-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* ---------- Dubai Locations ---------- */
        .locations-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
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
          max-width: 1280px;
          margin: 0 auto;
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

        /* ---------- Global Locations ---------- */
        .global-locations-section {
          padding: 64px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .global-locations-head {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .global-locations-head h2 {
          font-size: 30px;
          margin: 14px 0 10px;
        }
        .global-locations-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 14px;
        }
        .global-location-item {
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
        .global-location-item:hover {
          border-color: #6d28d9;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);
        }
        .global-location-item img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        .global-location-item .loc-label {
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
        }
        .global-location-item .loc-sub {
          font-size: 9px;
          font-weight: 600;
          color: #94a3b8;
        }

        /* ---------- Apps grid ---------- */
        .apps-section {
          background: #ffffff;
          padding: 64px 32px;
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
          .use-cases-grid {
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
          .global-locations-grid {
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
          .pricing-section {
            padding: 48px 20px;
          }
          .features-grid-section {
            padding: 48px 20px;
          }
          .plan-features-section {
            padding: 48px 20px;
          }
          .use-cases-section {
            padding: 48px 20px;
          }
          .locations-section {
            padding: 48px 20px;
          }
          .os-section {
            padding: 48px 20px;
          }
          .global-locations-section {
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
          .pricing-head h2 {
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
          .use-cases-grid {
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
          .global-locations-grid {
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
                <Flag size={13} /> Dubai Windows RDP Hosting
              </span>
              <h1 id="hero-heading" className="heading">
                Best Dubai Windows RDP for <span>Fast &amp; Reliable Remote Access</span>
              </h1>
              <p>
                Choose Vynex for high-performance Windows RDP hosting in Dubai with FREE Windows Server 
                and full administrative access. Deploy your RDP instantly across Dubai, Abu Dhabi, Sharjah, 
                and more, powered by NVMe SSD storage and 24/7 expert support.
              </p>
              <div className="hp-hero-ctas">
                <a
                  href="https://my.vynex.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label="Buy Dubai Windows RDP Hosting"
                >
                  <Rocket size={16} aria-hidden="true" />
                  Buy Dubai RDP
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
                    <span className="label">DXB-RDP</span>
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
                  <ShieldCheck size={11} /> Secure RDP
                </div>
                <div className="hp-server-badge b3">
                  <Flag size={11} /> Dubai Datacenter
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

        {/* ================= PRICING ================= */}
        <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="pricing-head">
            <span className="eyebrow" aria-hidden="true">Dubai RDP Plans</span>
            <h2 id="pricing-heading" className="heading">Windows RDP Pricing in Dubai</h2>
            <p className="sub">
              High-performance Windows RDP hosting in Dubai datacenters with FREE Windows OS included.
              Choose from multiple locations including Dubai, Abu Dhabi, and Sharjah.
            </p>
          </div>

          <div className="plan-grid">
            {DUBAI_PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`plan-card ${plan.popular ? "pro" : ""}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {plan.popular && <span className="plan-badge">Most Popular</span>}
                <div className="plan-header">
                  {plan.icon && (
                    <Image src={plan.icon} alt="" width={24} height={24} />
                  )}
                  <div className="plan-name" itemProp="name">{plan.name}</div>
                </div>
                <div className="plan-specs">
                  <span>📊 <span className="spec-highlight">{plan.ram}</span> RAM</span>
                  <span>⚡ <span className="spec-highlight">{plan.cpu}</span> Cores</span>
                  <span>💾 <span className="spec-highlight">{plan.storage}</span> Storage</span>
                  <span>📶 <span className="spec-highlight">{plan.bandwidth}</span> Bandwidth</span>
                  <span>🔗 <span className="spec-highlight">{plan.uplink}</span> Uplink</span>
                  <span>🌐 <span className="spec-highlight">{plan.ipv4}</span></span>
                  <span>🌐 <span className="spec-highlight">{plan.ipv6}</span></span>
                </div>
                <ul className="plan-features-list">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={14} aria-hidden="true" /> {f}
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
              All Dubai RDP Plans Include
            </h2>
            <p className="sub">
              Enterprise-grade features included with every Dubai RDP, designed to deliver
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

        {/* ================= USE CASES ================= */}
        <section className="use-cases-section" aria-labelledby="use-cases-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Use Cases</span>
            <h2 id="use-cases-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              Perfect for Windows Workloads
            </h2>
            <p className="sub">
              Our Dubai RDP is optimized for a wide range of Windows-based applications
              and server workloads.
            </p>
          </div>
          <div className="use-cases-grid">
            {RDP_USE_CASES.map((useCase) => (
              <div key={useCase.title} className="use-case-card">
                <div className="icon">
                  <useCase.icon size={24} />
                </div>
                <h4>{useCase.title}</h4>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DUBAI LOCATIONS ================= */}
        <section className="locations-section" aria-labelledby="locations-heading">
          <div className="locations-head">
            <span className="eyebrow" aria-hidden="true">UAE Datacenters</span>
            <h2 id="locations-heading" className="heading">Dubai RDP Datacenter Locations</h2>
            <p className="sub">
              Deploy your Windows RDP in the nearest UAE datacenter for maximum speed, uptime, and performance.
            </p>
          </div>
          <div className="locations-grid">
            {DUBAI_LOCATIONS.map((loc) => (
              <div key={loc.label} className="location-item">
                <Image src={loc.icon} alt={loc.label} width={28} height={28} />
                <div className="loc-label">{loc.label}</div>
                <div className="loc-sub">{loc.locations}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OS SECTION ================= */}
        <section className="os-section" id="os" aria-labelledby="os-heading">
          <div className="os-head">
            <span className="eyebrow" aria-hidden="true">Operating Systems</span>
            <h2 id="os-heading" className="heading">Available Operating Systems for RDP</h2>
            <p className="sub">
              Choose your preferred Windows Server or Windows OS for your Dubai RDP.
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
        <section className="global-locations-section" aria-labelledby="global-locations-heading">
          <div className="global-locations-head">
            <span className="eyebrow" aria-hidden="true">Global Presence</span>
            <h2 id="global-locations-heading" className="heading">Vynex's Global RDP Locations</h2>
            <p className="sub">
              Deploy your Windows RDP in the nearest location for maximum speed, uptime, and performance.
            </p>
          </div>
          <div className="global-locations-grid">
            {LOCATIONS.map((loc) => (
              <Link key={loc.label} href={`/rdp/${loc.label.toLowerCase().replace(' rdp', '')}`} className="global-location-item">
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
              Get started quickly with pre-installed applications on your Dubai RDP.
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
              <h2 id="cta-heading">Ready to Deploy Your Dubai RDP?</h2>
              <p>
                Get started with high-performance Dubai Windows RDP hosting today. 
                Full admin access, NVMe SSD, and 24/7 support included.
              </p>
            </div>
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="final-btn"
              aria-label="Launch your Dubai RDP now"
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
