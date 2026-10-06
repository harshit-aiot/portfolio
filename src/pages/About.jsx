import React from 'react';
import { Award, Briefcase, Calendar, Cpu, GraduationCap, MapPin, Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const skills = [
    { 
      category: "Embedded & Microcontrollers", 
      items: ["ESP32 DevKit V1", "Arduino Uno R3", "ESP8266", "Embedded C / C++", "PWM Speed Control", "I2C & SPI Protocols", "ThingSpeak IoT Cloud"] 
    },
    { 
      category: "Sensors & Actuation", 
      items: ["ADXL345 3-Axis IMU", "DHT11 Temp & Humidity", "Capacitive Soil Moisture", "L298N Dual H-Bridge", "5V Relay Modules", "Submersible Pumps"] 
    },
    { 
      category: "Data Analytics & ML", 
      items: ["Python 3.14", "MySQL / SQL", "Pandas & NumPy", "Scikit-Learn", "K-Means Clustering", "Random Forest", "Logistic Regression", "EDA"] 
    },
    { 
      category: "Visualization & BI", 
      items: ["Power BI (Multi-Page Reports)", "Streamlit Web Apps", "Matplotlib & Seaborn", "Plotly Charts", "Advanced Excel Modeling"] 
    },
    { 
      category: "Developer Tools", 
      items: ["Git & GitHub", "VS Code", "Arduino IDE", "Jupyter Notebooks", "Vercel Cloud", "REST APIs"] 
    }
  ];

  const experience = [
    {
      company: "Innovexis",
      role: "Data Analyst Intern",
      period: "Jan 2026 – Apr 2026",
      type: "Remote Internship",
      bullets: [
        "Analyzed real-world commercial datasets using Python, SQL, and Pandas to uncover behavioral trends and anomalies.",
        "Executed end-to-end Exploratory Data Analysis (EDA) pipelines with data cleaning, null imputation, and schema transformation.",
        "Constructed interactive Streamlit dashboards enabling stakeholders to filter key performance indicators dynamically.",
        "Formulated data visualization decks using Matplotlib and Seaborn for executive presentations."
      ]
    },
    {
      company: "LaunchEd Global",
      role: "IoT & Robotics Intern",
      period: "Apr 2025 – Jul 2025",
      type: "Remote Internship",
      bullets: [
        "Engineered IoT-enabled robotic systems and calibrated multi-sensor hardware architectures.",
        "Configured signal conditioning and microcontroller control routines, boosting data acquisition accuracy by 30%.",
        "Built robotic prototypes (including robotic arms and differential drive vehicles) and tuned motor PWM mappings."
      ]
    }
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Computer Applications (BCA) — AI & ML Specialization",
      period: "Aug 2024 – Present",
      location: "Phagwara, Punjab, India",
      details: "Focusing on Machine Learning algorithms, Data Structures, IoT Microcontrollers, and Statistical Data Analysis."
    },
    {
      institution: "RSV Hr. Sec. School",
      degree: "Senior Secondary (12th Standard)",
      period: "Mar 2022 – May 2023",
      location: "Bikaner, Rajasthan, India",
      details: "Science & Mathematics stream with foundation in physics, calculus, and computing."
    },
    {
      institution: "RSV Hr. Sec. School",
      degree: "Secondary School Examination (10th Standard)",
      period: "Mar 2019 – May 2020",
      location: "Bikaner, Rajasthan, India",
      details: "Core academics in mathematics, science, and computing fundamentals."
    }
  ];

  const certificates = [
    { name: "Introduction to IoT and Digital Transformation", issuer: "Cisco Networking Academy" },
    { name: "Python Essentials", issuer: "Cisco Networking Academy" },
    { name: "SQL for Data Analytics", issuer: "Credential Verification" },
    { name: "Power BI for Business Intelligence", issuer: "Credential Verification" },
    { name: "Python for Data Science", issuer: "Credential Verification" }
  ];

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Intro section */}
      <div style={styles.sectionHeader}>
        <span style={styles.kicker}>BIOGRAPHY</span>
        <h2 style={styles.mainTitle}>Harshit Bhargava</h2>
        
        <div style={styles.metaRow}>
          <div style={styles.locationTag}>
            <MapPin size={16} style={{ color: '#3b82f6' }} />
            <span>Bikaner, Rajasthan · Lovely Professional University, Punjab</span>
          </div>
          
          <div style={styles.socialQuickLinks}>
            <a 
              href="https://github.com/harshit-aiot" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.quickIconLink}
            >
              <Github size={16} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/harshitbh7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.quickIconLink}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a 
              href="mailto:harshitbhargava439@gmail.com" 
              style={styles.quickIconLink}
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bio-layout" style={styles.bioLayout}>
        <div style={styles.bioTextColumn}>
          <p style={styles.bioLead}>
            Bridging the physical and analytical worlds — IoT developer and Data Analyst advancing my BCA in AI & Machine Learning at Lovely Professional University.
          </p>
          <p style={styles.bioParagraph}>
            Unlike developers who solely specialize in pure software or isolated hardware, my focus is at the direct interface where 
            <strong> physical sensor signals become actionable data intelligence</strong>.
          </p>
          <p style={styles.bioParagraph}>
            On the hardware side, I assemble, solder, and program ESP32 and Arduino Uno microcontrollers with analog and digital sensor arrays 
            (ADXL345 accelerometer, capacitive moisture sensors, DHT11) and write real-time C++ firmware to drive actuators and stream data over MQTT.
          </p>
          <p style={styles.bioParagraph}>
            On the analytics side, I dive into massive datasets — such as analyzing <strong>37M+ transaction records</strong> in MySQL and building predictive machine learning pipelines 
            in Python to quantify customer churn risk and power interactive Streamlit and Power BI decision suites.
          </p>
        </div>

        <div style={styles.quickFacts}>
          <div className="glass-card" style={styles.factCard}>
            <span style={styles.factKicker}>Core Philosophy</span>
            <div style={styles.philosophyQuote}>
              "From silicon to insight — if you can measure it with sensors, you can optimize it with data."
            </div>
          </div>

          <div className="glass-card" style={{ ...styles.factCard, marginTop: '1.25rem', borderLeftColor: '#10b981' }}>
            <span style={{ ...styles.factKicker, color: '#10b981' }}>Current Focus</span>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginTop: '0.5rem', lineHeight: '1.55' }}>
              Building reliable automated IoT systems and high-throughput analytical dashboards that make complex engineering simple and impactful.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>
          <Cpu size={22} style={styles.subheadIcon} /> TECHNICAL EXPERTISE
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
      <div className="responsive-two-column" style={styles.twoColumnSection}>
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
                <span className="telemetry-text" style={{ fontSize: '0.75rem', color: 'var(--accent-green)' }}>
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
                <span className="telemetry-text" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                  {edu.institution}
                </span>
                <p style={styles.timelineLoc}>{edu.location}</p>
                {edu.details && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem', lineHeight: '1.4' }}>
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>
          <Award size={22} style={styles.subheadIcon} /> CERTIFICATIONS & CREDENTIALS
        </h3>
        <div style={styles.certsGrid}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="glass-card" style={styles.certCard}>
              <span className="telemetry-text" style={{ fontSize: '0.72rem', color: 'var(--accent-green)' }}>
                {cert.issuer}
              </span>
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
    marginBottom: '0.75rem',
    color: '#0f172a',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  locationTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#475569',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.88rem',
  },
  socialQuickLinks: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  quickIconLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    fontWeight: '600',
    padding: '0.35rem 0.85rem',
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    color: '#334155',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.2s ease',
  },
  bioLayout: {
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    gap: '3rem',
    marginBottom: '4rem',
  },
  bioTextColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  bioLead: {
    fontSize: '1.2rem',
    color: '#0f172a',
    fontWeight: '600',
    lineHeight: '1.5',
  },
  bioParagraph: {
    color: '#475569',
    fontSize: '1.02rem',
    lineHeight: '1.65',
  },
  kicker: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#4f46e5',
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '0.4rem',
  },
  factKicker: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#4f46e5',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  factCard: {
    background: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    borderLeft: '4px solid #4f46e5',
    borderRadius: '0 16px 16px 0',
    padding: '1.75rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
  },
  philosophyQuote: {
    fontSize: '1.08rem',
    fontWeight: '700',
    marginTop: '0.5rem',
    color: '#0f172a',
    lineHeight: '1.5',
  },
  section: {
    marginBottom: '4rem',
  },
  subheading: {
    fontSize: '1.2rem',
    fontWeight: '800',
    letterSpacing: '-0.01em',
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    paddingBottom: '0.75rem',
  },
  subheadIcon: {
    marginRight: '0.75rem',
    color: '#4f46e5',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  skillCard: {
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    background: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
  },
  skillGroupTitle: {
    fontSize: '1rem',
    color: '#0f172a',
    fontWeight: '700',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
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
    fontWeight: '600',
    backgroundColor: 'rgba(79, 70, 229, 0.06)',
    border: '1px solid rgba(79, 70, 229, 0.12)',
    color: '#4f46e5',
    padding: '0.3rem 0.65rem',
    borderRadius: '6px',
  },
  twoColumnSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3.5rem',
    marginBottom: '4rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '1.5rem',
    borderLeft: '1px solid rgba(226, 232, 240, 0.8)',
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
    backgroundColor: '#4f46e5',
    boxShadow: '0 0 8px rgba(79, 70, 229, 0.5)',
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
    fontSize: '1.15rem',
    color: '#0f172a',
    fontWeight: '700',
  },
  timelinePeriod: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
  },
  timelineBullets: {
    paddingLeft: '1.1rem',
    marginTop: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  timelineBulletItem: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.55',
  },
  timelineLoc: {
    fontSize: '0.85rem',
    color: '#64748b',
    marginTop: '0.25rem',
  },
  certsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.25rem',
  },
  certCard: {
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
  },
  certName: {
    fontSize: '0.95rem',
    color: '#0f172a',
    lineHeight: '1.4',
    fontWeight: '700',
  },
};
