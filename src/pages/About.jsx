import React from 'react';
import { Award, Briefcase, Calendar, Cpu, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  const skills = [
    { category: "Programming", items: ["Python", "SQL", "C++", "Embedded C"] },
    { category: "IoT & Embedded", items: ["Arduino", "ESP32", "ESP8266", "Sensor Integration", "Real-Time Systems", "Signal Processing"] },
    { category: "Data Analysis & Visuals", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel Dashboards", "Streamlit"] },
    { category: "Databases & Tools", items: ["MySQL", "SQL Queries", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Arduino IDE"] },
    { category: "Sensors Handled", items: ["DHT11", "Soil Moisture", "Ultrasonic", "IR", "RFID"] }
  ];

  const experience = [
    {
      company: "Innovexis",
      role: "Data Analyst Intern",
      period: "Jan 2026 – Apr 2026",
      type: "Remote",
      bullets: [
        "Completed training in data analysis workflows and software development concepts.",
        "Worked with Python, SQL, and Matplotlib to analyze datasets and draw predictive insights.",
        "Cleaned, preprocessed, and executed exploratory data analysis (EDA) on real-world datasets.",
        "Built Streamlit dashboards to improve management reporting and business decision-making."
      ]
    },
    {
      company: "LaunchEd Global",
      role: "IoT & Robotics Intern",
      period: "Apr 2025 – Jul 2025",
      type: "Remote",
      bullets: [
        "Engineered IoT-enabled robotic systems, improving automation testing efficiency by 30%.",
        "Integrated multi-sensor architectures increasing real-time data ingestion accuracy by 30%.",
        "Built robotic prototypes (robotic arms) and configured signal control logics."
      ]
    }
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "Aug 2024 – Present",
      location: "Phagwara, Punjab"
    },
    {
      institution: "RSV Hr. Sec. School",
      degree: "Intermediate (12th)",
      period: "Mar 2022 – May 2023",
      location: "Bikaner, Rajasthan"
    },
    {
      institution: "RSV Hr. Sec. School",
      degree: "Matriculation (10th)",
      period: "Mar 2019 – May 2020",
      location: "Bikaner, Rajasthan"
    }
  ];

  const certificates = [
    { name: "SQL for Data Analytics", issuer: "Credential Verification" },
    { name: "Python for Data Science", issuer: "Credential Verification" },
    { name: "Power BI for Business Intelligence", issuer: "Credential Verification" },
    { name: "Introduction to IoT and Digital Transformation", issuer: "Cisco Certification" },
    { name: "Python Essentials", issuer: "Cisco Certification" }
  ];

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Intro section */}
      <div style={styles.sectionHeader}>
        <span className="telemetry-text">About Me // Profile</span>
        <h2 style={styles.mainTitle}>HARSHIT BHARGAVA</h2>
        <div style={styles.locationTag}>
          <MapPin size={16} style={{ color: '#00f2fe' }} />
          <span>Bikaner, Rajasthan, India</span>
        </div>
      </div>

      <div className="bio-layout">
        <div style={styles.bioTextColumn}>
          <p style={styles.bioLead}>
            I am a Data Analyst and IoT Developer currently pursuing my Bachelor of Computer Applications (BCA) at Lovely Professional University.
          </p>
          <p style={styles.bioParagraph}>
            My technical focus lies at the intersection of embedded hardware engineering and data science. 
            I build physical micro-sensor systems utilizing ESP32 and Arduino Uno microcontrollers, establish real-time telemetry pipelines via MQTT, 
            and implement analytical workflows in Python and SQL. 
            I specialize in unlocking hidden patterns from sensor data stream pipelines to automate industrial and agricultural systems.
          </p>
        </div>
        <div style={styles.quickFacts}>
          <div className="glass-card" style={styles.factCard}>
            <span className="telemetry-text">Core Philosophy</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '700', marginTop: '0.5rem', color: '#00f2fe' }}>
              "If you can measure it, you can analyze it. If you can analyze it, you can optimize it."
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>
          <Cpu size={22} style={styles.subheadIcon} /> TECHNICAL SKILLS
        </h3>
        <div style={styles.skillsGrid}>
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="glass-card" style={styles.skillCard}>
              <h4 style={styles.skillGroupTitle}>{skillGroup.category}</h4>
              <div style={styles.skillTags}>
                {skillGroup.items.map((item, id) => (
                  <span key={id} style={styles.skillItemTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience and Education Two-Column Layout */}
      <div className="responsive-two-column">
        {/* Experience Column */}
        <div style={styles.column}>
          <h3 style={styles.subheading}>
            <Briefcase size={22} style={styles.subheadIcon} /> EXPERIENCE
          </h3>
          <div style={styles.timeline}>
            {experience.map((exp, idx) => (
              <div key={idx} style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineHeader}>
                  <h4 style={styles.timelineTitle}>{exp.role}</h4>
                  <span style={styles.timelinePeriod}>
                    <Calendar size={14} style={{ marginRight: '4px' }} /> {exp.period}
                  </span>
                </div>
                <span className="telemetry-text" style={{ fontSize: '0.75rem', color: '#05ffa1' }}>
                  {exp.company} — {exp.type}
                </span>
                <ul style={styles.timelineBullets}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={styles.timelineBulletItem}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div style={styles.column}>
          <h3 style={styles.subheading}>
            <GraduationCap size={22} style={styles.subheadIcon} /> EDUCATION
          </h3>
          <div style={styles.timeline}>
            {education.map((edu, idx) => (
              <div key={idx} style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineHeader}>
                  <h4 style={styles.timelineTitle}>{edu.degree}</h4>
                  <span style={styles.timelinePeriod}>
                    <Calendar size={14} style={{ marginRight: '4px' }} /> {edu.period}
                  </span>
                </div>
                <span className="telemetry-text" style={{ fontSize: '0.75rem' }}>
                  {edu.institution}
                </span>
                <p style={styles.timelineLoc}>{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>
          <Award size={22} style={styles.subheadIcon} /> CERTIFICATIONS
        </h3>
        <div style={styles.certsGrid}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="glass-card" style={styles.certCard}>
              <span className="telemetry-text" style={{ fontSize: '0.7rem', color: '#05ffa1' }}>{cert.issuer}</span>
              <h4 style={styles.certName}>{cert.name}</h4>
            </div>
          ))}
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
  },
  sectionHeader: {
    marginBottom: '3rem',
  },
  mainTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    letterSpacing: '-0.02em',
    marginBottom: '0.5rem',
  },
  locationTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
  },
  bioLayout: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '3rem',
    marginBottom: '4rem',
  },
  bioTextColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  bioLead: {
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    fontWeight: '500',
    lineHeight: '1.5',
  },
  bioParagraph: {
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    lineHeight: '1.7',
  },
  quickFacts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  factCard: {
    borderLeft: '3px solid var(--accent-cyan)',
    borderRadius: '0 12px 12px 0',
  },
  section: {
    marginBottom: '4rem',
  },
  subheading: {
    fontSize: '1.2rem',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.05em',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '0.75rem',
  },
  subheadIcon: {
    marginRight: '0.75rem',
    color: '#00f2fe',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  skillCard: {
    padding: '1.5rem',
  },
  skillGroupTitle: {
    fontSize: '1rem',
    color: '#fff',
    marginBottom: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '0.5rem',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  skillItemTag: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    color: 'var(--text-secondary)',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
  },
  twoColumnSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    marginBottom: '4rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '1.5rem',
    borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: '-1.95rem',
    top: '4px',
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    backgroundColor: '#00f2fe',
    boxShadow: '0 0 6px #00f2fe',
  },
  timelineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '0.25rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  timelineTitle: {
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: '700',
  },
  timelinePeriod: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
  },
  timelineBullets: {
    paddingLeft: '1.1rem',
    marginTop: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  timelineBulletItem: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  timelineLoc: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginTop: '0.25rem',
  },
  certsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  certCard: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    justifyContent: 'center',
  },
  certName: {
    fontSize: '1rem',
    color: '#fff',
    lineHeight: '1.3',
  },
};


