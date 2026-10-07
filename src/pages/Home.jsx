import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, BarChart2, Github, Layers, ChevronRight, GraduationCap } from 'lucide-react';

// Preview image imports
import churnOverviewImg from '../assets/projects/churn_overview.png';
import retailPowerbiImg from '../assets/projects/retail_powerbi.jpg';
import irrigationModelImg from '../assets/projects/irrigation_model.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home({ setActivePage }) {
  const featured = [
    {
      title: "Customer Churn & Retention Platform",
      category: "Data Analytics & ML",
      image: churnOverviewImg,
      desc: "ML classification and K-Means segmentation on 7,043 customer accounts to identify churn drivers and quantify revenue risk.",
      tags: ["Python", "Scikit-Learn", "Streamlit", "Tableau"]
    },
    {
      title: "Enterprise Retail Intelligence Engine",
      category: "Big Data & Business Intelligence",
      image: retailPowerbiImg,
      desc: "Analytical pipeline on 37M+ Instacart transactions with 47 business SQL queries and a 7-page Power BI dashboard.",
      tags: ["MySQL", "Python", "Power BI", "SQL"]
    },
    {
      title: "Smart Irrigation & Water Controller",
      category: "IoT & Hardware Prototype",
      image: irrigationModelImg,
      desc: "ESP32 automated watering system with capacitive soil moisture sensing that reduces water consumption by 25%.",
      tags: ["ESP32", "Embedded C++", "ThingSpeak", "Relay"]
    }
  ];

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Hero Section with React Motion Stagger & Responsive Split Layout */}
      <motion.section 
        className="hero-split-layout"
        style={styles.heroSection}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Hero Bio & Actions */}
        <div style={styles.heroLeftCol}>
          {/* Availability Badge */}
          <motion.div variants={itemVariants} style={styles.statusPill}>
            <span style={styles.statusDot}></span>
            <span>Available for Internships & Projects</span>
          </motion.div>

          {/* Crisp Headline */}
          <motion.h1 variants={itemVariants} style={styles.heroTitle}>
            Hi, I'm <span style={styles.gradientName}>Harshit Bhargava</span>.
          </motion.h1>

          <motion.p variants={itemVariants} style={styles.heroSubheading}>
            IoT Developer & Data Analytics Engineer
          </motion.p>

          <motion.div variants={itemVariants} style={styles.heroBioWrapper}>
            <p style={styles.heroLead}>
              Bridging the physical and analytical worlds — designing intelligent IoT hardware and turning complex datasets into clear, high-impact decision systems.
            </p>

            <p style={styles.heroBio}>
              Specializing in <strong>AI & Machine Learning</strong> at <strong>Lovely Professional University</strong>, I architect embedded microcontroller systems with <span className="tech-tag tech-hardware">ESP32</span> and <span className="tech-tag tech-hardware">Arduino</span>, alongside end-to-end data analytics and predictive models built with <span className="tech-tag tech-data">Python</span>, <span className="tech-tag tech-data">SQL</span>, and <span className="tech-tag tech-data">Power BI</span>.
            </p>

            <div style={styles.bioHighlights}>
              <div style={styles.highlightBadge}>
                <GraduationCap size={15} style={{ color: '#4f46e5' }} />
                <span>BCA (AI & ML) · Lovely Professional University</span>
              </div>
              <div style={styles.highlightBadge}>
                <Cpu size={15} style={{ color: '#0284c7' }} />
                <span>Embedded Hardware & Edge Robotics</span>
              </div>
              <div style={styles.highlightBadge}>
                <BarChart2 size={15} style={{ color: '#059669' }} />
                <span>Predictive ML & Enterprise BI</span>
              </div>
            </div>
          </motion.div>

          {/* Clean Call To Action Buttons */}
          <motion.div variants={itemVariants} style={styles.ctaGroup}>
            <motion.button 
              className="btn-human-primary" 
              onClick={() => setActivePage('work')}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore My Work <ArrowUpRight size={17} />
            </motion.button>

            <motion.button 
              className="btn-human-secondary" 
              onClick={() => setActivePage('contact')}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.button>

            <motion.a 
              href="https://github.com/harshit-aiot" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.ghPill}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={17} />
              <span>github.com/harshit-aiot</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Live Engineering Telemetry Showcase Console (fills laptop screen beautifully & eliminates blank gap) */}
        <motion.div 
          variants={itemVariants}
          className="glass-card"
          style={styles.telemetryCard}
        >
          {/* Card Top Header */}
          <div style={styles.telemetryCardHeader}>
            <div style={styles.telemetryStatusGroup}>
              <span className="blink-dot"></span>
              <span style={styles.telemetryStatusTitle}>SYSTEM ONLINE</span>
            </div>
            <span style={styles.telemetryStatusSub}>HARSHIT-NODE-01</span>
          </div>

          {/* Quick Metrics Matrix */}
          <div style={styles.telemetryMatrix}>
            <div style={styles.telemetryMatrixCell}>
              <span style={styles.matrixLabel}>MICROCONTROLLER</span>
              <span style={styles.matrixVal}>ESP32 + Arduino</span>
            </div>
            <div style={styles.telemetryMatrixCell}>
              <span style={styles.matrixLabel}>ANALYTICS SCALE</span>
              <span style={styles.matrixVal}>37M+ Transactions</span>
            </div>
            <div style={styles.telemetryMatrixCell}>
              <span style={styles.matrixLabel}>MODEL PIPELINE</span>
              <span style={styles.matrixVal}>K-Means & Churn ML</span>
            </div>
            <div style={styles.telemetryMatrixCell}>
              <span style={styles.matrixLabel}>EDUCATION FOCUS</span>
              <span style={styles.matrixVal}>BCA (AI & ML) @ LPU</span>
            </div>
          </div>

          {/* Real-Time Telemetry Feed Box */}
          <div style={styles.telemetryTerminal}>
            <div style={styles.terminalHeader}>
              <span style={styles.terminalTitle}>TELEMETRY STREAM</span>
              <span style={styles.terminalStatus}>10Hz FEED</span>
            </div>
            <div style={styles.terminalRow}>
              <span style={styles.terminalKey}>[HARDWARE]</span>
              <span style={styles.terminalText}>ESP32 DevKit V1 · Soil Moisture 64% (Normal)</span>
            </div>
            <div style={styles.terminalRow}>
              <span style={styles.terminalKey}>[ROBOTICS]</span>
              <span style={styles.terminalText}>ADXL345 3-Axis IMU · Roll -1.2° / Pitch +0.4°</span>
            </div>
            <div style={styles.terminalRow}>
              <span style={styles.terminalKey}>[DATABASE]</span>
              <span style={styles.terminalText}>MySQL 8.4 · 47 Production Queries Indexed</span>
            </div>
            <div style={styles.terminalRow}>
              <span style={styles.terminalKey}>[ML MODEL]</span>
              <span style={styles.terminalText}>Telco Customer Churn · 84.6% ROC-AUC Score</span>
            </div>
          </div>

          {/* Card Bottom CTA */}
          <div style={styles.telemetryCardBottom}>
            <button 
              onClick={() => setActivePage('work')}
              style={styles.telemetryExploreBtn}
            >
              <span>Inspect Circuits & Schematics</span>
              <ArrowUpRight size={15} />
            </button>
            <a 
              href="https://github.com/harshit-aiot" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.telemetryRepoLink}
            >
              <Github size={15} /> All Repos
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Honest, Real Metric Cards */}
      <section className="responsive-metrics-grid" style={styles.metricsRow}>
        <motion.div 
          style={styles.metricCard}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div style={{ ...styles.metricNumber, background: 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            37M+
          </div>
          <div style={styles.metricLabel}>Transaction Records Analyzed</div>
          <p style={styles.metricDesc}>Processed in the Enterprise Retail Platform with 47 custom SQL analytics queries.</p>
        </motion.div>

        <motion.div 
          style={styles.metricCard}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div style={{ ...styles.metricNumber, background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            100% Real
          </div>
          <div style={styles.metricLabel}>Physical Hardware Prototypes</div>
          <p style={styles.metricDesc}>Built with ESP32, Arduino Uno, ADXL345 accelerometer, and capacitive sensors.</p>
        </motion.div>

        <motion.div 
          style={styles.metricCard}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div style={{ ...styles.metricNumber, background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            BCA (AI & ML)
          </div>
          <div style={styles.metricLabel}>Lovely Professional University</div>
          <p style={styles.metricDesc}>Hands-on engineering focus spanning machine learning, embedded C++, and data analytics.</p>
        </motion.div>
      </section>

      {/* What I Do — Human Three-Column Cards */}
      <section style={styles.pillarsSection}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionKicker}>CORE CAPABILITIES</span>
          <h2 style={styles.sectionTitle}>What I Focus On</h2>
        </div>

        <div className="responsive-pillars-grid" style={styles.pillarsGrid}>
          <motion.div 
            style={styles.pillarCard}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ ...styles.pillarIcon, background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5' }}>
              <Cpu size={24} />
            </div>
            <h3 style={styles.pillarTitle}>IoT & Microcontroller Engineering</h3>
            <p style={styles.pillarDesc}>
              Designing and assembling embedded hardware using ESP32 DevKit and Arduino Uno. 
              Writing firmware in Embedded C/C++ to read analog sensors, manage hysteresis thresholds, and drive motor controllers and relays.
            </p>
            <div style={styles.pillarTags}>
              <span style={styles.tagBlue}>ESP32</span>
              <span style={styles.tagBlue}>Arduino</span>
              <span style={styles.tagBlue}>ADXL345</span>
              <span style={styles.tagBlue}>ThingSpeak</span>
            </div>
          </motion.div>

          <motion.div 
            style={styles.pillarCard}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ ...styles.pillarIcon, background: 'rgba(16, 185, 129, 0.1)', color: '#059669' }}>
              <BarChart2 size={24} />
            </div>
            <h3 style={styles.pillarTitle}>Data Analytics & Business Intelligence</h3>
            <p style={styles.pillarDesc}>
              Writing high-efficiency SQL queries in MySQL to clean and normalize massive transaction data. 
              Building executive dashboards in Power BI and interactive multi-tab apps in Streamlit.
            </p>
            <div style={styles.pillarTags}>
              <span style={styles.tagGreen}>Python</span>
              <span style={styles.tagGreen}>MySQL</span>
              <span style={styles.tagGreen}>Power BI</span>
              <span style={styles.tagGreen}>Pandas</span>
            </div>
          </motion.div>

          <motion.div 
            style={styles.pillarCard}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ ...styles.pillarIcon, background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>
              <Layers size={24} />
            </div>
            <h3 style={styles.pillarTitle}>Machine Learning & Modeling</h3>
            <p style={styles.pillarDesc}>
              Developing classification models for customer churn prediction, clustering customer cohorts with K-Means, 
              and applying natural language processing for resume keyword analysis.
            </p>
            <div style={styles.pillarTags}>
              <span style={styles.tagPurple}>Scikit-Learn</span>
              <span style={styles.tagPurple}>K-Means</span>
              <span style={styles.tagPurple}>Random Forest</span>
              <span style={styles.tagPurple}>EDA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Sneak Peek */}
      <section style={styles.featuredSection}>
        <div style={styles.featuredHeader}>
          <div>
            <span style={styles.sectionKicker}>FEATURED WORK</span>
            <h2 style={styles.sectionTitle}>Selected Projects</h2>
          </div>
          <button 
            className="btn-human-secondary" 
            onClick={() => setActivePage('work')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            View All ({featured.length + 5}) Projects <ChevronRight size={16} />
          </button>
        </div>

        <div className="responsive-project-grid" style={styles.featuredGrid}>
          {featured.map((item, idx) => (
            <motion.div 
              key={idx} 
              style={styles.featuredCard}
              onClick={() => setActivePage('work')}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div style={styles.featuredImgFrame}>
                <img src={item.image} alt={item.title} style={styles.featuredImg} />
                <span style={styles.featuredCategoryPill}>{item.category}</span>
              </div>
              <div style={styles.featuredBody}>
                <h3 style={styles.featuredCardTitle}>{item.title}</h3>
                <p style={styles.featuredCardDesc}>{item.desc}</p>
                <div style={styles.featuredTags}>
                  {item.tags.map((t, tIdx) => (
                    <span key={tIdx} style={styles.featuredTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warm Personal Quote / Philosophy */}
      <section style={styles.personalBanner}>
        <div style={styles.quoteMark}>“</div>
        <p style={styles.quoteText}>
          Good engineering isn't about making things complicated — it's about taking raw hardware signals 
          or messy rows of data and turning them into systems people can trust and understand.
        </p>
        <span style={styles.quoteAuthor}>— Harshit Bhargava</span>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: {
    paddingTop: '120px',
    paddingBottom: '60px',
  },
  heroSection: {
    marginBottom: '4.5rem',
  },
  heroLeftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  statusPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.82rem',
    fontWeight: '600',
    color: '#334155',
    background: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
    padding: '0.4rem 0.95rem',
    borderRadius: '20px',
    marginBottom: '1.25rem',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
  },
  heroTitle: {
    fontSize: 'clamp(2.1rem, 5.2vw, 4.2rem)',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    lineHeight: '1.12',
    color: '#0f172a',
    marginBottom: '0.85rem',
  },
  gradientName: {
    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 40%, #e11d48 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  heroSubheading: {
    fontSize: 'clamp(1.15rem, 2.2vw, 1.55rem)',
    fontWeight: '600',
    color: '#4f46e5',
    marginBottom: '1.25rem',
    letterSpacing: '-0.01em',
  },
  heroBioWrapper: {
    width: '100%',
    marginBottom: '2rem',
  },
  heroLead: {
    fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
    fontWeight: '600',
    color: '#1e293b',
    lineHeight: '1.55',
    marginBottom: '0.85rem',
    letterSpacing: '-0.01em',
  },
  heroBio: {
    fontSize: 'clamp(0.92rem, 1.4vw, 1.02rem)',
    color: '#475569',
    lineHeight: '1.65',
    marginBottom: '1.25rem',
  },
  bioHighlights: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.55rem',
    alignItems: 'center',
  },
  highlightBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.4rem 0.8rem',
    borderRadius: '100px',
    background: 'rgba(255, 255, 255, 0.92)',
    border: '1px solid rgba(226, 232, 240, 0.95)',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#334155',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
  },
  ctaGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    flexWrap: 'wrap',
  },
  ghPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.25rem',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    color: '#334155',
    textDecoration: 'none',
    fontSize: '0.88rem',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.2s ease',
  },
  telemetryCard: {
    padding: '1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.15rem',
    background: 'rgba(255, 255, 255, 0.88)',
    border: '1px solid rgba(255, 255, 255, 0.98)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(79, 70, 229, 0.06)',
  },
  telemetryCardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
  },
  telemetryStatusGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.55rem',
  },
  telemetryStatusTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: '0.06em',
  },
  telemetryStatusSub: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    color: '#4f46e5',
    fontWeight: '600',
    background: 'rgba(79, 70, 229, 0.08)',
    padding: '0.2rem 0.55rem',
    borderRadius: '6px',
  },
  telemetryMatrix: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.65rem',
  },
  telemetryMatrixCell: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '0.7rem 0.85rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  matrixLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: '0.06em',
  },
  matrixVal: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  telemetryTerminal: {
    background: '#0f172a',
    borderRadius: '14px',
    padding: '0.95rem 1.1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem',
    boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.3)',
  },
  terminalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '0.45rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  terminalTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.68rem',
    color: '#94a3b8',
    letterSpacing: '0.08em',
    fontWeight: '600',
  },
  terminalStatus: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#10b981',
    fontWeight: '700',
  },
  terminalRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.73rem',
    lineHeight: '1.45',
  },
  terminalKey: {
    color: '#38bdf8',
    fontWeight: '700',
    flexShrink: 0,
  },
  terminalText: {
    color: '#e2e8f0',
  },
  telemetryCardBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.75rem',
    flexWrap: 'wrap',
    paddingTop: '0.25rem',
  },
  telemetryExploreBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    background: 'linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.65rem 1.1rem',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '0.82rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.22)',
    transition: 'all 0.2s ease',
  },
  telemetryRepoLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.78rem',
    color: '#475569',
    padding: '0.55rem 0.85rem',
    borderRadius: '10px',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  metricsRow: {
    marginBottom: '5rem',
  },
  metricCard: {
    background: 'rgba(255, 255, 255, 0.82)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
  },
  metricNumber: {
    fontSize: '2.4rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  metricLabel: {
    fontSize: '0.98rem',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '0.3rem',
  },
  metricDesc: {
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: '1.55',
    marginTop: 'auto',
  },
  pillarsSection: {
    marginBottom: '5.5rem',
  },
  sectionHeader: {
    marginBottom: '2.5rem',
  },
  sectionKicker: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#4f46e5',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.4rem',
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: '-0.02em',
  },
  pillarsGrid: {},
  pillarCard: {
    background: 'rgba(255, 255, 255, 0.82)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
  },
  pillarIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  pillarDesc: {
    fontSize: '0.92rem',
    color: '#475569',
    lineHeight: '1.6',
    flex: 1,
  },
  pillarTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginTop: 'auto',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
  },
  tagBlue: {
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(79, 70, 229, 0.08)',
    color: '#4f46e5',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
  },
  tagGreen: {
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(16, 185, 129, 0.08)',
    color: '#059669',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
  },
  tagPurple: {
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(124, 58, 237, 0.08)',
    color: '#7c3aed',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
  },
  featuredSection: {
    marginBottom: '5rem',
  },
  featuredHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  featuredGrid: {},
  featuredCard: {
    background: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  featuredImgFrame: {
    width: '100%',
    height: '210px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f1f5f9',
  },
  featuredImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  featuredCategoryPill: {
    position: 'absolute',
    top: '0.85rem',
    left: '0.85rem',
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    padding: '0.25rem 0.65rem',
    borderRadius: '20px',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#0f172a',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  },
  featuredBody: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
    flex: 1,
  },
  featuredCardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  featuredCardDesc: {
    fontSize: '0.88rem',
    color: '#475569',
    lineHeight: '1.55',
  },
  featuredTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginTop: 'auto',
    paddingTop: '0.85rem',
  },
  featuredTag: {
    fontSize: '0.75rem',
    fontWeight: '600',
    background: 'rgba(79, 70, 229, 0.06)',
    color: '#4f46e5',
    padding: '0.2rem 0.55rem',
    borderRadius: '6px',
  },
  personalBanner: {
    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(244, 63, 94, 0.08) 50%, rgba(6, 182, 212, 0.08) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    position: 'relative',
    marginTop: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
  },
  quoteMark: {
    fontSize: '4.5rem',
    lineHeight: '1',
    color: 'rgba(79, 70, 229, 0.15)',
    fontFamily: 'serif',
    marginBottom: '-1.5rem',
  },
  quoteText: {
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    color: '#0f172a',
    lineHeight: '1.6',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  quoteAuthor: {
    fontSize: '0.92rem',
    fontWeight: '700',
    color: '#4f46e5',
  },
};
