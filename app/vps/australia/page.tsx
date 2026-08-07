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
  icon?: string;
  popular?: boolean;
}

const AUSTRALIA_PLANS: Plan[] = [
  {
    name: "Starter VPS",
    ram: "2 GB",
    cpu: "1 vCPU",
    storage: "25 GB NVMe",
    bandwidth: "1 TB",
    price: 2200,
    href: "https://my.vynex.pk/index.php?rp=/store/australia-vps/starter-vps",
    features: [
      "1 Gbps Uplink",
      "1x IPv4",
      "/64 IPv6",
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
    storage: "40 GB NVMe",
    bandwidth: "2 TB",
    price: 3800,
    href: "https://my.vynex.pk/index.php?rp=/store/australia-vps/business-vps",
    features: [
      "1 Gbps Uplink",
      "1x IPv4",
      "/64 IPv6",
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
    storage: "60 GB NVMe",
    bandwidth: "4 TB",
    price: 5600,
    href: "https://my.vynex.pk/index.php?rp=/store/australia-vps/professional-vps",
    popular: true,
    features: [
      "1 Gbps Uplink",
      "2x IPv4",
      "/64 IPv6",
      "Free Setup",
      "Instant Delivery",
      "Windows/Linux Support",
      "Priority Support",
      "DDoS Protection",
    ],
  },
  {
    name: "Enterprise VPS",
    ram: "16 GB",
    cpu: "6 vCPU",
    storage: "120 GB NVMe",
    bandwidth: "8 TB",
    price: 8200,
    href: "https://my.vynex.pk/index.php?rp=/store/australia-vps/enterprise-vps",
    features: [
      "1 Gbps Uplink",
      "4x IPv4",
      "/64 IPv6",
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
    title: "Free Windows / Linux",
    description: "Choose between Windows Server or Linux OS at no additional cost.",
  },
  {
    icon: Terminal,
    title: "Full Root / Admin RDP",
    description: "Complete root access on Linux or administrator RDP access on Windows.",
  },
  {
    icon: Globe,
    title: "Dedicated IP",
    description: "Each VPS comes with a genuine dedicated IPv4 address.",
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
    icon: Terminal,
    title: "Full Root / Admin Access",
    description: "Complete control of your Australia VPS with root (Linux) or administrator (Windows) access.",
  },
  {
    icon: Cpu,
    title: "Dedicated VPS Resources",
    description: "Guaranteed CPU, RAM, and storage exclusively allocated to your Australia VPS.",
  },
  {
    icon: Zap,
    title: "High Performance VPS",
    description: "Optimized cloud infrastructure delivering fast, stable, and consistent VPS performance.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe SSD storage for improved application speed, database performance, and lower latency.",
  },
  {
    icon: Clock,
    title: "Instant VPS Deployment",
    description: "Your VPS in Australia is provisioned instantly after payment confirmation.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "24/7 technical support via WhatsApp and tickets, available for both local and international customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure VPS Environment",
    description: "Firewall-protected, isolated, and hardened VPS hosting with built-in DDoS protection.",
  },
  {
    icon: Globe,
    title: "Global Datacenter Network",
    description: "Australia, USA, Pakistan, UK, Singapore & Europe.",
  },
];

const OS_OPTIONS = [
  { icon: "/ubuntu.svg", label: "Ubuntu VPS", short: "Ubuntu", href: "/apps/ubuntu" },
  { icon: "/almalinux.svg", label: "Almalinux VPS", short: "Almalinux", href: "/apps/almalinux" },
  { icon: "/debian.svg", label: "Debian VPS", short: "Debian", href: "/apps/debian" },
  { icon: "/windows-server.svg", label: "Windows Server 2019 VPS", short: "Server 2019", href: "/vps/windows" },
  { icon: "/windows-server.svg", label: "Windows Server 2022 VPS", short: "Server 2022", href: "/vps/windows" },
  { icon: "/windows-10-vps.svg", label: "Windows 10 VPS", short: "Windows 10", href: "/rdp/windows-10" },
  { icon: "/cloud-panel-vps.svg", label: "Cloud Panel", short: "Cloud Panel", href: "/hosting/cloud-panel" },
  { icon: "/cpanel-server.svg", label: "CPanel", short: "CPanel", href: "/hosting/cpanel" },
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
  { icon: "/usa-vps.svg", label: "USA VPS", locations: "USA" },
  { icon: "/pakistan-vps.svg", label: "Pakistan VPS", locations: "Pakistan" },
  { icon: "/uk-vps.svg", label: "UK VPS", locations: "Europe" },
  { icon: "/singapore-vps.svg", label: "Singapore VPS", locations: "Asia" },
  { icon: "/dubai-vps.svg", label: "UAE VPS", locations: "Middle East" },
  { icon: "/canada-vps.svg", label: "Canada VPS", locations: "Canada" },
  { icon: "/australia-vps.svg", label: "Australia VPS", locations: "Australia" },
];

const COMPARISON_DATA = [
  {
    feature: "Description",
    vps: "Your own virtual private server with full root or admin access",
    managed: "VPS with expert management and support",
    shared: "Shared hosting on pooled resources",
    dedicated: "Single-tenant physical server isolation",
  },
  {
    feature: "Control",
    vps: "Complete control to install custom software",
    managed: "High control with some abstraction",
    shared: "Low control and limited configuration",
    dedicated: "Full control at hardware and OS level",
  },
  {
    feature: "Resources",
    vps: "Dedicated CPU, RAM & NVMe SSD (scalable)",
    managed: "Allocated VPS resources",
    shared: "No guaranteed CPU or RAM",
    dedicated: "Dedicated machine-level resources",
  },
  {
    feature: "ISO / OS",
    vps: "FREE Windows Server & Linux OS",
    managed: "Windows or Linux (license based)",
    shared: "Limited OS choices",
    dedicated: "Any OS (license required)",
  },
  {
    feature: "Management",
    vps: "You manage OS, software, and updates",
    managed: "Monitoring and updates included",
    shared: "Fully managed by provider",
    dedicated: "You or your team manage everything",
  },
  {
    feature: "Best For",
    vps: "VPS hosting in Australia or global locations for RDP, business applications, automation, SIP, VoIP, and streaming",
    managed: "Teams wanting power with less upkeep",
    shared: "Small websites and blogs",
    dedicated: "Enterprise and compliance workloads",
  },
];

const FAQS = [
  {
    q: "What type of services does Vynex.pk offer?",
    a: "We offer VPS hosting, Dedicated Servers, RDP hosting, Business Email hosting, and SSL certificates across multiple global locations.",
  },
  {
    q: "What is Cloud VPS?",
    a: "Cloud VPS is a virtual private server that runs on cloud infrastructure, offering scalability, high availability, and dedicated resources.",
  },
  {
    q: "What is the difference between Cloud VPS and VPS?",
    a: "Cloud VPS uses cloud infrastructure with better scalability and redundancy, while traditional VPS runs on a single physical server.",
  },
  {
    q: "Does Vynex.pk provide a dedicated static IP?",
    a: "Yes, every VPS comes with a dedicated static IPv4 address included in the package.",
  },
  {
    q: "Does Vynex.pk offer a camera in Windows VPS?",
    a: "Yes, we support camera functionality in Windows VPS for surveillance and monitoring applications.",
  },
  {
    q: "Which operating systems do you support?",
    a: "We support Ubuntu, Debian, AlmaLinux, Windows Server 2019, Windows Server 2022, and Windows 10.",
  },
  {
    q: "What are your VPS locations?",
    a: "We offer VPS hosting in Australia, USA, Pakistan, UK, Singapore, UAE, and Canada.",
  },
  {
    q: "Is it possible to migrate my VPS from another provider?",
    a: "Yes, our team can help you migrate your existing VPS to our platform with minimal downtime.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a 7-day money-back guarantee on all VPS hosting plans.",
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
    q: "Does Vynex.pk offer sound in Windows VPS?",
    a: "Yes, our Windows VPS supports audio/sound functionality for multimedia applications.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function AustraliaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Australia VPS Hosting - Affordable Virtual Private Servers in Sydney, Australia",
    "description": "High-performance Australia VPS hosting in Sydney, Australia. NVMe SSD, 1 Gbps uplink, instant setup, and 24/7 support. Starting from 2,200 PKR/month.",
    "url": "https://vynex.pk/vps/australia",
    "mainEntity": {
      "@type": "Product",
      "name": "Australia VPS Hosting",
      "description": "Enterprise-grade VPS hosting in Sydney, Australia with NVMe SSD storage, 1 Gbps uplink, and DDoS protection.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PKR",
        "lowPrice": "2200",
        "highPrice": "8200",
        "offerCount": "4"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Australia VPS Hosting - Affordable VPS in Sydney, Australia | Vynex</title>
        <meta name="description" content="High-performance Australia VPS hosting in Sydney, Australia. NVMe SSD, 1 Gbps uplink, instant setup, and 24/7 support. Starting from 2,200 PKR/month." />
        <meta name="keywords" content="Australia VPS, Sydney VPS, Cheap VPS Australia, Virtual Private Server, NVMe VPS, Windows VPS, Linux VPS, VPS Hosting Australia" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Australia VPS Hosting - Affordable VPS in Sydney, Australia | Vynex" />
        <meta property="og:description" content="High-performance Australia VPS hosting in Sydney, Australia. NVMe SSD, 1 Gbps uplink, instant setup, and 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/vps/australia" />
        <meta property="og:image" content="https://vynex.pk/australia-vps-og.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Australia VPS Hosting - Affordable VPS in Sydney, Australia | Vynex" />
        <meta name="twitter:description" content="High-performance Australia VPS hosting in Sydney, Australia. NVMe SSD, 1 Gbps uplink, instant setup." />
        <meta name="twitter:image" content="https://vynex.pk/australia-vps-og.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/vps/australia" />
        
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
          background: linear-gradient(145deg, #2e1065, #4c1d95);
          border-radius: 20px;
          border: 1px solid rgba(167, 139, 250, 0.3);
          box-shadow: 
            0 30px 80px rgba(109, 40, 217, 0.25),
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
          background: rgba(167, 139, 250, 0.15);
          position: relative;
          overflow: hidden;
        }
        .hp-server-blade:nth-child(odd) {
          background: rgba(167, 139, 250, 0.25);
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
          border-top: 1px solid rgba(167,139,250,0.1);
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

        /* Floating badges */
        .hp-server-badge {
          position: absolute;
          background: #fff;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 700;
          color: #6d28d9;
          box-shadow: 0 8px 30px rgba(109, 40, 217, 0.12);
          border: 1px solid #ede7fb;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          transform: translateZ(40px);
        }
        .hp-server-badge.b1 { top: -8px; right: -15px; }
        .hp-server-badge.b2 { bottom: 35px; left: -25px; }
        .hp-server-badge.b3 { bottom: -8px; right: 15px; }

        /* ---------- Pricing Section ---------- */
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
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .os-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 16px 20px;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .os-item:hover {
          border-color: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);
        }
        .os-item img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        .os-item .os-info {
          display: flex;
          flex-direction: column;
        }
        .os-item .os-label {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }
        .os-item .os-short {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
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

        /* ---------- Comparison Table ---------- */
        .comparison-section {
          padding: 64px 32px;
          overflow-x: auto;
          max-width: 1280px;
          margin: 0 auto;
        }
        .comparison-table {
          width: 100%;
          margin: 40px auto 0;
          border-collapse: collapse;
          font-size: 13px;
          min-width: 700px;
        }
        .comparison-table th {
          text-align: left;
          padding: 14px 16px;
          background: #f8f5ff;
          font-weight: 700;
          color: #0f172a;
          border-bottom: 2px solid #ede7fb;
        }
        .comparison-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #f0ebf8;
          color: #475569;
        }
        .comparison-table .recommended {
          background: #faf6ff;
        }
        .comparison-table .recommended td {
          border-bottom-color: #ded1fb;
        }
        .comparison-table .rec-badge {
          display: inline-block;
          background: #6d28d9;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 999px;
          margin-left: 6px;
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
        .final-btn:hover {
          transform: translateY(-1px);
        }

        /* ---------- Responsive ---------- */
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
            grid-template-columns: repeat(2, 1fr);
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
          .pricing-section {
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
          .comparison-section {
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
          .apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .os-grid {
            grid-template-columns: 1fr 1fr;
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
                <Rocket size={13} /> Australia VPS Hosting
              </span>
              <h1 id="hero-heading" className="heading">
                Get Australia VPS Hosting with <span>Linux &amp; Free Windows</span>
              </h1>
              <p>
                High-performance Linux and Windows VPS in Australia, powered by NVMe SSD storage, 
                free Windows OS, and low-latency cloud infrastructure. Built by Vynex for speed, 
                reliability, and complete control with genuine Australia-based IP addresses.
              </p>
              <p style={{ fontSize: '14px', color: '#6d28d9', fontWeight: 600 }}>
                We also offer Dedicated Servers in Australia for high-resource workloads.
              </p>
              <div className="hp-hero-ctas">
                <a
                  href="https://my.vynex.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label="Buy Australia VPS Hosting"
                >
                  <Rocket size={16} aria-hidden="true" />
                  Buy Australia VPS Hosting
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
                    <span className="label">AU-01</span>
                  </div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="hp-server-blade">
                      <div className="glow" />
                      <div className="activity" />
                    </div>
                  ))}
                  <div className="hp-server-footer">
                    <span><span className="dot green" /> ETH1</span>
                    <span><span className="dot blue" /> ETH2</span>
                    <span style={{ marginLeft: 'auto' }}><span className="dot green" /> PWR</span>
                  </div>
                </div>
                <div className="hp-server-badge b1">
                  <Zap size={11} /> NVMe SSD
                </div>
                <div className="hp-server-badge b2">
                  <ShieldCheck size={11} /> DDoS Protected
                </div>
                <div className="hp-server-badge b3">
                  <Clock size={11} /> Instant Setup
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICING PLANS ================= */}
        <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="pricing-head">
            <span className="eyebrow" aria-hidden="true">Choose your plan</span>
            <h2 id="pricing-heading" className="heading">Choose Australia VPS Hosting Plan</h2>
            <p className="sub">
              Select the perfect VPS plan for your needs. All plans include instant setup,
              free IPv6, and 24/7 expert support.
            </p>
          </div>

          <div className="plan-grid">
            {AUSTRALIA_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card ${plan.popular ? "popular" : ""}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {plan.popular && <span className="plan-badge">Most Popular</span>}
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

        {/* ================= INTRO / FEATURES SECTION ================= */}
        <section className="features-grid-section" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">Key Features</h2>
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

        {/* ================= PLAN FEATURES ================= */}
        <section className="plan-features-section" aria-labelledby="plan-features-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Enterprise Features</span>
            <h2 id="plan-features-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              All Australia VPS Plans Include
            </h2>
            <p className="sub">
              Enterprise-grade features included with every Linux &amp; Windows VPS in Australia, designed 
              to deliver dedicated resources, ultra-fast NVMe storage, secure infrastructure, and 
              reliable uptime for business-critical workloads.
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
              Multiple OS &amp; Control Panel Options for VPS Hosting.
            </p>
          </div>
          <div className="os-grid">
            {OS_OPTIONS.map((os) => (
              <Link key={os.label} href={os.href} className="os-item">
                <Image src={os.icon} alt="" width={32} height={32} />
                <div className="os-info">
                  <span className="os-label">{os.label}</span>
                  <span className="os-short">{os.short}</span>
                </div>
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
              Whether you're located in Asia, Europe, North America, or the Middle East, Vynex 
              delivers ultra-low-latency VPS Hosting and Dedicated Servers across multiple global 
              data center regions. Powered by enterprise-grade hardware and expert support, you can 
              easily deploy your VPS Hosting, Windows VPS, or Premium RDP in the nearest location 
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

        {/* ================= COMPARISON TABLE ================= */}
        <section className="comparison-section" aria-labelledby="comparison-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Compare Options</span>
            <h2 id="comparison-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              Is VPS Hosting Right for You? Compare Your Hosting Options
            </h2>
            <p className="sub">
              Compare VPS hosting with other hosting options and choose the best solution across Australia and 30+ global locations.
            </p>
          </div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>VPS Hosting in Australia <span className="rec-badge">Recommended</span></th>
                <th>Australia Managed VPS</th>
                <th>Australia Shared Hosting</th>
                <th>Australia Dedicated Server</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className={idx === 0 ? 'recommended' : ''}>
                  <td><strong>{row.feature}</strong></td>
                  <td>{row.vps}</td>
                  <td>{row.managed}</td>
                  <td>{row.shared}</td>
                  <td>{row.dedicated}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p className="sub" style={{ fontSize: '13px' }}>
              Vynex.pk offers FREE Windows Server or Linux OS with every VPS. Looking for high-performance hardware? 
              <Link href="/dedicated-servers" style={{ color: '#6d28d9', fontWeight: 600, textDecoration: 'none' }}> Dedicated Servers in Australia</Link>
            </p>
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
              Get started quickly with pre-installed applications on your Australia VPS.
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
              <h2 id="cta-heading">Ready to Deploy Your Australia VPS?</h2>
              <p>
                Get started with our Sydney, Australia VPS hosting today. 
                Instant setup, NVMe SSD, and 24/7 support included.
              </p>
            </div>
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="final-btn"
              aria-label="Launch your Australia VPS now"
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