import React from 'react';
import { ArrowUpRight, Cpu, BarChart2, Github, Layers, ChevronRight } from 'lucide-react';

// Preview image imports
import churnOverviewImg from '../assets/projects/churn_overview.png';
import retailPowerbiImg from '../assets/projects/retail_powerbi.jpg';
import irrigationModelImg from '../assets/projects/irrigation_model.jpg';

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
      {/* Hero Section */}
      <section style={styles.heroSection}>
        {/* Availability Badge */}
        <div style={styles.statusPill}>
          <span style={styles.statusDot}></span>
          <span>Available for Internships & Projects</span>
        </div>

        {/* Crisp, Static, Beautiful Headline — NO GLITCHING, VIBRANT MULTI-COLOR */}
        <h1 style={styles.heroTitle}>
          Hi, I'm <span style={styles.gradientName}>Harshit Bhargava</span>.
        </h1>

        <p style={styles.heroSubheading}>
          IoT Developer & Data Analytics Engineer
        </p>

        <p style={styles.heroBio}>
          I'm a developer pursuing my BCA in AI & Machine Learning at Lovely Professional University.
          I love bridging the physical and analytical worlds — designing microcontroller hardware with 
          <strong> ESP32</strong> and <strong>Arduino</strong>, and turning large datasets into clear, actionable decision engines 
          using <strong>Python</strong>, <strong>SQL</strong>, and <strong>Power BI</strong>.
        </p>

        {/* Clean Call To Action Buttons */}
        <div style={styles.ctaGroup}>
          <button 
            className="btn-human-primary" 
            onClick={() => setActivePage('work')}
          >
            Explore My Work <ArrowUpRight size={17} />
          </button>

          <button 
            className="btn-human-secondary" 
            onClick={() => setActivePage('contact')}
          >
            Get In Touch
          </button>

          <a 
            href="https://github.com/harshit-aiot" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.ghPill}
          >
            <Github size={17} />
            <span>github.com/harshit-aiot</span>
          </a>
        </div>
      </section>

      {/* Honest, Real Metric Cards */}
      <section style={styles.metricsRow}>
        <div style={styles.metricCard}>
          <div style={{ ...styles.metricNumber, background: 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            37M+
          </div>
          <div style={styles.metricLabel}>Transaction Records Analyzed</div>
          <p style={styles.metricDesc}>Processed in the Enterprise Retail Platform with 47 custom SQL analytics queries.</p>
        </div>

        <div style={styles.metricCard}>
          <div style={{ ...styles.metricNumber, background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            100% Real
          </div>
          <div style={styles.metricLabel}>Physical Hardware Prototypes</div>
          <p style={styles.metricDesc}>Built with ESP32, Arduino Uno, ADXL345 accelerometer, and capacitive sensors.</p>
        </div>

        <div style={styles.metricCard}>
          <div style={{ ...styles.metricNumber, background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            BCA (AI & ML)
          </div>
          <div style={styles.metricLabel}>Lovely Professional University</div>
          <p style={styles.metricDesc}>Hands-on engineering focus spanning machine learning, embedded C++, and data analytics.</p>
        </div>
      </section>

      {/* What I Do — Human Three-Column Cards */}
      <section style={styles.pillarsSection}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionKicker}>CORE CAPABILITIES</span>
          <h2 style={styles.sectionTitle}>What I Focus On</h2>
        </div>

        <div style={styles.pillarsGrid}>
          <div style={styles.pillarCard}>
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
          </div>

          <div style={styles.pillarCard}>
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
          </div>

          <div style={styles.pillarCard}>
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
          </div>
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

        <div style={styles.featuredGrid}>
          {featured.map((item, idx) => (
            <div 
              key={idx} 
              style={styles.featuredCard}
              onClick={() => setActivePage('work')}
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
            </div>
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
    maxWidth: '860px',
    marginBottom: '4.5rem',
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
    marginBottom: '1.5rem',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
  },
  heroTitle: {
    fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    lineHeight: '1.1',
    color: '#0f172a',
    marginBottom: '1rem',
  },
  gradientName: {
    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 40%, #e11d48 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  heroSubheading: {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
    fontWeight: '600',
    color: '#4f46e5',
    marginBottom: '1.5rem',
    letterSpacing: '-0.01em',
  },
  heroBio: {
    fontSize: 'clamp(1.05rem, 1.7vw, 1.25rem)',
    color: '#475569',
    lineHeight: '1.65',
    marginBottom: '2.5rem',
    maxWidth: '740px',
  },
  ctaGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
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
  metricsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
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
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: '1.5rem',
  },
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
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
    gap: '1.75rem',
  },
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
