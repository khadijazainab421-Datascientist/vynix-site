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
  Server,
  ShieldCheck,
  PanelLeft,
  Globe,
  Zap,
  HeadphonesIcon,
  Cpu,
  HardDrive,
  Clock,
  Users,
  Rocket,
  ChevronDown,
  Gauge,
  Award,
  Database,
  LayoutPanelTop,
  Radio,
  MonitorSmartphone,
  Terminal,
  Mail,
  Workflow,
  Boxes,
  Container,
  Gamepad2,
  TrendingUp,
  Bot,
  Share2,
  ShoppingCart,
  GraduationCap,
  Video,
  Building2,
  Network,
  Gpu,
  Sparkles,
  Cpu as CpuIcon,
  Microscope,
  Activity,
  BarChart3,
  Brain,
  Server as ServerIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

interface GpuPlan {
  name: string;
  gpu: string;
  ram: string;
  cpu: string;
  storage: string;
  features: string[];
  icon?: string;
  href: string;
  popular?: boolean;
}

interface LocationTab {
  key: string;
  label: string;
  icon: string;
  tagline: string;
  slug: string;
  plans: GpuPlan[];
}

const GPU_PLANS: GpuPlan[] = [
  {
    name: "Starter GPU VPS",
    gpu: "NVIDIA T4",
    ram: "8 GB",
    cpu: "2 vCPU",
    storage: "20 GB NVMe",
    features: [
      "Dedicated GPU Access",
      "NVIDIA T4 (16GB VRAM)",
      "CUDA Support",
      "24/7 Technical Support",
      "Instant Deployment",
    ],
    href: "/contact",
    icon: "/gpu-server.svg",
  },
  {
    name: "Business GPU VPS",
    gpu: "NVIDIA A100",
    ram: "16 GB",
    cpu: "4 vCPU",
    storage: "50 GB NVMe",
    features: [
      "Dedicated GPU Access",
      "NVIDIA A100 (40GB VRAM)",
      "CUDA & Tensor Core Support",
      "24/7 Technical Support",
      "Instant Deployment",
      "Priority Support",
    ],
    href: "/contact",
    icon: "/gpu-server.svg",
    popular: true,
  },
  {
    name: "Professional GPU VPS",
    gpu: "NVIDIA A100",
    ram: "32 GB",
    cpu: "8 vCPU",
    storage: "100 GB NVMe",
    features: [
      "Dedicated GPU Access",
      "NVIDIA A100 (80GB VRAM)",
      "CUDA & Tensor Core Support",
      "24/7 Technical Support",
      "Instant Deployment",
      "Priority Support",
      "High-Bandwidth Networking",
    ],
    href: "/contact",
    icon: "/gpu-server.svg",
  },
  {
    name: "Enterprise GPU VPS",
    gpu: "NVIDIA H100",
    ram: "64 GB",
    cpu: "16 vCPU",
    storage: "200 GB NVMe",
    features: [
      "Dedicated GPU Access",
      "NVIDIA H100 (80GB VRAM)",
      "CUDA & Tensor Core Support",
      "24/7 Premium Support",
      "Instant Deployment",
      "Premium Support SLA",
      "High-Bandwidth Networking",
      "Dedicated Bandwidth",
    ],
    href: "/contact",
    icon: "/gpu-server.svg",
  },
];

const LOCATION_TABS: LocationTab[] = [
  {
    key: "pakistan",
    label: "Pakistan",
    icon: "/pakistan-vps.svg",
    slug: "pakistan",
    tagline: "High-performance GPU VPS hosting in Pakistan — Islamabad, Karachi & Lahore low-latency nodes",
    plans: GPU_PLANS,
  },
  {
    key: "usa",
    label: "USA",
    icon: "/usa-vps.svg",
    slug: "usa",
    tagline: "AI-optimized GPU VPS in USA — Dallas, New York & Los Angeles datacenters",
    plans: GPU_PLANS,
  },
  {
    key: "uk",
    label: "UK",
    icon: "/uk-vps.svg",
    slug: "uk",
    tagline: "High-performance GPU VPS in UK — London datacenter with fast European routing",
    plans: GPU_PLANS,
  },
  {
    key: "australia",
    label: "Australia",
    icon: "/australia-vps.svg",
    slug: "australia",
    tagline: "Affordable GPU VPS in Australia — Sydney datacenter for APAC-facing workloads",
    plans: GPU_PLANS,
  },
  {
    key: "canada",
    label: "Canada",
    icon: "/canada-vps.svg",
    slug: "canada",
    tagline: "Reliable GPU VPS in Canada — Toronto datacenter with North American reach",
    plans: GPU_PLANS,
  },
  {
    key: "dubai",
    label: "Dubai",
    icon: "/dubai-vps.svg",
    slug: "dubai",
    tagline: "Premium GPU VPS in Dubai — UAE datacenter with Middle East connectivity",
    plans: GPU_PLANS,
  },
  {
    key: "germany",
    label: "Germany",
    icon: "/germany-vps.svg",
    slug: "germany",
    tagline: "High-performance GPU VPS in Germany — Frankfurt datacenter with European routing",
    plans: GPU_PLANS,
  },
  {
    key: "singapore",
    label: "Singapore",
    icon: "/singapore-vps.svg",
    slug: "singapore",
    tagline: "Fast GPU VPS in Singapore — Asia-Pacific datacenter with low latency",
    plans: GPU_PLANS,
  },
];

const FEATURES = [
  {
    icon: Gpu,
    title: "Dedicated NVIDIA GPU",
    description: "Full GPU access with dedicated NVIDIA graphics cards for AI/ML workloads and rendering.",
  },
  {
    icon: ShieldCheck,
    title: "CUDA & Tensor Core Support",
    description: "Full CUDA, cuDNN, and Tensor Core support for deep learning and AI applications.",
  },
  {
    icon: CpuIcon,
    title: "High-Performance CPUs",
    description: "Latest generation Intel or AMD processors paired with your dedicated GPU for maximum throughput.",
  },
  {
    icon: Zap,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe SSD storage for rapid data access and model loading.",
  },
  {
    icon: Network,
    title: "High-Bandwidth Networking",
    description: "Dedicated high-bandwidth networking for large dataset transfers and model training.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Pakistan-based technical support team available around the clock for GPU-related issues.",
  },
];

const GPU_FEATURES = [
  {
    icon: Gpu,
    title: "NVIDIA GPU Access",
    description: "Full dedicated GPU access with NVIDIA graphics cards for AI/ML, rendering, and compute-intensive workloads.",
  },
  {
    icon: CpuIcon,
    title: "High-Performance CPU",
    description: "Latest generation CPUs paired with your GPU for balanced compute performance.",
  },
  {
    icon: Zap,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe SSD storage for improved application speed and performance.",
  },
  {
    icon: HardDrive,
    title: "Dedicated Resources",
    description: "Guaranteed CPU, RAM, storage, and GPU exclusively allocated to your VPS.",
  },
  {
    icon: Clock,
    title: "Instant Deployment",
    description: "Your GPU VPS is provisioned instantly after payment confirmation.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "24/7 technical support via WhatsApp and tickets for GPU-related issues.",
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

const GPU_USE_CASES = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Train and deploy AI models with dedicated GPU acceleration.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Process large datasets with high-performance GPU compute.",
  },
  {
    icon: Video,
    title: "Video Rendering",
    description: "Render 4K/8K videos and 3D animations with GPU acceleration.",
  },
  {
    icon: Microscope,
    title: "Scientific Computing",
    description: "Run complex scientific simulations with GPU acceleration.",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Build and test games with GPU-accelerated development environments.",
  },
  {
    icon: ShoppingCart,
    title: "3D Rendering",
    description: "Render 3D models and animations with dedicated GPU power.",
  },
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

const OS_OPTIONS = [
  { icon: "/ubuntu.svg", label: "Ubuntu 22.04 LTS", short: "Ubuntu", href: "/apps/ubuntu" },
  { icon: "/debian.svg", label: "Debian 12", short: "Debian", href: "/apps/debian" },
  { icon: "/windows-server.svg", label: "Windows Server 2022", short: "Server 2022", href: "/vps/windows" },
  { icon: "/almalinux.svg", label: "AlmaLinux 9", short: "AlmaLinux", href: "/apps/almalinux" },
  { icon: "/cloudlinux.svg", label: "CloudLinux", short: "CloudLinux", href: "/vps/cloudlinux" },
  { icon: "/cpanel-server.svg", label: "cPanel & WHM", short: "cPanel", href: "/vps/cpanel" },
];

const FAQS = [
  {
    q: "What is a GPU VPS?",
    a: "A GPU VPS (Virtual Private Server) includes a dedicated NVIDIA graphics card alongside traditional CPU, RAM, and storage. This enables accelerated computing for AI/ML workloads, video rendering, scientific computing, and other resource-intensive applications.",
  },
  {
    q: "What GPUs are available?",
    a: "We offer NVIDIA T4, A100, and H100 GPUs with varying VRAM capacities depending on your chosen plan.",
  },
  {
    q: "Can I use CUDA on my GPU VPS?",
    a: "Yes, all our GPU VPS plans include full CUDA, cuDNN, and Tensor Core support for deep learning and AI applications.",
  },
  {
    q: "Is GPU VPS good for machine learning?",
    a: "Yes, our GPU VPS plans are optimized for AI/ML workloads. The dedicated GPU provides the computational power needed for model training, inference, and data processing.",
  },
  {
    q: "What operating systems are supported?",
    a: "We support Ubuntu, Debian, AlmaLinux, CloudLinux, Windows Server, and cPanel/WHM. Special GPU-optimized drivers are pre-installed on Linux distributions.",
  },
  {
    q: "Where are your GPU VPS locations?",
    a: "We offer GPU VPS hosting in Pakistan, USA, UK, Germany, Singapore, UAE, Canada, and Australia.",
  },
  {
    q: "Is support available 24/7?",
    a: "Yes, our technical support team is available 24/7 via WhatsApp and ticket system for GPU-related issues.",
  },
  {
    q: "Can I run multiple GPUs on one VPS?",
    a: "For multi-GPU setups, please contact our sales team for custom enterprise solutions.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a 7-day money-back guarantee on all VPS hosting plans.",
  },
  {
    q: "Can I migrate my existing projects to your GPU VPS?",
    a: "Yes, our expert team can help you migrate your AI/ML projects, applications, and data to our GPU VPS platform.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function GPUVPSPage() {
  const [activeTab, setActiveTab] = useState(LOCATION_TABS[0].key);
  const active = LOCATION_TABS.find((t) => t.key === activeTab)!;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "GPU VPS Hosting - Dedicated NVIDIA GPU Virtual Private Server",
    "description": "High-performance GPU VPS hosting with dedicated NVIDIA GPU, CUDA support, NVMe SSD, and 24/7 support. Available in Pakistan, USA, UK, Germany & more.",
    "url": "https://vynex.pk/vps/gpu",
    "mainEntity": {
      "@type": "Product",
      "name": "GPU VPS Hosting",
      "description": "High-performance GPU VPS hosting with dedicated NVIDIA GPU, NVMe SSD, and 24/7 support for AI/ML workloads.",
    },
  };

  return (
    <>
      <Head>
        <title>GPU VPS Hosting - Dedicated NVIDIA GPU Virtual Private Server</title>
        <meta name="description" content="High-performance GPU VPS hosting with dedicated NVIDIA GPU, CUDA support, NVMe SSD, and 24/7 support. Available in Pakistan, USA, UK, Canada, Australia & more." />
        <meta name="keywords" content="GPU VPS, GPU VPS Pakistan, NVIDIA GPU VPS, Dedicated GPU, AI VPS, ML VPS, Machine Learning VPS, Deep Learning VPS, GPU Hosting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Vynex Hosting Solutions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="GPU VPS Hosting - Dedicated NVIDIA GPU Virtual Private Server" />
        <meta property="og:description" content="High-performance GPU VPS hosting with dedicated NVIDIA GPU, CUDA support, NVMe SSD, and 24/7 support. Available in Pakistan, USA, UK, Canada, Australia & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vynex.pk/vps/gpu" />
        <meta property="og:image" content="https://vynex.pk/gpu-vps-og.png" />
        <meta property="og:site_name" content="Vynex Hosting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GPU VPS Hosting - Dedicated NVIDIA GPU Virtual Private Server" />
        <meta name="twitter:description" content="High-performance GPU VPS hosting with dedicated NVIDIA GPU, CUDA support, NVMe SSD, and 24/7 support." />
        <meta name="twitter:image" content="https://vynex.pk/gpu-vps-og.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vynex.pk/vps/gpu" />
        
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
          background: linear-gradient(135deg, #f8f5ff 0%, #ede9fe 50%, #ddd6fe 100%);
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
          background: #7c3aed;
          top: -150px;
          right: -80px;
        }
        .hp-hero-bg .orb-2 {
          width: 350px;
          height: 350px;
          background: #6d28d9;
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

        /* 3D GPU Visual */
        .hp-hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }
        .hp-gpu-3d {
          position: relative;
          width: 280px;
          height: 240px;
          transform-style: preserve-3d;
          transform: rotateY(-15deg) rotateX(5deg);
          transition: transform 0.6s ease;
        }
        .hp-gpu-3d:hover {
          transform: rotateY(-5deg) rotateX(0deg);
        }
        .hp-gpu-body {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, #1a1a2e, #2d2d44);
          border-radius: 20px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 
            0 30px 80px rgba(109, 40, 217, 0.25),
            inset 0 1px 0 rgba(255,255,255,0.08);
          padding: 24px 20px 20px;
          transform: translateZ(20px);
        }
        .hp-gpu-body::before {
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
        .hp-gpu-leds {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
        }
        .hp-gpu-leds .led {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 12px currentColor;
        }
        .hp-gpu-leds .led.purple { background: #8b5cf6; color: #8b5cf6; }
        .hp-gpu-leds .led.blue { background: #3b82f6; color: #3b82f6; }
        .hp-gpu-leds .led.green { background: #22c55e; color: #22c55e; }
        .hp-gpu-leds .label {
          margin-left: auto;
          color: rgba(255,255,255,0.3);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          font-family: monospace;
        }
        .hp-gpu-chip {
          height: 50px;
          background: linear-gradient(145deg, #2d2d44, #1a1a2e);
          border-radius: 8px;
          margin: 6px 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(139, 92, 246, 0.2);
          position: relative;
        }
        .hp-gpu-chip .chip-label {
          color: rgba(255,255,255,0.6);
          font-size: 10px;
          font-weight: 700;
          font-family: monospace;
          letter-spacing: 0.5px;
        }
        .hp-gpu-chip .glow-ring {
          position: absolute;
          inset: -2px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.3));
          filter: blur(4px);
          z-index: -1;
        }
        .hp-gpu-blade {
          height: 7px;
          margin-bottom: 5px;
          border-radius: 4px;
          background: rgba(139, 92, 246, 0.15);
          position: relative;
          overflow: hidden;
        }
        .hp-gpu-blade:nth-child(odd) {
          background: rgba(139, 92, 246, 0.25);
        }
        .hp-gpu-blade .glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: rgba(255,255,255,0.04);
          border-radius: 4px 4px 50% 50%;
        }
        .hp-gpu-blade .activity {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 2px;
          border-radius: 2px;
          background: rgba(139, 92, 246, 0.4);
        }
        .hp-gpu-footer {
          display: flex;
          gap: 14px;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid rgba(139, 92, 246, 0.1);
        }
        .hp-gpu-footer span {
          color: rgba(255,255,255,0.35);
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.5px;
          font-family: monospace;
        }
        .hp-gpu-footer .dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-right: 4px;
          vertical-align: middle;
        }
        .hp-gpu-footer .dot.purple { background: #8b5cf6; }

        .hp-gpu-badge {
          position: absolute;
          background: #fff;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 700;
          color: #6d28d9;
          box-shadow: 0 8px 30px rgba(109, 40, 217, 0.12);
          border: 1px solid #e5e0f5;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          transform: translateZ(40px);
        }
        .hp-gpu-badge.b1 { top: -8px; right: -15px; }
        .hp-gpu-badge.b2 { bottom: 35px; left: -25px; }
        .hp-gpu-badge.b3 { bottom: -8px; right: 15px; }

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
        .plan-specs .gpu-spec {
          color: #6d28d9;
          font-size: 14px;
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
        .plan-cta {
          display: block;
          text-align: center;
          padding: 10px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          background: #6d28d9;
          color: #fff;
          transition: all 0.15s ease;
        }
        .plan-cta:hover {
          background: #5b21b6;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(109, 40, 217, 0.2);
        }
        .plan-card.pro .plan-cta {
          background: #6d28d9;
          color: #fff;
        }
        .plan-card.pro .plan-cta:hover {
          background: #5b21b6;
        }

        /* ---------- GPU Features ---------- */
        .gpu-features-section {
          background: #faf8ff;
          padding: 64px 32px;
          border-top: 1px solid #f0ebf8;
          border-bottom: 1px solid #f0ebf8;
        }
        .gpu-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1280px;
          margin: 40px auto 0;
        }
        .gpu-feature-card {
          background: #fff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.15s ease;
        }
        .gpu-feature-card:hover {
          border-color: #ded1fb;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(109, 40, 217, 0.06);
        }
        .gpu-feature-card .icon {
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
        .gpu-feature-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .gpu-feature-card p {
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
          background: linear-gradient(120deg, #2d2d44 0%, #1a1a2e 100%);
          border-radius: 24px;
          padding: 56px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        .final-card::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.06);
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
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
          color: #fff;
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
          .hp-gpu-3d {
            width: 240px;
            height: 210px;
          }
          .plan-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gpu-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr);
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
          .gpu-features-section {
            padding: 48px 20px;
          }
          .use-cases-section {
            padding: 48px 20px;
          }
          .os-section {
            padding: 48px 20px;
          }
          .locations-section {
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
          .gpu-features-grid {
            grid-template-columns: 1fr;
          }
          .use-cases-grid {
            grid-template-columns: 1fr;
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
          .hp-gpu-3d {
            width: 180px;
            height: 160px;
          }
          .hp-gpu-badge {
            font-size: 8px;
            padding: 3px 8px;
          }
          .hp-gpu-badge.b1 { top: -6px; right: -10px; }
          .hp-gpu-badge.b2 { bottom: 25px; left: -15px; }
          .hp-gpu-badge.b3 { bottom: -6px; right: 8px; }
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
                <Gpu size={13} /> GPU VPS Hosting
              </span>
              <h1 id="hero-heading" className="heading">
                Dedicated NVIDIA GPU VPS for <span>AI &amp; ML Workloads</span>
              </h1>
              <p>
                Deploy a dedicated GPU VPS with NVIDIA graphics cards for AI/ML, 
                data science, video rendering, and compute-intensive applications. 
                Available across Pakistan, USA, UK, Europe, Singapore, and more with 
                NVMe SSD storage and 24/7 expert support.
              </p>
              <div className="hp-hero-ctas">
                <a
                  href="/contact"
                  className="btn-primary"
                  aria-label="Contact us for GPU VPS Hosting"
                >
                  <Sparkles size={16} aria-hidden="true" />
                  Contact Sales
                </a>
                <Link href="#pricing" className="btn-secondary">
                  View Plans <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hp-hero-visual" aria-hidden="true">
              <div className="hp-gpu-3d">
                <div className="hp-gpu-body">
                  <div className="hp-gpu-leds">
                    <span className="led purple" />
                    <span className="led blue" />
                    <span className="led green" />
                    <span className="label">NVIDIA</span>
                  </div>
                  <div className="hp-gpu-chip">
                    <div className="glow-ring" />
                    <span className="chip-label">A100 GPU</span>
                  </div>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="hp-gpu-blade">
                      <div className="glow" />
                      <div className="activity" />
                    </div>
                  ))}
                  <div className="hp-gpu-footer">
                    <span><span className="dot purple" /> CUDA</span>
                    <span><span className="dot purple" /> Tensor</span>
                    <span style={{ marginLeft: 'auto' }}><span className="dot purple" /> 80GB VRAM</span>
                  </div>
                </div>
                <div className="hp-gpu-badge b1">
                  <Zap size={11} /> AI Accelerated
                </div>
                <div className="hp-gpu-badge b2">
                  <ShieldCheck size={11} /> CUDA Support
                </div>
                <div className="hp-gpu-badge b3">
                  <Gpu size={11} /> Dedicated GPU
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
            <h2 id="pricing-heading" className="heading">GPU VPS Plans by Location</h2>
            <p className="sub">
              Dedicated NVIDIA GPU VPS infrastructure deployed in the datacenter closest to your users.
              <br />
              <span className="text-purple-600 font-semibold">Contact us for custom pricing and enterprise setups.</span>
            </p>
          </div>

          <div className="tabs-bar" role="tablist" aria-label="Select GPU VPS location">
            {LOCATION_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-label={`${tab.label} GPU VPS hosting plans`}
                className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <img src={tab.icon} alt="" aria-hidden="true" />
                {tab.label} GPU VPS
              </button>
            ))}
          </div>
          <p className="tab-tagline">{active.tagline}</p>

          <div className="plan-grid">
            {active.plans.map((plan, i) => (
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
                  <span className="gpu-spec">🎮 {plan.gpu}</span>
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
                <a
                  href={plan.href}
                  className="plan-cta"
                  aria-label={`Contact us for ${plan.name}`}
                >
                  Contact for Pricing
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GPU FEATURES ================= */}
        <section className="gpu-features-section" aria-labelledby="gpu-features-heading">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
            <span className="eyebrow" aria-hidden="true">Enterprise GPU Features</span>
            <h2 id="gpu-features-heading" className="heading" style={{ fontSize: '30px', margin: '14px 0 10px' }}>
              All GPU VPS Plans Include
            </h2>
            <p className="sub">
              Enterprise-grade features included with every GPU VPS, designed to deliver
              dedicated GPU acceleration, high-performance compute, and reliable infrastructure.
            </p>
          </div>
          <div className="gpu-features-grid">
            {GPU_FEATURES.map((feature) => (
              <div key={feature.title} className="gpu-feature-card">
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
              Perfect for GPU-Intensive Workloads
            </h2>
            <p className="sub">
              Our dedicated GPU VPS is optimized for a wide range of compute-intensive applications
              and AI/ML workloads.
            </p>
          </div>
          <div className="use-cases-grid">
            {GPU_USE_CASES.map((useCase) => (
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

        {/* ================= OS SECTION ================= */}
        <section className="os-section" id="os" aria-labelledby="os-heading">
          <div className="os-head">
            <span className="eyebrow" aria-hidden="true">Operating Systems</span>
            <h2 id="os-heading" className="heading">Available Operating Systems for GPU VPS</h2>
            <p className="sub">
              Choose your preferred OS with GPU-optimized drivers pre-installed.
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
            <h2 id="locations-heading" className="heading">Vynex's Global GPU VPS Locations</h2>
            <p className="sub">
              Deploy your GPU VPS in the nearest location for maximum speed, uptime, and performance.
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
              <h2 id="cta-heading">Ready to Deploy Your GPU VPS?</h2>
              <p>
                Get started with dedicated NVIDIA GPU VPS hosting today. 
                Perfect for AI/ML, data science, and compute-intensive workloads.
              </p>
            </div>
            <a
              href="/contact"
              className="final-btn"
              aria-label="Contact us for GPU VPS"
            >
              Contact Sales <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
