import React, { useState } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import realEstateImg from '../assets/real_estate.png';
import agriTelemetryImg from '../assets/agri_telemetry.png';
import trafficOptImg from '../assets/traffic_opt.png';
import industrialAnomalyImg from '../assets/industrial_anomaly.png';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dubai Real Estate Intelligence Dashboard",
      subtitle: "DATA ANALYTICS & VISUALIZATION",
      image: realEstateImg,
      tech: ["Python", "SQL", "Streamlit", "Pandas", "EDA", "MySQL"],
      github: "https://github.com/harshit-aiot",
      summary: "Analyzed over 10,000+ real estate records in Dubai to identify pricing trends and investment opportunities. Cleaned and preprocessed raw datasets using Pandas and SQL, and built an interactive Streamlit dashboard.",
      bullets: [
        "Analyzed 10,000+ real estate records to identify price trends, rental yields, and investment hot-spots.",
        "Performed intensive data cleaning, handling nulls, outliers, and schema transformations with Python & SQL.",
        "Built and deployed an interactive Streamlit web dashboard for real-time visualization of market demand.",
        "Enabled end-users to filter listings dynamically by area, price range, property type, and transaction volume."
      ]
    },
    {
      id: 2,
      title: "Smart Irrigation & Environmental Guardian",
      subtitle: "IOT & EMBEDDED SYSTEMS",
      image: agriTelemetryImg,
      tech: ["ESP32", "DHT11", "Soil Moisture Sensor", "Relay", "ThingSpeak", "Embedded C"],
      github: "https://github.com/harshit-aiot",
      summary: "Designed an automated plant monitoring and irrigation system. Collects environmental telemetry (temperature, humidity, moisture) in real time and automates pump operations to optimize water usage by 25%.",
      bullets: [
        "Engineered an ESP32-based multi-sensor array for environmental telemetry acquisition.",
        "Optimized water conservation by 25% by initiating irrigation based on real-time soil moisture thresholds.",
        "Integrated relay-controlled solenoid valves for automated, hands-free watering cycles.",
        "Streamed telemetry streams directly to ThingSpeak IoT cloud platform for remote monitoring and analytics."
      ]
    },
    {
      id: 3,
      title: "Video Game Sales & Market Trends Analysis",
      subtitle: "DATA SCIENCE & FORECASTING",
      image: trafficOptImg,
      tech: ["Python", "SQL", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      github: "https://github.com/harshit-aiot",
      summary: "Conducted exploratory data analysis (EDA) on global video game sales records. Identified top publishers, regional market trends, and genre demand shifts to improve publishing forecasting.",
      bullets: [
        "Performed comprehensive EDA on historical global sales datasets using Jupyter Notebook.",
        "Identified key regional trends (North America vs. Europe vs. Japan sales patterns).",
        "Created polished visualizations using Matplotlib & Seaborn to present market shifts.",
        "Delivered data-backed recommendations for game publishers regarding platform and genre performance."
      ]
    },
    {
      id: 4,
      title: "Gesture Controlled Robotic Prototype",
      subtitle: "ROBOTICS & HARDWARE INTEGRATION",
      image: industrialAnomalyImg,
      tech: ["Arduino Uno", "ADXL345 Accelerometer", "L298N Motor Driver", "Embedded C", "Signal Processing"],
      github: "https://github.com/harshit-aiot",
      summary: "Developed an accelerometer-based wireless navigation robot. Captures human hand gestures and converts raw accelerometer readings into precise motor drive operations.",
      bullets: [
        "Programmed Arduino Uno to sample and filter 3-axis accelerometer input (ADXL345).",
        "Configured precise PWM motor controls through the L298N H-bridge driver.",
        "Designed and soldered electronic hardware prototypes for stable signal transmission.",
        "Implemented real-time sensor calibration to eliminate hand jitter and false actuations."
      ]
    }
  ];

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      <div style={styles.header}>
        <span className="telemetry-text">Portfolio // Showcase</span>
        <h2 style={styles.title}>SELECTED WORK</h2>
        <p style={styles.subtitle}>
          A curated selection of industrial analytics dashboards, embedded microcontroller devices, and automation systems.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="responsive-project-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="glass-card" 
            style={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <div style={styles.imageContainer}>
              <img src={project.image} alt={project.title} style={styles.image} />
              <div style={styles.imageOverlay}>
                <span className="telemetry-text" style={styles.overlayText}>View Details</span>
              </div>
            </div>
            <div style={styles.cardContent}>
              <span className="telemetry-text" style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                {project.subtitle}
              </span>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <div style={styles.techList}>
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} style={styles.techTag}>{t}</span>
                ))}
                {project.tech.length > 3 && <span style={styles.techTag}>+{project.tech.length - 3}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal-content" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            
            <div className="responsive-modal-layout">
              <div style={styles.modalImageColumn}>
                <img src={selectedProject.image} alt={selectedProject.title} style={styles.modalImage} />
              </div>
              <div style={styles.modalInfoColumn}>
                <span className="telemetry-text">{selectedProject.subtitle}</span>
                <h3 style={styles.modalTitle}>{selectedProject.title}</h3>
                
                <p style={styles.modalSummary}>{selectedProject.summary}</p>
                
                <div style={styles.modalSection}>
                  <h4 style={styles.modalSubheading}>Key Achievements</h4>
                  <ul style={styles.bulletsList}>
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} style={styles.bulletItem}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div style={styles.modalSection}>
                  <h4 style={styles.modalSubheading}>Technologies Used</h4>
                  <div style={styles.techList}>
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} style={styles.techTagLarge}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.modalActions}>
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    View on GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageWrapper: {
    paddingTop: '130px',
    paddingBottom: '80px',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
  },
  subtitle: {
    maxWidth: '600px',
    color: 'var(--text-secondary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '2rem',
  },
  card: {
    cursor: 'pointer',
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: '280px',
    overflow: 'hidden',
    position: 'relative',
    borderBottom: '1px solid var(--border-color)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(5, 7, 12, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  cardContent: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  projectTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    lineHeight: '1.2',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    padding: '0.25rem 0.6rem',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '4px',
    color: 'var(--text-secondary)',
  },
  overlayText: {
    border: '1px solid var(--accent-cyan)',
    padding: '0.5rem 1rem',
    background: 'rgba(0, 242, 254, 0.1)',
    borderRadius: '4px',
  },
  
  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(5, 7, 12, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  modalContent: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '1000px',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    padding: '2.5rem',
  },
  closeBtn: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'none',
    color: 'var(--text-primary)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  modalLayout: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '2.5rem',
    marginTop: '1rem',
  },
  modalImageColumn: {
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
    height: 'fit-content',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
  },
  modalInfoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  modalTitle: {
    fontSize: '2rem',
    color: '#fff',
    fontWeight: '800',
  },
  modalSummary: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
  },
  modalSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  modalSubheading: {
    fontSize: '0.9rem',
    fontFamily: "'JetBrains Mono', monospace",
    color: 'var(--accent-cyan)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  bulletsList: {
    paddingLeft: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  bulletItem: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  techTagLarge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    padding: '0.4rem 0.8rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
  },
  modalActions: {
    marginTop: '1rem',
  },
};

// Hover effects injecting
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .glass-card:hover img {
      transform: scale(1.05);
    }
    .glass-card:hover .image-overlay-opacity {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
}
