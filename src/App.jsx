import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'work':
        return <Work />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="site-wrapper">
      {/* Vibrant Multi-Color Aurora Background */}
      <div className="ambient-background">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
        <div className="aurora-blob blob-4"></div>
        <div className="aurora-blob blob-5"></div>
      </div>
      <div className="bg-subtle-pattern"></div>

      {/* Floating Modern Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Primary Page Router with React Motion Transitions */}
      <main style={{ minHeight: 'calc(100vh - 120px)', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Clean Luminous Footer */}
      <footer style={styles.footer}>
        <div className="container" style={styles.footerContainer}>
          <div style={styles.leftCol}>
            <span style={styles.brandTitle}>Harshit Bhargava</span>
            <span style={styles.brandSubtitle}>
              IoT Developer & Data Analytics Engineer · LPU
            </span>
          </div>

          <div style={styles.centerCol}>
            <span style={styles.copyright}>
              Designed & Built with care © {new Date().getFullYear()}
            </span>
          </div>

          <div style={styles.rightCol}>
            <a
              href="https://github.com/harshit-aiot"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/harshitbh7/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:harshitbhargava439@gmail.com"
              style={styles.socialLink}
              title="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid rgba(255, 255, 255, 0.7)',
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(16px)',
    padding: '2.5rem 0',
    color: '#64748b',
    fontSize: '0.85rem',
    marginTop: '5rem',
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.02)',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  brandTitle: {
    fontWeight: '700',
    color: '#0f172a',
    fontSize: '0.98rem',
  },
  brandSubtitle: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  centerCol: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.82rem',
    color: '#64748b',
  },
  copyright: {
    letterSpacing: '-0.01em',
  },
  rightCol: {
    display: 'flex',
    gap: '0.75rem',
  },
  socialLink: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#475569',
    transition: 'all 0.2s ease',
  },
};

export default App;
