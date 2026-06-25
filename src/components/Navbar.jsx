import React, { useState } from 'react';
import { Menu, X, Cpu, Database, Mail, FolderGit, Info } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Cpu },
    { id: 'work', label: 'Projects', icon: FolderGit },
    { id: 'about', label: 'Biography', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navbar Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer} onClick={() => handleNavClick('home')}>
          <div style={styles.logoCircle}>
            <Cpu size={18} style={styles.logoIcon} />
          </div>
          <span style={styles.logoText}>HARSHIT</span>
          <span style={styles.logoDot}></span>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={styles.menuButton}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} style={styles.burgerIcon} />
          ) : (
            <div style={styles.customBurger}>
              <div style={styles.burgerLine}></div>
              <div style={{...styles.burgerLine, width: '16px', alignSelf: 'flex-end'}}></div>
            </div>
          )}
        </button>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <div className={`nav-overlay ${isOpen ? 'open' : ''}`}>
        {/* Decorative Grid inside overlay */}
        <div className="iot-grid-bg" style={{ opacity: 0.05 }}></div>
        
        <div style={styles.overlayContent}>
          <div className="nav-overlay-links">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`nav-overlay-link ${activePage === item.id ? 'active' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  <span style={styles.itemNumber}>0{index + 1}.</span>
                  <span>{item.label}</span>
                  {activePage === item.id && <span style={styles.activeIndicator}></span>}
                </a>
              );
            })}
          </div>

          {/* Bottom Overlay Info */}
          <div style={styles.overlayFooter}>
            <div style={styles.footerItem}>
              <span className="telemetry-text">Current Status</span>
              <div style={styles.statusRow}>
                <span className="blink-dot"></span>
                <span style={styles.footerVal}>ANALYZING TELEMETRY</span>
              </div>
            </div>
            <div style={styles.footerItem}>
              <span className="telemetry-text">Email Contact</span>
              <a href="mailto:harshit@example.com" style={styles.footerLink}>HARSHIT@IOTDATA.DEV</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 3rem',
    zIndex: 100,
    background: 'linear-gradient(to bottom, rgba(5, 7, 12, 0.8) 0%, transparent 100%)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  logoCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'rgba(0, 242, 254, 0.07)',
    border: '1px solid rgba(0, 242, 254, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    color: '#00f2fe',
  },
  logoText: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: '800',
    fontSize: '1.2rem',
    letterSpacing: '0.15em',
    color: '#fff',
  },
  logoDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#00f2fe',
    boxShadow: '0 0 8px #00f2fe',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    zIndex: 101,
  },
  customBurger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '24px',
  },
  burgerLine: {
    height: '2px',
    width: '100%',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
  },
  burgerIcon: {
    color: '#ff4c4c',
  },
  overlayContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemNumber: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.5rem',
    color: 'rgba(255, 255, 255, 0.15)',
    fontWeight: '400',
  },
  activeIndicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#00f2fe',
    boxShadow: '0 0 10px #00f2fe',
    display: 'inline-block',
  },
  overlayFooter: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '2.5rem',
    marginTop: 'auto',
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  footerVal: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    color: '#05ffa1',
    letterSpacing: '0.05em',
  },
  footerLink: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.1rem',
    color: '#fff',
    letterSpacing: '0.05em',
    width: 'fit-content',
  },
};
