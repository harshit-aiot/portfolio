import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={styles.headerWrapper}>
      <nav style={styles.navBar}>
        {/* Brand / Logo */}
        <div style={styles.brand} onClick={() => handleNavClick('home')}>
          <div style={styles.avatarBadge}>HB</div>
          <div style={styles.brandTextGroup}>
            <span style={styles.brandName}>Harshit Bhargava</span>
            <span style={styles.brandRole}>IoT & Data Analytics</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div style={styles.desktopLinks}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={activePage === link.id ? styles.linkActive : styles.link}
            >
              {link.label}
              {activePage === link.id && <span style={styles.activeDot}></span>}
            </button>
          ))}
        </div>

        {/* Right CTA / Socials */}
        <div style={styles.rightActions}>
          <a
            href="https://github.com/harshit-aiot"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconButton}
            title="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshitbh7/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconButton}
            title="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            style={styles.contactBtn}
          >
            Let's Talk <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={styles.mobileBurgerBtn}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={styles.mobileDropdown}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={activePage === link.id ? styles.mobileLinkActive : styles.mobileLink}
            >
              {link.label}
            </button>
          ))}
          <div style={styles.mobileSocialRow}>
            <a
              href="https://github.com/harshit-aiot"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mobileSocialLink}
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshitbh7/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mobileSocialLink}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="mailto:harshitbhargava439@gmail.com"
              style={styles.mobileSocialLink}
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const styles = {
  headerWrapper: {
    position: 'fixed',
    top: '1rem',
    left: 0,
    width: '100%',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1.25rem',
    pointerEvents: 'none',
  },
  navBar: {
    pointerEvents: 'auto',
    width: '100%',
    maxWidth: '1100px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    borderRadius: '18px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  avatarBadge: {
    width: '36px',
    height: '36px',
    borderRadius: '11px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.04em',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
  },
  brandTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.25,
  },
  brandName: {
    fontSize: '0.98rem',
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: '-0.01em',
  },
  brandRole: {
    fontSize: '0.73rem',
    color: '#64748b',
    fontWeight: '500',
  },
  desktopLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  link: {
    background: 'transparent',
    border: 'none',
    color: '#475569',
    fontSize: '0.9rem',
    fontWeight: '500',
    padding: '0.5rem 0.95rem',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  linkActive: {
    background: '#ffffff',
    border: '1px solid rgba(79, 70, 229, 0.15)',
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: '600',
    padding: '0.5rem 0.95rem',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    boxShadow: '0 2px 8px rgba(79, 70, 229, 0.12)',
  },
  activeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#4f46e5',
  },
  rightActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  iconButton: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    color: '#475569',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.2s ease',
  },
  contactBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    background: 'linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.55rem 1.15rem',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
    transition: 'all 0.2s ease',
  },
  mobileBurgerBtn: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: '#0f172a',
    cursor: 'pointer',
    padding: '0.25rem',
  },
  mobileDropdown: {
    position: 'absolute',
    top: '75px',
    width: 'calc(100% - 2.5rem)',
    maxWidth: '1100px',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    borderRadius: '18px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    pointerEvents: 'auto',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  mobileLink: {
    background: 'transparent',
    border: 'none',
    color: '#475569',
    fontSize: '1rem',
    fontWeight: '500',
    textAlign: 'left',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  mobileLinkActive: {
    background: 'rgba(79, 70, 229, 0.08)',
    border: 'none',
    color: '#4f46e5',
    fontSize: '1rem',
    fontWeight: '600',
    textAlign: 'left',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  mobileSocialRow: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.75rem',
    paddingTop: '0.75rem',
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
  },
  mobileSocialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.85rem',
    color: '#475569',
    textDecoration: 'none',
  },
};
