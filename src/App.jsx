import React, { useState } from 'react';
import Navbar from './components/Navbar';
import IotMeshBackground from './components/IotMeshBackground';
import TelemetryControl from './components/TelemetryControl';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

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
    <>
      {/* Interactive IoT Network Background */}
      <IotMeshBackground />
      
      {/* Floating Telemetry Customizer Control Panel */}
      <TelemetryControl />
      
      {/* Decorative background grid and lighting glow */}
      <div className="iot-grid-bg"></div>
      <div className="iot-radial-glow"></div>

      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Primary Page Content Router */}
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        {renderPage()}
      </main>

      {/* Minimalist Tech Footer */}
      <footer style={styles.footer}>
        <div className="container" style={styles.footerContainer}>
          <span style={styles.copyright}>
            © {new Date().getFullYear()} HARSHIT BHARGAVA. ALL RIGHTS RESERVED.
          </span>
          <div style={styles.telemetryFooter}>
            <span style={styles.footerItem}>
              <span className="blink-dot" style={{ backgroundColor: '#05ffa1', boxShadow: '0 0 6px #05ffa1' }}></span>
              PORT_OPEN: 1883
            </span>
            <span style={styles.footerItem}>LATENCY: 12MS</span>
            <span style={styles.footerItem}>SECURE: TLS_v1.3</span>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
    background: 'rgba(5, 7, 12, 0.7)',
    backdropFilter: 'blur(8px)',
    padding: '1.5rem 0',
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    fontFamily: "'JetBrains Mono', monospace",
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    letterSpacing: '0.05em',
  },
  telemetryFooter: {
    display: 'flex',
    gap: '1.5rem',
  },
  footerItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
  },
};

export default App;
