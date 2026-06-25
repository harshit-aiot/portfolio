import React from 'react';
import { ArrowUpRight, Cpu, Activity, BarChart2 } from 'lucide-react';

export default function Home({ setActivePage }) {
  // Mock data ticker stream
  const rawLogs = [
    "MQTT_PUB: topic='sensors/temp' payload={'val': 24.5, 'unit': 'C'}",
    "SQL_QUERY: SELECT avg(vibration) FROM telemetry GROUP BY machine_id",
    "NODE_OK: id='esp32-agri-01' battery=94% rssi=-67dBm",
    "API_200: GET /v1/telemetry/aggregate duration=18ms",
    "PIPELINE_FLOW: ingested 14,240 rows into BigQuery",
    "ALARM_CLEARED: high_temp machine_id=4"
  ];

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Top telemetry line */}
      <div style={styles.telemetryBar}>
        <span className="blink-dot"></span>
        <span className="telemetry-text">System Status: active</span>
        <span style={styles.divider}>|</span>
        <span className="telemetry-text">Active Nodes: 1,482</span>
        <span style={styles.divider}>|</span>
        <span className="telemetry-text">Ingestion Rate: 4.2K msg/s</span>
      </div>

      {/* Hero Headline */}
      <div style={styles.heroContent}>
        <h1 className="hero-huge-title">
          <div style={{ fontSize: 'clamp(2rem, 6vw, 5.2rem)', whiteSpace: 'nowrap' }}>HARSHIT BHARGAVA</div>
          <div style={{ fontSize: 'clamp(2rem, 7vw, 6.5rem)', color: 'var(--accent-green)' }}>DATA ANALYST</div>
          <div style={{ fontSize: 'clamp(2rem, 7vw, 6.5rem)', color: '#00f2fe' }}>& IOT DEVELOPER</div>
        </h1>

        <p style={styles.subtext}>
          I bridge the gap between physical sensor networks and analytical cloud databases.
          Designing robust MQTT telemetry streams, building resilient data pipelines,
          and building high-performance intelligence dashboards.
        </p>

        <div style={styles.buttonGroup}>
          <button className="btn-primary" onClick={() => setActivePage('work')}>
            Explore Projects <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Endless scrolling data ticker */}
      <div style={styles.tickerContainer}>
        <div style={styles.tickerTrack}>
          {/* Double array to make infinite scroll look seamless */}
          {[...rawLogs, ...rawLogs, ...rawLogs].map((log, index) => (
            <span key={index} style={styles.tickerItem}>
              {log}
            </span>
          ))}
        </div>
      </div>

      {/* Summary Stats Grid */}
      <div style={styles.statsGrid}>
        <div className="glass-card" style={styles.statCard}>
          <div style={styles.statHeader}>
            <Cpu size={20} style={{ color: '#05ffa1' }} />
            <span className="telemetry-text telemetry-green">IoT Nodes deployed</span>
          </div>
          <span className="telemetry-value">48+</span>
          <p style={styles.statDesc}>Microcontrollers, Raspberry Pi gateways & active MQTT publishers.</p>
        </div>

        <div className="glass-card" style={styles.statCard}>
          <div style={styles.statHeader}>
            <BarChart2 size={20} style={{ color: '#00f2fe' }} />
            <span className="telemetry-text">Data Processed</span>
          </div>
          <span className="telemetry-value">8.4M+</span>
          <p style={styles.statDesc}>Cleaned, transformed, and indexed telemetry records.</p>
        </div>

        <div className="glass-card" style={styles.statCard}>
          <div style={styles.statHeader}>
            <Activity size={20} style={{ color: '#00f2fe' }} />
            <span className="telemetry-text">Pipeline Uptime</span>
          </div>
          <span className="telemetry-value">99.98%</span>
          <p style={styles.statDesc}>Resilient Apache Beam & cloud ETL pipelines operating 24/7.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    paddingTop: '130px',
    paddingBottom: '80px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  telemetryBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  divider: {
    color: 'rgba(255, 255, 255, 0.1)',
  },
  heroContent: {
    maxWidth: '900px',
    marginBottom: '3rem',
  },
  subtext: {
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
    color: 'var(--text-secondary)',
    marginTop: '1.5rem',
    marginBottom: '2.5rem',
    maxWidth: '700px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  tickerContainer: {
    width: '100%',
    overflow: 'hidden',
    background: 'rgba(5, 7, 12, 0.4)',
    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
    padding: '0.85rem 0',
    margin: '3rem 0',
  },
  tickerTrack: {
    display: 'flex',
    gap: '4rem',
    whiteSpace: 'nowrap',
    animation: 'marquee 25s linear infinite',
    width: 'max-content',
  },
  tickerItem: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  statDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    marginTop: 'auto',
  },
};

// Insert CSS keyframes for marquee into document dynamically if not present
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.33%); }
    }
  `;
  document.head.appendChild(style);
}
