import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, X, Cpu, BarChart2, Layers, CircuitBoard, Sparkles } from 'lucide-react';

// Real Project Assets directly from Harshit's GitHub Repositories
import churnOverviewImg from '../assets/projects/churn_overview.png';
import churnDriversImg from '../assets/projects/churn_drivers.png';
import churnPredictionImg from '../assets/projects/churn_prediction.png';
import churnSegmentsImg from '../assets/projects/churn_segments.png';
import churnRetentionImg from '../assets/projects/churn_retention.png';

import retailPowerbiImg from '../assets/projects/retail_powerbi.jpg';

import irrigationModelImg from '../assets/projects/irrigation_model.jpg';
import irrigationCircuitImg from '../assets/projects/irrigation_circuit.png';

import gestureRobotImg from '../assets/projects/gesture_robot.webp';
import gestureCircuitImg from '../assets/projects/gesture_circuit.png';

import plantHardwareImg from '../assets/projects/plant_hardware.png';
import plantCircuitImg from '../assets/projects/plant_circuit.png';

import dubaiOverviewImg from '../assets/projects/dubai_overview.png';
import dubaiMetricsImg from '../assets/projects/dubai_metrics.png';
import dubaiDistImg from '../assets/projects/dubai_dist.png';

import resumeDashboardImg from '../assets/projects/resume_dashboard.png';
import resumeAtsImg from '../assets/projects/resume_ats.png';
import resumeMatchingImg from '../assets/projects/resume_matching.png';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);

  const projects = [
    {
      id: 'churn-retention',
      category: 'data',
      categoryLabel: 'Data Analytics & ML',
      badge: 'Flagship ML Platform',
      title: 'Customer Churn & Retention Intelligence',
      subtitle: 'PREDICTIVE ML & BEHAVIORAL CLUSTERING',
      image: churnOverviewImg,
      gallery: [
        { src: churnOverviewImg, label: 'Executive Dashboard' },
        { src: churnDriversImg, label: 'Feature Correlation & Drivers' },
        { src: churnPredictionImg, label: 'ML Probability Prediction' },
        { src: churnSegmentsImg, label: 'K-Means Customer Segments' },
        { src: churnRetentionImg, label: 'Cohort Retention Curves' },
      ],
      tech: ['Python 3.14', 'Scikit-learn', 'Streamlit', 'Pandas', 'Tableau', 'K-Means'],
      github: 'https://github.com/harshit-aiot/customer-churn-retention',
      demoUrl: null,
      summary: 'End-to-end customer analytics and retention system built on 7,043 customer accounts (IBM Telco). Engineered an ML classification pipeline, identified root churn drivers, segmented customers into risk tiers, and built an interactive Streamlit simulation console.',
      bullets: [
        'Analyzed 7,043 accounts with 26.54% churn rate to isolate key indicators: month-to-month contracts, fiber optic tenure, and tech support lack.',
        'Engineered K-Means clustering model identifying 4 distinct customer behavior archetypes and quantifying revenue at risk.',
        'Built leakage-free machine learning models (Logistic Regression & Random Forest) for real-time churn probability scoring.',
        'Developed interactive multi-tab Streamlit dashboard with parameter what-if scenarios and executive KPI trackers.'
      ],
      specs: [
        { label: 'Dataset Size', val: '7,043 rows × 21 features' },
        { label: 'Primary Target', val: 'Churn (Yes / No)' },
        { label: 'Model Stack', val: 'Logistic Regression, Random Forest, K-Means' },
        { label: 'Delivery', val: 'Streamlit Web Console + Tableau Guide' }
      ]
    },
    {
      id: 'retail-intelligence',
      category: 'data',
      categoryLabel: 'Data Analytics & ML',
      badge: '37M+ Transactions',
      title: 'Enterprise Retail Intelligence & Decision Engine',
      subtitle: 'BIG DATA PIPELINE & MARKET BASKET MINING',
      image: retailPowerbiImg,
      gallery: [
        { src: retailPowerbiImg, label: 'Power BI 7-Page Architecture' }
      ],
      tech: ['Python', 'MySQL 8.4', 'Streamlit', 'Power BI', 'Scikit-learn', 'SQL'],
      github: 'https://github.com/harshit-aiot/enterprise-retail-intelligence',
      demoUrl: null,
      summary: 'Full analytics platform processing 37M+ transaction records from Instacart Market Basket Analysis. Includes 47 structured SQL business queries, RFM customer segmentation, basket affinity rules, and an executive Power BI dashboard suite.',
      bullets: [
        'Engineered scalable data pipeline on 37M+ transaction records with schema optimization and MySQL indexing.',
        'Authored 47 comprehensive SQL business queries covering reorder velocity, cross-sell baskets, and customer lifetime trends.',
        'Developed behavioral feature engineering and trained Random Forest reorder classification model.',
        'Built interactive Streamlit decision engine with What-If price & reorder simulations alongside a 7-page Power BI report.'
      ],
      specs: [
        { label: 'Data Scale', val: '37 Million+ Records' },
        { label: 'SQL Scope', val: '47 Production Business Queries' },
        { label: 'Notebooks', val: '9 Exploratory Python Notebooks' },
        { label: 'Dashboards', val: 'Power BI (7 Pages) + Streamlit' }
      ]
    },
    {
      id: 'smart-irrigation',
      category: 'iot',
      categoryLabel: 'IoT & Hardware',
      badge: 'Hardware Prototype',
      title: 'Smart Irrigation & Automated Water Controller',
      subtitle: 'ESP32 SENSORS & CLOSED-LOOP ACTUATION',
      image: irrigationModelImg,
      gallery: [
        { src: irrigationModelImg, label: 'Physical Prototype Model' },
        { src: irrigationCircuitImg, label: 'Circuit Schematic & Pinouts' }
      ],
      tech: ['ESP32', 'Capacitive Soil Sensor', 'Relay 5V', 'ThingSpeak', 'Embedded C++', 'DHT11'],
      github: 'https://github.com/harshit-aiot/smart-irrigation-iot-system',
      demoUrl: null,
      summary: 'Automated closed-loop irrigation system using ESP32 microcontroller, soil moisture sensors, and relay-driven submersible water pump. Reduces water waste by 25% by irrigating strictly based on calibrated soil saturation levels.',
      bullets: [
        'Engineered ESP32 microcontroller firmware with hysteresis thresholding to prevent frequent relay cycling.',
        'Integrated capacitive soil moisture probe and DHT11 ambient sensor to adapt watering to temperature changes.',
        'Achieved 25% measured reduction in unnecessary water usage through precision soil-state triggering.',
        'Streamed sensor telemetry to ThingSpeak IoT cloud over WiFi for remote analytics and moisture monitoring.'
      ],
      specs: [
        { label: 'Microcontroller', val: 'ESP32 DevKit V1 (30 pins)' },
        { label: 'Sensors', val: 'Capacitive Soil Moisture, DHT11 Temp/Hum' },
        { label: 'Actuators', val: '1-Channel 5V Relay + DC Submersible Pump' },
        { label: 'Cloud Protocol', val: 'ThingSpeak REST / HTTP API' }
      ]
    },
    {
      id: 'gesture-robot',
      category: 'iot',
      categoryLabel: 'IoT & Hardware',
      badge: 'Robotics & Hardware',
      title: 'Gesture-Controlled Robotic Vehicle',
      subtitle: 'ACCELEROMETER MOTION MAPPING & MOTOR DYNAMICS',
      image: gestureRobotImg,
      gallery: [
        { src: gestureRobotImg, label: 'Assembled Robotic Vehicle' },
        { src: gestureCircuitImg, label: 'Arduino & ADXL345 Circuit' }
      ],
      tech: ['Arduino Uno', 'ADXL345', 'L298N Motor Driver', 'Embedded C', 'PWM Control'],
      github: 'https://github.com/harshit-aiot/gesture-controlled-robot-arduino',
      demoUrl: null,
      summary: 'Hand-gesture navigated robot translating hand tilt angles into directional motor drive. Uses an ADXL345 3-axis accelerometer, Arduino Uno, and L298N dual H-bridge motor driver with deadband filtering to prevent jitter.',
      bullets: [
        'Interfaced ADXL345 3-axis digital accelerometer via I2C with Arduino Uno R3 for real-time tilt orientation.',
        'Implemented digital low-pass filtering and deadband windowing to cancel out hand tremor noise and inadvertent inputs.',
        'Mapped pitch and roll coordinates to differential PWM speed outputs on L298N dual H-bridge driver.',
        'Hand-soldered wiring harness, constructed dual-motor chassis, and tuned acceleration ramps for smooth movement.'
      ],
      specs: [
        { label: 'Microcontroller', val: 'Arduino Uno R3 (ATmega328P)' },
        { label: 'IMU / Sensor', val: 'ADXL345 3-Axis Digital Accelerometer' },
        { label: 'Motor Driver', val: 'L298N Dual H-Bridge (PWM Speed Regulated)' },
        { label: 'Chassis', val: 'Differential 2WD Geared DC Chassis' }
      ]
    },
    {
      id: 'smart-plant',
      category: 'iot',
      categoryLabel: 'IoT & Hardware',
      badge: 'Micro-Telemetry',
      title: 'Smart Plant Guardian IoT Monitor',
      subtitle: 'ENVIRONMENTAL SENSING & TELEMETRY STREAMING',
      image: plantHardwareImg,
      gallery: [
        { src: plantHardwareImg, label: 'Hardware in Live Operation' },
        { src: plantCircuitImg, label: 'Circuit Diagram & ESP32 Pinout' }
      ],
      tech: ['ESP32', 'DHT11', 'Soil Sensor', 'ThingSpeak', 'C++', 'IoT Cloud'],
      github: 'https://github.com/harshit-aiot/smart-plant-guardian-iot',
      demoUrl: null,
      summary: 'Continuous environmental telemetry monitor for indoor plants. Gathers root-zone soil saturation alongside ambient temperature and humidity, pushing real-time diagnostic charts to IoT cloud dashboards.',
      bullets: [
        'Built ESP32 sensor array sampling ambient moisture, temperature, and soil humidity with non-blocking timers.',
        'Configured auto-recovery WiFi reconnect logic and power-conscious reporting cycles.',
        'Linked hardware stream to ThingSpeak channel for real-time line charts and historical trend tracking.',
        'Established automated alert thresholds for low soil water levels and high ambient temperature warnings.'
      ],
      specs: [
        { label: 'MCU Platform', val: 'ESP32 Wi-Fi / BLE Node' },
        { label: 'Sensor Bus', val: 'Analog ADC + 1-Wire Digital' },
        { label: 'Telemetry Stream', val: 'ThingSpeak Cloud API' },
        { label: 'Power Source', val: 'Regulated 5V USB Supply' }
      ]
    },
    {
      id: 'dubai-real-estate',
      category: 'data',
      categoryLabel: 'Data Analytics & ML',
      badge: '10K+ Listings',
      title: 'Dubai Real Estate Market Intelligence',
      subtitle: 'PROPERTY PRICING EDA & STREAMLIT DASHBOARD',
      image: dubaiOverviewImg,
      gallery: [
        { src: dubaiOverviewImg, label: 'Streamlit Analytics Dashboard' },
        { src: dubaiMetricsImg, label: 'Rental Yield & Price Breakdown' },
        { src: dubaiDistImg, label: 'Property Type & Area Distribution' }
      ],
      tech: ['Python', 'SQL', 'Streamlit', 'Pandas', 'Matplotlib', 'EDA'],
      github: 'https://github.com/harshit-aiot/dubai-real-estate-dashboard',
      demoUrl: null,
      summary: 'Data analytics platform inspecting 10,000+ real estate transactions across major Dubai master communities. Provides property investors with dynamic pricing filters, price/sq.ft metrics, and rental yield forecasting.',
      bullets: [
        'Processed and cleaned 10,000+ raw property records, handling missing coordinates, outliers, and currency units.',
        'Engineered calculated metrics including price per square foot, annual rental yield, and neighborhood growth.',
        'Created interactive Streamlit web dashboard with dynamic area, bedroom, and budget filtering.',
        'Generated visual distributions and correlation charts using Matplotlib and Seaborn for executive presentations.'
      ],
      specs: [
        { label: 'Records Analyzed', val: '10,000+ Transactions' },
        { label: 'Location Scope', val: 'Dubai Marina, Downtown, Palm Jumeirah & More' },
        { label: 'Data Cleaning', val: 'Pandas Outlier Detection, Null Imputation' },
        { label: 'Interface', val: 'Streamlit Multi-filter Web App' }
      ]
    },
    {
      id: 'ai-resume',
      category: 'data',
      categoryLabel: 'Data Analytics & ML',
      badge: 'NLP & Scikit-Learn',
      title: 'AI Resume Analyzer & Interview Coach',
      subtitle: 'ATS SCORING & JOB DESCRIPTION MATCHING',
      image: resumeDashboardImg,
      gallery: [
        { src: resumeDashboardImg, label: 'Analyzer Dashboard' },
        { src: resumeAtsImg, label: 'ATS Score & Skill Radar Chart' },
        { src: resumeMatchingImg, label: 'Job Description Gap Analysis' }
      ],
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'PyPDF2', 'Plotly', 'NLP'],
      github: 'https://github.com/harshit-aiot/AI-Resume-Analyzer',
      demoUrl: null,
      summary: 'Streamlit application utilizing Natural Language Processing (NLP) to parse PDF resumes, calculate ATS compatibility scores, detect skill gaps against job descriptions, and recommend interview preparation questions.',
      bullets: [
        'Extracted and sanitized text from uploaded PDF resumes using PyPDF2 with regex normalization.',
        'Implemented cosine similarity and TF-IDF matching with Scikit-learn to score resume alignment against job descriptions.',
        'Rendered interactive Plotly radar and bar charts for visual skill distribution and gap detection.',
        'Generated personalized ATS enhancement recommendations and domain-specific mock interview questions.'
      ],
      specs: [
        { label: 'Document Parser', val: 'PyPDF2 Text Extraction' },
        { label: 'NLP Engine', val: 'TF-IDF & Cosine Similarity (Scikit-Learn)' },
        { label: 'Visualization', val: 'Plotly Interactive Radar Charts' },
        { label: 'Frontend', val: 'Streamlit Dark Theme App' }
      ]
    },
    {
      id: 'passport-social',
      category: 'data',
      categoryLabel: 'Full Stack & Web',
      badge: 'Live Deployment',
      title: 'Passport Social Auth & Analytics Dashboard',
      subtitle: 'SECURE AUTHENTICATION & CLOUD DASHBOARD',
      image: churnOverviewImg,
      gallery: [
        { src: churnOverviewImg, label: 'Dashboard Interface' }
      ],
      tech: ['React', 'Next.js', 'OAuth 2.0', 'Passport.js', 'TailwindCSS', 'Vercel'],
      github: 'https://github.com/harshit-aiot/passport-social-dashboard',
      demoUrl: 'https://passport-social-dashboard-theta.vercel.app',
      summary: 'Full-stack authentication and metrics dashboard deployed live on Vercel. Integrates OAuth 2.0 social login workflows with encrypted session management and responsive analytics views.',
      bullets: [
        'Configured OAuth 2.0 authentication providers using Passport strategy middleware.',
        'Constructed clean, responsive dashboard interface with dark mode styling and session controls.',
        'Deployed to production on Vercel with automatic CI/CD deployment pipelines.'
      ],
      specs: [
        { label: 'Deployment', val: 'Vercel Cloud' },
        { label: 'Auth Protocol', val: 'OAuth 2.0 Social Logins' },
        { label: 'Live Link', val: 'passport-social-dashboard-theta.vercel.app' }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setActiveModalImageIndex(0);
  };

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.badgeRow}>
          <span className="telemetry-text">
            <span className="blink-dot" style={{ display: 'inline-block', marginRight: '6px' }}></span>
            Real Projects & GitHub Repositories
          </span>
          <a 
            href="https://github.com/harshit-aiot" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.ghProfileLink}
          >
            <Github size={15} /> github.com/harshit-aiot <ArrowUpRight size={13} />
          </a>
        </div>
        <h2 style={styles.title}>ENGINEERED WORK</h2>
        <p style={styles.subtitle}>
          Every project featured here was hand-built, coded, and tested by me. Explore actual hardware circuit diagrams, real prototype photos, Power BI dashboards, and live GitHub repositories.
        </p>

        {/* Filter Pills with React Motion taps */}
        <div style={styles.filterBar}>
          <motion.button 
            style={activeFilter === 'all' ? styles.filterBtnActive : styles.filterBtn}
            onClick={() => setActiveFilter('all')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Layers size={15} /> All Projects ({projects.length})
          </motion.button>
          <motion.button 
            style={activeFilter === 'data' ? styles.filterBtnActive : styles.filterBtn}
            onClick={() => setActiveFilter('data')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart2 size={15} /> Data Analytics & ML ({projects.filter(p => p.category === 'data').length})
          </motion.button>
          <motion.button 
            style={activeFilter === 'iot' ? styles.filterBtnActive : styles.filterBtn}
            onClick={() => setActiveFilter('iot')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Cpu size={15} /> IoT & Hardware Prototypes ({projects.filter(p => p.category === 'iot').length})
          </motion.button>
        </div>
      </div>

      {/* Grid Layout with Framer Motion layout animations */}
      <motion.div layout className="responsive-project-grid" style={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              key={project.id} 
              className="glass-card" 
              style={styles.card}
              onClick={() => handleOpenProject(project)}
            >
              <div style={styles.imageContainer}>
                <img src={project.image} alt={project.title} style={styles.image} />
                
                {/* Category pill on image */}
                <div style={styles.categoryBadge}>
                  {project.category === 'iot' ? <Cpu size={12} /> : <BarChart2 size={12} />}
                  <span>{project.badge}</span>
                </div>

                {/* Hover overlay */}
                <div style={styles.imageOverlay} className="image-overlay-hover">
                  <span className="telemetry-text" style={styles.overlayText}>
                    Inspect Schematic & Data <ArrowUpRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </span>
                </div>
              </div>

              <div style={styles.cardContent}>
                <div style={styles.cardMetaRow}>
                  <span className="telemetry-text" style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                    {project.subtitle}
                  </span>
                </div>

                <h3 style={styles.projectTitle}>{project.title}</h3>
                
                <p style={styles.cardDesc}>
                  {project.summary.slice(0, 150)}...
                </p>

                <div style={styles.techList}>
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} style={styles.techTag}>{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span style={{ ...styles.techTag, opacity: 0.7 }}>+{project.tech.length - 4}</span>
                  )}
                </div>

                <div style={styles.cardFooter}>
                  <span style={styles.exploreLink}>
                    View Specs & Schematics <ArrowUpRight size={14} />
                  </span>
                  <span style={styles.githubTag}>
                    <Github size={14} /> Repo
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal with React Motion Spring Physics */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="portfolio-modal-overlay" 
            style={styles.modalOverlay} 
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="portfolio-modal-content" 
              style={styles.modalContent} 
              onClick={(e) => e.stopPropagation()}
            >
            <button 
              style={styles.closeBtn} 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div style={styles.modalInner}>
              {/* Top Banner */}
              <div style={styles.modalHeaderBlock}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span className="telemetry-text" style={{ color: 'var(--accent-green)' }}>
                    {selectedProject.categoryLabel}
                  </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>//</span>
                  <span style={styles.badgeHighlight}>{selectedProject.badge}</span>
                </div>
                <h3 style={styles.modalTitle}>{selectedProject.title}</h3>
                <p style={styles.modalSummary}>{selectedProject.summary}</p>
              </div>

              {/* Gallery Image Display & Thumbnails */}
              <div style={styles.galleryWrapper}>
                <div style={styles.mainImageFrame}>
                  <img 
                    src={selectedProject.gallery[activeModalImageIndex]?.src || selectedProject.image} 
                    alt={selectedProject.gallery[activeModalImageIndex]?.label || selectedProject.title} 
                    style={styles.mainImage} 
                  />
                  <div style={styles.imageCaptionBar}>
                    <span style={styles.captionText}>
                      <CircuitBoard size={14} style={{ display: 'inline', marginRight: '6px', color: 'var(--accent-cyan)' }} />
                      {selectedProject.gallery[activeModalImageIndex]?.label || 'Project Screenshot'}
                    </span>
                    <span style={styles.imageCounter}>
                      {activeModalImageIndex + 1} / {selectedProject.gallery.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {selectedProject.gallery.length > 1 && (
                  <div style={styles.thumbnailStrip}>
                    {selectedProject.gallery.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImageIndex(idx)}
                        style={idx === activeModalImageIndex ? styles.thumbBtnActive : styles.thumbBtn}
                      >
                        <img src={item.src} alt={item.label} style={styles.thumbImg} />
                        <span style={styles.thumbLabel}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Two Column Specs & Highlights */}
              <div style={styles.modalDetailGrid}>
                {/* Highlights */}
                <div style={styles.detailCol}>
                  <h4 style={styles.modalSubheading}>
                    <Sparkles size={16} style={{ color: 'var(--accent-green)' }} /> Engineering Highlights
                  </h4>
                  <ul style={styles.bulletsList}>
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} style={styles.bulletItem}>
                        <span style={styles.bulletBullet}>▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Table & Tech */}
                <div style={styles.detailCol}>
                  <h4 style={styles.modalSubheading}>
                    <Cpu size={16} style={{ color: 'var(--accent-cyan)' }} /> Technical Specifications
                  </h4>
                  
                  {selectedProject.specs && (
                    <div style={styles.specsTable}>
                      {selectedProject.specs.map((spec, idx) => (
                        <div key={idx} style={styles.specRow}>
                          <span style={styles.specLabel}>{spec.label}</span>
                          <span style={styles.specVal}>{spec.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ marginTop: '1.25rem' }}>
                    <h5 style={styles.techHeading}>Technologies & Tools</h5>
                    <div style={styles.modalTechList}>
                      {selectedProject.tech.map((t, idx) => (
                        <span key={idx} style={styles.techTagLarge}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={styles.modalActions}>
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  <Github size={18} /> View Source Code on GitHub <ArrowUpRight size={16} />
                </a>

                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.demoBtn}
                  >
                    <ExternalLink size={18} /> Open Live Deployment
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1rem',
  },
  ghProfileLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.2s ease',
  },
  title: {
    fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
    color: '#0f172a',
  },
  subtitle: {
    maxWidth: '900px',
    color: '#475569',
    fontSize: '1.05rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  filterBar: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginTop: '1.5rem',
  },
  filterBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    padding: '0.6rem 1.25rem',
    borderRadius: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    color: '#475569',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.2s ease',
  },
  filterBtnActive: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    padding: '0.6rem 1.25rem',
    borderRadius: '30px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)',
    border: 'none',
    color: '#ffffff',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(79, 70, 229, 0.28)',
  },
  grid: {},
  card: {
    cursor: 'pointer',
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  imageContainer: {
    width: '100%',
    height: '240px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f1f5f9',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  categoryBadge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 2,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: '700',
    padding: '0.35rem 0.75rem',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    color: '#0f172a',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(15, 23, 42, 0.45)',
    backdropFilter: 'blur(3px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 3,
  },
  overlayText: {
    border: '1px solid rgba(255, 255, 255, 0.8)',
    padding: '0.6rem 1.2rem',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '10px',
    color: '#0f172a',
    fontWeight: '700',
    fontSize: '0.85rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    flex: 1,
  },
  cardMetaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#0f172a',
    lineHeight: '1.3',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.55',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.45rem',
    marginTop: '0.25rem',
  },
  techTag: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: '600',
    padding: '0.25rem 0.6rem',
    backgroundColor: 'rgba(79, 70, 229, 0.06)',
    border: '1px solid rgba(79, 70, 229, 0.12)',
    borderRadius: '6px',
    color: '#4f46e5',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
  },
  exploreLink: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.78rem',
    color: '#4f46e5',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontWeight: '700',
  },
  githubTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#64748b',
  },

  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(16px)',
    zIndex: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
  },
  modalContent: {
    background: '#ffffff',
    border: '1px solid rgba(226, 232, 240, 0.9)',
    boxShadow: '0 25px 70px rgba(15, 23, 42, 0.25)',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '1050px',
    maxHeight: '92vh',
    overflowY: 'auto',
    position: 'relative',
    padding: '2.5rem',
  },
  closeBtn: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    color: '#0f172a',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    zIndex: 10,
  },
  modalInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  modalHeaderBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    paddingRight: '2rem',
  },
  badgeHighlight: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '0.25rem 0.65rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(79, 70, 229, 0.08)',
    border: '1px solid rgba(79, 70, 229, 0.2)',
    color: '#4f46e5',
  },
  modalTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
    color: '#0f172a',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  modalSummary: {
    fontSize: '1.02rem',
    color: '#475569',
    lineHeight: '1.6',
    marginTop: '0.5rem',
  },
  galleryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  mainImageFrame: {
    width: '100%',
    maxHeight: '460px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '460px',
    objectFit: 'contain',
    display: 'block',
  },
  imageCaptionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(8px)',
    padding: '0.65rem 1.25rem',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captionText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#0f172a',
  },
  imageCounter: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#64748b',
  },
  thumbnailStrip: {
    display: 'flex',
    gap: '0.75rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
  },
  thumbBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.4rem 0.6rem',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#475569',
    transition: 'all 0.2s ease',
    flexShrink: 0,
  },
  thumbBtnActive: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.4rem 0.6rem',
    background: 'rgba(79, 70, 229, 0.08)',
    border: '1px solid #4f46e5',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#4f46e5',
    fontWeight: '600',
    flexShrink: 0,
    boxShadow: '0 2px 8px rgba(79, 70, 229, 0.15)',
  },
  thumbImg: {
    width: '44px',
    height: '32px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  thumbLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    whiteSpace: 'nowrap',
  },
  modalDetailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '2rem',
    marginTop: '0.5rem',
  },
  detailCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  modalSubheading: {
    fontSize: '0.95rem',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#0f172a',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  bulletsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    padding: 0,
  },
  bulletItem: {
    fontSize: '0.92rem',
    color: '#334155',
    lineHeight: '1.6',
    display: 'flex',
    gap: '0.6rem',
    alignItems: 'flex-start',
  },
  bulletBullet: {
    color: '#10b981',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 'bold',
  },
  specsTable: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  specRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.65rem 1rem',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '0.85rem',
  },
  specLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    color: '#64748b',
    fontSize: '0.8rem',
  },
  specVal: {
    fontFamily: "'JetBrains Mono', monospace",
    color: '#0f172a',
    fontWeight: '700',
    fontSize: '0.8rem',
    textAlign: 'right',
  },
  techHeading: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
  },
  modalTechList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTagLarge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.78rem',
    fontWeight: '600',
    padding: '0.35rem 0.75rem',
    backgroundColor: 'rgba(79, 70, 229, 0.08)',
    border: '1px solid rgba(79, 70, 229, 0.16)',
    borderRadius: '8px',
    color: '#4f46e5',
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e2e8f0',
  },
  demoBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.85rem 1.6rem',
    borderRadius: '10px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    fontWeight: '600',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    color: '#0f172a',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
};

