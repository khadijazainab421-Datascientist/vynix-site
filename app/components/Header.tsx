"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

interface DropdownItem {
  icon: string;
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Location",
    dropdown: [
      {
        icon: "/usa-vps.svg",
        label: "USA VPS",
        href: "/vps/usa",
      },
      {
        icon: "/uk-vps.svg",
        label: "UK VPS",
        href: "/vps/uk",
      },
      {
        icon: "/pakistan-vps.svg",
        label: "Pakistan VPS",
        href: "/vps/pakistan",
      },
      {
        icon: "/australia-vps.svg",
        label: "Australia VPS",
        href: "/vps/australia",
      },
      {
        icon: "/canada-vps.svg",
        label: "Canada VPS",
        href: "/vps/canada",
      },
      {
        icon: "/dubai-vps.svg",
        label: "Dubai VPS",
        href: "/vps/dubai",
      },
      {
        icon: "/germany-vps.svg",
        label: "Germany VPS",
        href: "/vps/germany",
      },
      {
        icon: "/singapore-vps.svg",
        label: "Singapore VPS",
        href: "/vps/singapore",
      },
    ],
  },
  {
    label: "VPS / VDS",
    dropdown: [
      {
        icon: "/windows-server.svg",
        label: "Windows Hosting",
        href: "/vps/windows",
      },
      {
        icon: "/linux-server.svg",
        label: "Linux Hosting",
        href: "/vps/linux",
      },
      {
        icon: "/cpanel-server.svg",
        label: "cPanel VPS",
        href: "/vps/cpanel",
      },
      {
        icon: "/nvidia-gpu-pakistan.png",
        label: "GPU VPS",
        href: "/vps/gpu",
      },
    ],
  },
  {
    label: "RDP Server",
    dropdown: [
      {
        icon: "/windows-10-vps.svg",
        label: "Windows 10 RDP",
        href: "/rdp/windows-10",
      },
      {
        icon: "/windows-server.svg",
        label: "Windows Server RDP",
        href: "/rdp/windows-server",
      },
      {
        icon: "/usa-vps.svg",
        label: "USA RDP",
        href: "/rdp/usa",
      },
      {
        icon: "/uk-vps.svg",
        label: "UK RDP",
        href: "/rdp/uk",
      },
      {
        icon: "/pakistan-vps.svg",
        label: "Pakistan RDP",
        href: "/rdp/pakistan",
      },
      {
        icon: "/australia-vps.svg",
        label: "Australia RDP",
        href: "/rdp/australia",
      },
      {
        icon: "/canada-vps.svg",
        label: "Canada RDP",
        href: "/rdp/canada",
      },
      {
        icon: "/dubai-vps.svg",
        label: "Dubai RDP",
        href: "/rdp/dubai",
      },
      {
        icon: "/germany-vps.svg",
        label: "Germany RDP",
        href: "/rdp/germany",
      },
      {
        icon: "/singapore-vps.svg",
        label: "Singapore RDP",
        href: "/rdp/singapore",
      },
    ],
  },
  {
    label: "Apps",
    dropdown: [
      {
        icon: "/node-js-vps.png",
        label: "Node.js",
        href: "/apps/nodejs",
      },
      {
        icon: "/container-vps.png",
        label: "Docker",
        href: "/apps/docker",
      },
      {
        icon: "/ubuntu.svg",
        label: "Ubuntu",
        href: "/apps/ubuntu",
      },
      {
        icon: "/debian.svg",
        label: "Debian",
        href: "/apps/debian",
      },
      {
        icon: "/almalinux.svg",
        label: "AlmaLinux",
        href: "/apps/almalinux",
      },
      {
        icon: "/database-vps.png",
        label: "Database Hosting",
        href: "/apps/database",
      },
      {
        icon: "/moodle-vps.svg",
        label: "Moodle",
        href: "/apps/moodle",
      },
      {
        icon: "/odoo-vps.png",
        label: "Odoo",
        href: "/apps/odoo",
      },
      {
        icon: "/crm-vps.png",
        label: "CRM",
        href: "/apps/crm",
      },
      {
        icon: "/n8n-vps.png",
        label: "n8n",
        href: "/apps/n8n",
      },
      {
        icon: "/ecommerce-vps.png",
        label: "Ecommerce",
        href: "/apps/ecommerce",
      },
      {
        icon: "/tiktok-vps.png",
        label: "TikTok",
        href: "/apps/tiktok",
      },
      {
        icon: "/botting-vps.png",
        label: "Botting",
        href: "/apps/botting",
      },
      {
        icon: "/forex-vps.png",
        label: "Forex",
        href: "/apps/forex",
      },
      {
        icon: "/streaming-vps.svg",
        label: "Streaming",
        href: "/apps/streaming",
      },
      {
        icon: "/big-blue-button-vps.png",
        label: "BigBlueButton",
        href: "/apps/bigbluebutton",
      },
    ],
  },
  {
    label: "Email & Hosting",
    dropdown: [
      {
        icon: "/mail-hosting-pakistan.png",
        label: "Business Email",
        href: "/email/business",
      },
      {
        icon: "/google-mail.png",
        label: "Google Workspace",
        href: "/email/google-workspace",
      },
      {
        icon: "/office365-pakistan.png",
        label: "Microsoft 365",
        href: "/email/microsoft-365",
      },
      {
        icon: "/cpanel-server.svg",
        label: "cPanel Hosting",
        href: "/hosting/cpanel",
      },
      {
        icon: "/cloud-panel-vps.svg",
        label: "Cloud Panel",
        href: "/hosting/cloud-panel",
      },
      {
        icon: "/cheap-ssl-pakistan.png",
        label: "SSL Certificates",
        href: "/ssl",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
      setMobileExpanded(null);
    }
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .header-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .header-inner {
          background: #ffffff;
          border-bottom: 1px solid #f0ebf8;
          box-shadow: 0 1px 0 rgba(109, 40, 217, 0.04);
        }
        
        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
        }
        
        .nav-item-wrapper {
          position: relative;
          padding: 6px 0;
        }
        
        .nav-button {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 7px 14px;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.15s ease;
          white-space: nowrap;
        }
        
        .nav-button:hover,
        .nav-button.active {
          color: #6d28d9;
          background: #f8f5ff;
        }
        
        .nav-button .chevron {
          transition: transform 0.2s ease;
          color: #9ca3af;
          flex-shrink: 0;
        }
        
        .nav-button:hover .chevron,
        .nav-button.active .chevron {
          transform: rotate(180deg);
          color: #6d28d9;
        }
        
        .nav-link {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s ease;
          white-space: nowrap;
        }
        
        .nav-link:hover {
          color: #6d28d9;
          background: #f8f5ff;
        }
        
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 200px;
          max-width: 280px;
          background: #ffffff;
          border: 1px solid #f0ebf8;
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 12px 40px rgba(109, 40, 217, 0.08);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        
        .dropdown-panel.open {
          opacity: 1;
          pointer-events: auto;
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          color: #1e293b;
          transition: background 0.15s ease;
          border: 1px solid transparent;
        }
        
        .dropdown-item:hover {
          background: #f8f5ff;
          border-color: #f0ebf8;
        }
        
        .dropdown-icon {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f5ff;
          padding: 4px;
        }
        
        .dropdown-icon img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
        
        .dropdown-label {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .mobile-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          min-width: 40px;
          border: 1px solid #f0ebf8;
          border-radius: 8px;
          background: #ffffff;
          cursor: pointer;
          color: #6d28d9;
          transition: background 0.15s ease;
        }
        
        .mobile-menu-btn:hover {
          background: #f8f5ff;
        }
        
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 10, 30, 0.3);
          z-index: 999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(340px, 100vw);
          background: #ffffff;
          z-index: 1000;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          box-shadow: -8px 0 32px rgba(109, 40, 217, 0.06);
        }
        
        .mobile-drawer.open {
          transform: translateX(0);
        }
        
        .mobile-header {
          padding: 16px 20px;
          border-bottom: 1px solid #f0ebf8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .mobile-close {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border: none;
          border-radius: 8px;
          background: #f8f5ff;
          cursor: pointer;
          color: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-nav {
          padding: 12px 16px 20px;
        }
        
        .mobile-nav-item {
          border-bottom: 1px solid #f5f3ff;
        }
        
        .mobile-nav-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 10px;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.15s ease;
        }
        
        .mobile-nav-button:hover {
          background: #f8f5ff;
        }
        
        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 14px 10px;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          border-radius: 8px;
          transition: background 0.15s ease;
        }
        
        .mobile-nav-link:hover {
          background: #f8f5ff;
        }
        
        .mobile-dropdown {
          padding-left: 32px;
          border-left: 2px solid #f0ebf8;
          margin-left: 10px;
          margin-bottom: 6px;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: all 0.25s ease;
        }
        
        .mobile-dropdown.open {
          max-height: 600px;
          opacity: 1;
        }
        
        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          text-decoration: none;
          border-radius: 8px;
          color: #4b5563;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.15s ease;
        }
        
        .mobile-dropdown-item:hover {
          background: #f8f5ff;
          color: #6d28d9;
        }
        
        .mobile-dropdown-item .icon-wrap {
          width: 28px;
          height: 28px;
          min-width: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-dropdown-item .icon-wrap img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }
        
        .mobile-dropdown-item .item-label {
          font-weight: 500;
        }
        
        .mobile-cta {
          padding: 0 16px 24px;
        }
        
        .mobile-cta .signin-btn {
          display: block;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #f0ebf8;
          font-size: 13px;
          font-weight: 600;
          color: #6d28d9;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        
        .mobile-cta .signin-btn:hover {
          background: #f8f5ff;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        
        .logo-icon {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border-radius: 10px;
          background: #6d28d9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 18px;
          font-weight: 900;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        
        .logo-name {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.3px;
          color: #0f172a;
        }
        
        .logo-sub {
          font-size: 7px;
          font-weight: 600;
          color: #6d28d9;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-top: -1px;
        }
        
        .desktop-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        
        .signin-btn {
          padding: 7px 18px;
          border-radius: 8px;
          border: 1px solid #f0ebf8;
          font-size: 13px;
          font-weight: 600;
          color: #6d28d9;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s ease;
          background: transparent;
        }
        
        .signin-btn:hover {
          background: #f8f5ff;
        }
        
        @media (max-width: 1024px) {
          .nav-desktop {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .header-container {
            padding: 0 20px;
          }
        }
        
        @media (min-width: 1025px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .header-container {
            padding: 0 16px;
            height: 60px;
          }
          .logo-name {
            font-size: 17px;
          }
          .logo-icon {
            width: 32px;
            height: 32px;
            min-width: 32px;
            font-size: 16px;
          }
          .logo-sub {
            font-size: 6px;
          }
        }
      `}</style>

      <header className="header-fixed">
        <div className="header-inner">
          <div className="header-container">
            {/* Logo */}
            <Link href="/" className="logo" onClick={closeAll}>
              <div className="logo-icon">V</div>
              <div className="logo-text">
                <span className="logo-name">Vynex</span>
                <span className="logo-sub">Hosting Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="nav-item-wrapper"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
                >
                  {item.href && !item.dropdown ? (
                    <Link href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className={`nav-button ${activeDropdown === item.label ? "active" : ""}`}
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        {item.dropdown && <ChevronDown size={14} className="chevron" />}
                      </button>

                      {item.dropdown && (
                        <div className={`dropdown-panel ${activeDropdown === item.label ? "open" : ""}`}>
                          {item.dropdown.map((sub) => (
                            <Link key={sub.href} href={sub.href} className="dropdown-item" onClick={closeAll}>
                              <div className="dropdown-icon">
                                <Image src={sub.icon} alt={sub.label} width={20} height={20} />
                              </div>
                              <div className="dropdown-label">{sub.label}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA - Only Sign In */}
            <div className="desktop-cta">
              <a
                href="https://my.vynex.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="signin-btn"
              >
                Sign In
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu} />

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-header">
            <Link href="/" className="logo" onClick={closeAll}>
              <div className="logo-icon">V</div>
              <div className="logo-text">
                <span className="logo-name">Vynex</span>
                <span className="logo-sub">Hosting Solutions</span>
              </div>
            </Link>
            <button className="mobile-close" onClick={toggleMobileMenu}>
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="mobile-nav-item">
                {item.href && !item.dropdown ? (
                  <Link href={item.href} className="mobile-nav-link" onClick={closeAll}>
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="mobile-nav-button"
                      onClick={() => toggleMobileExpanded(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        style={{
                          color: "#6d28d9",
                          transition: "transform 0.2s ease",
                          transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0)",
                        }}
                      />
                    </button>

                    {item.dropdown && (
                      <div className={`mobile-dropdown ${mobileExpanded === item.label ? "open" : ""}`}>
                        {item.dropdown.map((sub) => (
                          <Link key={sub.href} href={sub.href} className="mobile-dropdown-item" onClick={closeAll}>
                            <div className="icon-wrap">
                              <Image src={sub.icon} alt={sub.label} width={18} height={18} />
                            </div>
                            <div className="item-label">{sub.label}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="mobile-cta">
            <a
              href="https://my.vynex.pk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="signin-btn"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
    </>
  );
}