"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  
  Gauge,
  HeadphonesIcon,
  Zap,
  Globe,
  Server,
  Rocket,
  Award,
  Clock,
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
      name: "Starter VPS",
      support: "24/7 Support",
      extraSetup: false,
    },
    {
      name: "Business VPS",
      support: "24/7 Support",
      extraSetup: true,
    },
    {
      name: "Professional VPS",
      support: "Priority Support",
      extraSetup: true,
    },
    {
      name: "Enterprise VPS",
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
    icon: "/select-os.png",
    href: `https://my.vynex.pk/index.php?rp=/store/${slug}-vps/${t.name
      .toLowerCase()
      .replace(" vps", "")}-vps`,
    features: [
      "Full Root Access",
      "99.9% Uptime",
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
    tagline: "Best VPS hosting in Pakistan — Islamabad, Karachi & Lahore low-latency nodes",
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
    tagline: "Cheap & fastest VPS in USA — Dallas, New York & Los Angeles datacenters",
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
    tagline: "High-performance VPS in UK — London datacenter with fast European routing",
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
    tagline: "Affordable VPS in Australia — Sydney datacenter for APAC-facing workloads",
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
    tagline: "Reliable VPS in Canada — Toronto datacenter with North American reach",
    plans: basePlan("canada", [
      { ram: "2 GB", cpu: "2 vCPU", storage: "20 GB NVMe", price: 2000 },
      { ram: "4 GB", cpu: "3 vCPU", storage: "35 GB NVMe", price: 3500 },
      { ram: "8 GB", cpu: "4 vCPU", storage: "55 GB NVMe", price: 5200 },
      { ram: "16 GB", cpu: "8 vCPU", storage: "110 GB NVMe", price: 7400 },
    ]),
  },
];

const HOSTING_PLANS = [
  {
    icon: "/linux-server.svg",
    iconComponent: Terminal,
    name: "Linux VPS Hosting",
    price: "3,000",
    desc: "Value-packed Linux VPS plans in Pakistan, tuned for maximum performance, reliability, and room to grow.",
    href: "/vps/linux",
    recommended: false,
  },
  {
    icon: "/windows-server.svg",
    iconComponent: MonitorSmartphone,
    name: "Windows VPS Hosting",
    price: "4,000",
    desc: "High-performance, affordable Windows VPS RDP hosting in Pakistan with full Admin access and a dedicated IP.",
    href: "/vps/windows",
    recommended: false,
  },
  {
    icon: "/windows-server.svg",
    iconComponent: ServerCog,
    name: "Instant Dedicated Servers",
    price: "19,000",
    desc: "High-performance Dedicated Servers in Pakistan, Europe, USA & UK with full root access and free Windows with Admin RDP.",
    href: "/dedicated-servers",
    recommended: true,
  },
  {
    icon: "/mail-hosting-pakistan.png",
    iconComponent: Mail,
    name: "Business Email Hosting",
    price: "1,666",
    desc: "Spam-free business email hosting in Pakistan with unlimited accounts — a reliable alternative to Google Workspace and Microsoft 365.",
    href: "/email/business",
    recommended: false,
  },
];

const APP_HOSTING = [
  { icon: "/n8n-vps.png", iconComponent: Workflow, label: "n8n VPS", href: "/apps/n8n" },
  { icon: "/odoo-vps.png", iconComponent: Boxes, label: "Odoo VPS", href: "/apps/odoo" },
  { icon: "/node-js-vps.png", iconComponent: Terminal, label: "Node.js VPS", href: "/apps/nodejs" },
  { icon: "/container-vps.png", iconComponent: Container, label: "Container VPS", href: "/apps/docker" },
  { icon: "/database-vps.png", iconComponent: Database, label: "Database VPS", href: "/apps/database" },
  { icon: "/blue-stacks-vps.png", iconComponent: Gamepad2, label: "Emulator VPS", href: "/apps/emulator" },
  { icon: "/wireguard-vps.svg", iconComponent: ShieldCheck, label: "Wireguard VPS", href: "/apps/wireguard" },
  { icon: "/streaming-vps.svg", iconComponent: Radio, label: "Streaming VPS", href: "/apps/streaming" },
  { icon: "/cpanel-server.svg", iconComponent: LayoutPanelTop, label: "cPanel VPS", href: "/vps/cpanel" },
  { icon: "/nvidia-gpu-pakistan.png", iconComponent: Cpu, label: "GPU VPS/VDS", href: "/vps/gpu" },
  { icon: "/moodle-vps.svg", iconComponent: GraduationCap, label: "Moodle VPS", href: "/apps/moodle" },
  { icon: "/big-blue-button-vps.png", iconComponent: Video, label: "Big Blue Button VPS", href: "/apps/bigbluebutton" },
  { icon: "/microsoft-dynamic-vps.png", iconComponent: Building2, label: "ERP VPS", href: "/apps/erp" },
  { icon: "/crm-vps.png", iconComponent: Users, label: "CRM VPS", href: "/apps/crm" },
  { icon: "/forex-vps.png", iconComponent: TrendingUp, label: "Forex VPS", href: "/apps/forex" },
  { icon: "/botting-vps.png", iconComponent: Bot, label: "Botting VPS", href: "/apps/botting" },
  { icon: "/tiktok-vps.png", iconComponent: Share2, label: "Social Media VPS", href: "/apps/tiktok" },
  { icon: "/ecommerce-vps.png", iconComponent: ShoppingCart, label: "Ecommerce VPS", href: "/apps/ecommerce" },
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

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [activeTab, setActiveTab] = useState(LOCATION_TABS[0].key);
  const active = LOCATION_TABS.find((t) => t.key === activeTab)!;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vynex Hosting - VPS, Dedicated Servers & Cloud Hosting",
    "description": "Affordable VPS hosting in Pakistan, USA, UK, Canada, Australia. Linux and Windows VPS with NVMe SSD, DDoS protection, and 24/7 support.",
    "url": "https://vynex.pk",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vynex Hosting Solutions",
      "description": "Enterprise cloud infrastructure and VPS hosting provider",
      "url": "https://vynex.pk"
    }
  };

  return (
    <>
      <Head>
        <title>Vynex Hosting - Affordable VPS, Dedicated Servers & Cloud Hosting</title>
        <meta name="description" content="Best VPS hosting in Pakistan, USA, UK, Canada & Australia. Linux and Windows VPS with NVMe SSD, instant setup, 24/7 support, and enterprise-grade DDoS protection." />
        <meta name="keywords" content="VPS hosting Pakistan, Linux VPS, Windows VPS, Dedicated Servers, Business Email, Cloud Hosting, NVMe VPS, RDP Hosting, Cheap VPS" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vynex Hosting - Affordable VPS, Dedicated Servers & Cloud Hosting" />
        <meta property="og:description" content="Best VPS hosting in Pakistan, USA, UK, Canada & Australia. Linux and Windows VPS with NVMe SSD, instant setup, 24/7 support, and enterprise-grade DDoS protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk" />
        <meta property="og:image" content="https://vynex.pk/og-image.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vynex Hosting - Affordable VPS, Dedicated Servers & Cloud Hosting" />
        <meta name="twitter:description" content="Best VPS hosting in Pakistan, USA, UK, Canada & Australia. Linux and Windows VPS with NVMe SSD, instant setup, 24/7 support, and enterprise-grade DDoS protection." />
        <meta name="twitter:image" content="https://vynex.pk/og-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <style jsx global>{`
        /* ---------- Global ---------- */
        .hp-section {
          padding: 80px 32px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .hp-eyebrow {
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
        .hp-heading {
          font-family: "Inter", sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f172a;
        }
        .hp-sub {
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
        .hp-hero-content .hp-eyebrow {
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
        .hp-btn-primary {
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
        .hp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(109, 40, 217, 0.4);
        }
        .hp-btn-secondary {
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
        .hp-btn-secondary:hover {
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

        /* ---------- Smooth Second Section ---------- */
        .hp-why-section {
          background: #ffffff;
          padding: 64px 32px;
          border-bottom: 1px solid #f0ebf8;
        }
        .hp-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .hp-why-card {
          text-align: center;
          padding: 28px 20px;
          border-radius: 16px;
          background: #faf8ff;
          border: 1px solid #f0ebf8;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hp-why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(109, 40, 217, 0.08);
          border-color: #ded1fb;
        }
        .hp-why-card .icon-wrap {
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
        .hp-why-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .hp-why-card p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        /* ---------- Location tabs ---------- */
        .hp-tabs-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px;
        }
        .hp-tabs-head h2 {
          font-size: 32px;
          margin: 14px 0 10px;
        }
        .hp-tabs-bar {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }
        .hp-tab-btn {
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
        .hp-tab-btn img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }
        .hp-tab-btn:hover {
          border-color: #ded1fb;
          color: #6d28d9;
        }
        .hp-tab-btn.active {
          background: #6d28d9;
          border-color: #6d28d9;
          color: #fff;
          box-shadow: 0 8px 20px rgba(109, 40, 217, 0.25);
        }
        .hp-tab-tagline {
          text-align: center;
          font-size: 13px;
          color: #94a3b8;
          margin: -28px 0 36px;
        }
        .hp-plan-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .hp-plan-card {
          border: 1px solid #f0ebf8;
          border-radius: 16px;
          padding: 24px 20px;
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .hp-plan-card:hover {
          border-color: #ded1fb;
          transform: translateY(-3px);
        }
        .hp-plan-card.pro {
          border-color: #6d28d9;
          background: linear-gradient(180deg, #faf6ff 0%, #ffffff 40%);
          position: relative;
        }
        .hp-plan-badge {
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
        .hp-plan-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .hp-plan-header img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .hp-plan-name {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
        }
        .hp-plan-specs {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px dashed #ede7fb;
        }
        .hp-plan-specs span {
          font-size: 13px;
          color: #475569;
          font-weight: 600;
        }
        .hp-plan-features {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .hp-plan-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #64748b;
          font-weight: 500;
        }
        .hp-plan-features li svg {
          color: #6d28d9;
          min-width: 15px;
        }
        .hp-plan-price {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .hp-plan-price sup {
          font-size: 12px;
          font-weight: 700;
          color: #94a3b8;
          margin-right: 2px;
        }
        .hp-plan-price-sub {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 14px;
        }
        .hp-plan-cta {
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
        .hp-plan-cta:hover {
          background: #6d28d9;
          color: #fff;
        }
        .hp-plan-card.pro .hp-plan-cta {
          background: #6d28d9;
          color: #fff;
        }
        .hp-plan-card.pro .hp-plan-cta:hover {
          background: #5b21b6;
        }

        /* ---------- OS Section ---------- */
        .hp-os-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .hp-os-head {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .hp-os-head h2 {
          font-size: 30px;
          margin: 14px 0 10px;
        }
        .hp-os-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .hp-os-item {
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
        .hp-os-item:hover {
          border-color: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);
        }
        .hp-os-item img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        .hp-os-item .os-info {
          display: flex;
          flex-direction: column;
        }
        .hp-os-item .os-label {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }
        .hp-os-item .os-short {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
        }

        /* ---------- Hosting plan cards ---------- */
        .hp-hosting-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .hp-hosting-card {
          position: relative;
          border: 1px solid #f0ebf8;
          border-radius: 16px;
          padding: 24px 20px;
          background: #fff;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .hp-hosting-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(109, 40, 217, 0.1);
        }
        .hp-hosting-card.rec {
          border-color: #6d28d9;
        }
        .hp-hosting-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .hp-hosting-icon img {
          width: 26px;
          height: 26px;
          object-fit: contain;
        }
        .hp-hosting-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .hp-hosting-price {
          font-size: 12px;
          font-weight: 700;
          color: #6d28d9;
          margin-bottom: 10px;
        }
        .hp-hosting-price span {
          color: #94a3b8;
          font-weight: 600;
        }
        .hp-hosting-card p {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }
        .hp-hosting-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          color: #6d28d9;
        }

        /* ---------- Apps grid ---------- */
        .hp-apps-section {
          background: #faf8ff;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .hp-apps-head {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .hp-apps-head h2 {
          font-size: 30px;
          margin: 14px 0 12px;
        }
        .hp-apps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }
        .hp-app-item {
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
        .hp-app-item:hover {
          border-color: #6d28d9;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(109, 40, 217, 0.1);
        }
        .hp-app-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8f5ff;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .hp-app-icon img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }
        .hp-app-item span {
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
        }

        /* ---------- Final CTA ---------- */
        .hp-final-cta {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
        }
        .hp-final-card {
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
        .hp-final-card::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          top: -180px;
          right: -120px;
        }
        .hp-final-card h2 {
          color: #fff;
          font-size: 26px;
          margin: 0 0 6px;
          max-width: 480px;
          position: relative;
        }
        .hp-final-card p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 14px;
          margin: 0;
          max-width: 460px;
          position: relative;
        }
        .hp-final-btn {
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
        .hp-final-btn:hover {
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
          .hp-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hp-plan-grid,
          .hp-hosting-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hp-apps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .hp-os-grid {
            grid-template-columns: repeat(2, 1fr);
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
          .hp-section {
            padding: 48px 20px;
          }
          .hp-why-grid {
            grid-template-columns: 1fr;
          }
          .hp-plan-grid,
          .hp-hosting-grid {
            grid-template-columns: 1fr;
          }
          .hp-apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hp-os-grid {
            grid-template-columns: 1fr 1fr;
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
          .hp-final-card {
            padding: 32px 20px;
          }
          .hp-hero-content h1 {
            font-size: 28px;
          }
          .hp-hero-content p {
            font-size: 14px;
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
              <span className="hp-eyebrow" aria-hidden="true">
                <Zap size={13} /> Enterprise Cloud Infrastructure
              </span>
              <h1 id="hero-heading" className="hp-heading">
                Blazing-Fast, Secure &amp; Budget-Friendly{" "}
                <span>Cloud VPS Hosting</span> in Pakistan
              </h1>
              <p>
                Deploy on Linux or Windows VPS in Pakistan, USA, UK, UAE &amp; 
                Singapore  spun up in minutes, backed by our team around the clock.
              </p>
              <div className="hp-hero-ctas">
                <a
                  href="https://my.vynex.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-btn-primary"
                  aria-label="Get started with Vynex VPS hosting"
                >
                  <Rocket size={16} aria-hidden="true" />
                  Get Started
                </a>
                <Link href="#pricing" className="hp-btn-secondary">
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
                    <span className="label">VYNEX-01</span>
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

        {/* ================= SMOOTH SECOND SECTION ================= */}
        <section className="hp-why-section" aria-labelledby="why-heading">
          <h2 id="why-heading" className="sr-only">Why Choose Vynex</h2>
          <div className="hp-why-grid">
            <div className="hp-why-card">
              <div className="icon-wrap" aria-hidden="true"><Server size={24} /></div>
              <h3>Enterprise Hardware</h3>
              <p>Powerful servers built on enterprise-grade infrastructure with NVMe SSD storage.</p>
            </div>
            <div className="hp-why-card">
              <div className="icon-wrap" aria-hidden="true"><Globe size={24} /></div>
              <h3>Global Locations</h3>
              <p>Servers in Pakistan, USA, UK, Canada, Singapore, Germany &amp; UAE.</p>
            </div>
            <div className="hp-why-card">
              <div className="icon-wrap" aria-hidden="true"><ShieldCheck size={24} /></div>
              <h3>Advanced Security</h3>
              <p>Enterprise-grade DDoS protection with full root access and dedicated IP.</p>
            </div>
            <div className="hp-why-card">
              <div className="icon-wrap" aria-hidden="true"><HeadphonesIcon size={24} /></div>
              <h3>24/7 Expert Support</h3>
              <p>Pakistan-based technical support team available around the clock.</p>
            </div>
          </div>
        </section>

        {/* ================= LOCATION TABS + PLANS ================= */}
        <section className="hp-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="hp-tabs-head">
            <span className="hp-eyebrow" aria-hidden="true">Pick your region</span>
            <h2 id="pricing-heading" className="hp-heading">Affordable VPS Pricing by Location</h2>
            <p className="hp-sub">
              The same reliable Vynex infrastructure, deployed in the
              datacenter closest to your users.
            </p>
          </div>

          <div className="hp-tabs-bar" role="tablist" aria-label="Select VPS location">
            {LOCATION_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-label={`${tab.label} VPS hosting plans`}
                className={`hp-tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <img src={tab.icon} alt="" aria-hidden="true" />
                {tab.label} VPS
              </button>
            ))}
          </div>
          <p className="hp-tab-tagline">{active.tagline}</p>

          <div className="hp-plan-grid">
            {active.plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`hp-plan-card ${i === 2 ? "pro" : ""}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {i === 2 && <span className="hp-plan-badge">Most Popular</span>}
                <div className="hp-plan-header">
                  {plan.icon && (
                    <Image src={plan.icon} alt="" width={24} height={24} />
                  )}
                  <div className="hp-plan-name" itemProp="name">{plan.name}</div>
                </div>
                <div className="hp-plan-specs">
                  <span>{plan.ram} RAM</span>
                  <span>{plan.cpu} Cores</span>
                  <span>{plan.storage} Storage</span>
                </div>
                <ul className="hp-plan-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={15} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="hp-plan-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <sup>PKR</sup>
                  <span itemProp="price">{plan.price.toLocaleString()}</span>
                  <meta itemProp="priceCurrency" content="PKR" />
                </div>
                <div className="hp-plan-price-sub">Billed Monthly</div>
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-plan-cta"
                  aria-label={`Order ${plan.name} for ${plan.price} PKR`}
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OS SECTION ================= */}
        <section className="hp-os-section" id="os" aria-labelledby="os-heading">
          <div className="hp-os-head">
            <span className="hp-eyebrow" aria-hidden="true">Operating Systems</span>
            <h2 id="os-heading" className="hp-heading">Available Operating Systems &amp; Control Panels</h2>
            <p className="hp-sub">
              Multiple OS &amp; Control Panel Options for VPS Hosting.
            </p>
          </div>
          <div className="hp-os-grid">
            {OS_OPTIONS.map((os) => (
              <Link key={os.label} href={os.href} className="hp-os-item">
                <Image src={os.icon} alt="" width={32} height={32} />
                <div className="os-info">
                  <span className="os-label">{os.label}</span>
                  <span className="os-short">{os.short}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= HOSTING CATEGORY CARDS ================= */}
        <section className="hp-section" aria-labelledby="hosting-heading">
          <div className="hp-tabs-head">
            <span className="hp-eyebrow" aria-hidden="true">All hosting products</span>
            <h2 id="hosting-heading" className="hp-heading">Every Way to Host, Under One Roof</h2>
            <p className="hp-sub">
              From lightweight Linux boxes to full dedicated hardware and
              business email — Vynex covers the whole stack.
            </p>
          </div>
          <div className="hp-hosting-grid">
            {HOSTING_PLANS.map((h) => (
              <Link
                key={h.name}
                href={h.href}
                className={`hp-hosting-card ${h.recommended ? "rec" : ""}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {h.recommended && (
                  <span className="hp-plan-badge">Recommended</span>
                )}
                <div className="hp-hosting-icon">
                  <Image src={h.icon} alt="" width={26} height={26} />
                </div>
                <h3 itemProp="name">{h.name}</h3>
                <div className="hp-hosting-price">
                  Starting From <span>{h.price} PKR /mo</span>
                </div>
                <p itemProp="description">{h.desc}</p>
                <span className="hp-hosting-cta">
                  View Plans <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= PRE-INSTALLED APPS ================= */}
        <section className="hp-apps-section" aria-labelledby="apps-heading">
          <div className="hp-section">
            <div className="hp-apps-head">
              <span className="hp-eyebrow" aria-hidden="true">Pre-installed & ready</span>
              <h2 id="apps-heading" className="hp-heading">
                VPS Hosting in Pakistan with Pre-Installed OS &amp; Apps
              </h2>
              <p className="hp-sub">
                Run n8n, MetaTrader, your CRM, web apps, Odoo ERP, Java
                services, social media tools, and full eCommerce stacks on
                secure, pre-installed Linux &amp; Windows VPS from Vynex.
              </p>
            </div>
            <div className="hp-apps-grid">
              {APP_HOSTING.map((app) => (
                <Link key={app.label} href={app.href} className="hp-app-item">
                  <div className="hp-app-icon">
                    <Image src={app.icon} alt="" width={22} height={22} />
                  </div>
                  <span>{app.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="hp-final-cta" aria-labelledby="cta-heading">
          <div className="hp-final-card">
            <div>
              <h2 id="cta-heading">Ready to deploy your Vynex VPS?</h2>
              <p>
                Spin up a server in minutes, pick your location, and get
                24/7 Pakistan-based support from day one.
              </p>
            </div>
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-final-btn"
              aria-label="Launch your VPS now"
            >
              Launch My VPS <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}