import React, { useState, useEffect } from 'react';
import { Sliders, Zap, X, ChevronUp, ChevronDown } from 'lucide-react';

const THEMES = {
  'cyan-green': {
    name: 'Cyber Cyan',
    color1: '#00f2fe',
    color2: '#05ffa1',
    lineColor: '0, 242, 254',
  },
  'matrix': {
    name: 'Matrix Code',
    color1: '#00ff00',
    color2: '#003a00',
    lineColor: '0, 255, 0',
  },
  'volcano': {
    name: 'Volcano Core',
    color1: '#ff3300',
    color2: '#ffaa00',
    lineColor: '255, 51, 0',
  },
  'cosmic': {
    name: 'Cosmic Neon',
    color1: '#b026ff',
    color2: '#00f2fe',
    lineColor: '176, 38, 255',
  }
};

export default function TelemetryControl() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({
    particleCount: 80,
    speedFactor: 1.0,
    connectionDistance: 120,
    theme: 'cyan-green'
  });

  // Sync initial config from window
  useEffect(() => {
    if (typeof window !== 'undefined' && window.meshConfig) {
      setConfig({
        particleCount: window.meshConfig.particleCount || 80,
        speedFactor: window.meshConfig.speedFactor || 1.0,
        connectionDistance: window.meshConfig.connectionDistance || 120,
        theme: window.meshConfig.theme || 'cyan-green'
      });
    }
  }, []);

  const updateSetting = (key, val) => {
    const updated = { ...config, [key]: val };
    setConfig(updated);

    if (typeof window !== 'undefined' && window.meshConfig) {
      if (key === 'theme') {
        const themeDetails = THEMES[val];
        window.meshConfig.theme = val;
        window.meshConfig.particleColor1 = themeDetails.color1;
        window.meshConfig.particleColor2 = themeDetails.color2;
        window.meshConfig.lineColor = themeDetails.lineColor;
      } else {
        window.meshConfig[key] = val;
      }
    }
  };

  const handleBurst = () => {
    if (typeof window !== 'undefined') {
      // Injects telemetry burst at center of viewport
      const event = new CustomEvent('mesh-telemetry-burst', {
        detail: {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          count: 25
        }
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="telemetry-control-container" style={styles.container}>
      {/* Floating Toggle Pill */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={styles.togglePill} className="glass-card">
          <Sliders size={16} style={{ color: THEMES[config.theme].color1 }} />
          <span style={styles.pillText}>MESH CONTROL</span>
          <ChevronUp size={14} style={{ color: 'var(--text-muted)' }} />
        </button>
      )}

      {/* Expanded Dashboard Panel */}
      {isOpen && (
        <div style={styles.panel} className="telemetry-control-panel glass-card page-fade-in">
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.titleContainer}>
              <span className="telemetry-text" style={{ fontSize: '0.7rem' }}>System Parameter Control</span>
              <div style={styles.titleRow}>
                <Sliders size={16} style={{ color: THEMES[config.theme].color1 }} />
                <h4 style={styles.title}>TELEMETRY TUNER</h4>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              <X size={16} />
            </button>
          </div>

          {/* Sliders */}
          <div style={styles.controlsList}>
            <div style={styles.controlItem}>
              <div style={styles.controlHeader}>
                <span style={styles.label}>Device Density (Count)</span>
                <span style={{ ...styles.value, color: THEMES[config.theme].color1 }}>{config.particleCount}</span>
              </div>
              <input
                type="range"
                min="20"
                max="180"
                value={config.particleCount}
                onChange={(e) => updateSetting('particleCount', parseInt(e.target.value))}
                style={{ ...styles.slider, accentColor: THEMES[config.theme].color1 }}
              />
            </div>

            <div style={styles.controlItem}>
              <div style={styles.controlHeader}>
                <span style={styles.label}>Signal Flow Speed</span>
                <span style={{ ...styles.value, color: THEMES[config.theme].color1 }}>{config.speedFactor.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={config.speedFactor}
                onChange={(e) => updateSetting('speedFactor', parseFloat(e.target.value))}
                style={{ ...styles.slider, accentColor: THEMES[config.theme].color1 }}
              />
            </div>

            <div style={styles.controlItem}>
              <div style={styles.controlHeader}>
                <span style={styles.label}>Link Range (px)</span>
                <span style={{ ...styles.value, color: THEMES[config.theme].color1 }}>{config.connectionDistance}px</span>
              </div>
              <input
                type="range"
                min="60"
                max="240"
                value={config.connectionDistance}
                onChange={(e) => updateSetting('connectionDistance', parseInt(e.target.value))}
                style={{ ...styles.slider, accentColor: THEMES[config.theme].color1 }}
              />
            </div>

            {/* Themes Selection */}
            <div style={styles.controlItem}>
              <span style={styles.label}>Signal Color Theme</span>
              <div style={styles.themeRow}>
                {Object.entries(THEMES).map(([key, themeObj]) => (
                  <button
                    key={key}
                    onClick={() => updateSetting('theme', key)}
                    style={{
                      ...styles.themeBtn,
                      borderColor: config.theme === key ? themeObj.color1 : 'transparent',
                      background: `linear-gradient(135deg, ${themeObj.color1} 0%, ${themeObj.color2} 100%)`
                    }}
                    title={themeObj.name}
                  />
                ))}
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={handleBurst}
              style={{
                ...styles.actionBtn,
                borderColor: THEMES[config.theme].color1,
                boxShadow: `0 0 10px rgba(${THEMES[config.theme].lineColor}, 0.1)`
              }}
            >
              <Zap size={14} style={{ color: THEMES[config.theme].color1 }} />
              <span>Inject Telemetry Burst</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    fontFamily: "'Inter', sans-serif"
  },
  togglePill: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: '0.6rem 1.1rem',
    borderRadius: '30px',
    border: '1px solid rgba(255,255,255,0.08)',
    cursor: 'pointer',
    background: 'rgba(12, 17, 29, 0.75)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  pillText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.05em'
  },
  panel: {
    width: '280px',
    padding: '1.25rem',
    borderRadius: '16px',
    background: 'rgba(12, 17, 29, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    paddingBottom: '0.75rem'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem'
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  title: {
    fontSize: '0.88rem',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '0.02em',
    margin: 0
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-muted)',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'all 0.2s',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,0.05)'
    }
  },
  controlsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  controlItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  },
  controlHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.78rem',
  },
  label: {
    color: 'var(--text-secondary)',
    fontWeight: '500'
  },
  value: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '700'
  },
  slider: {
    width: '100%',
    height: '4px',
    borderRadius: '2px',
    outline: 'none',
    cursor: 'pointer',
    background: 'rgba(255,255,255,0.1)'
  },
  themeRow: {
    display: 'flex',
    gap: '0.65rem',
    marginTop: '0.2rem'
  },
  themeBtn: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  },
  actionBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.65rem',
    borderRadius: '8px',
    border: '1px solid',
    background: 'rgba(255,255,255,0.02)',
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: '600',
    fontFamily: "'JetBrains Mono', monospace",
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '0.25rem',
    '&:hover': {
      background: 'rgba(255,255,255,0.05)'
    }
  }
};
