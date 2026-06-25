import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    // Simulate API delivery
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <span className="telemetry-text">Contact // Establish Link</span>
        <h2 style={styles.title}>GET IN TOUCH</h2>
        <p style={styles.subtitle}>
          Have an IoT project, data pipeline, or analysis requirement? Open a port and establish a connection.
        </p>
      </div>

      <div style={styles.contentGrid}>
        {/* Contact info list */}
        <div style={styles.infoColumn}>
          <div style={styles.contactRow}>
            <span style={styles.label}>EMAIL</span>
            <a href="mailto:harshitbhargava439@gmail.com" style={styles.value}>
              harshitbhargava439@gmail.com
            </a>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.label}>PHONE</span>
            <a href="tel:+918209158578" style={styles.value}>
              +91 82091 58578
            </a>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.label}>LOCATION</span>
            <span style={styles.value}>
              Bikaner, Rajasthan, India
            </span>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.label}>SOCIALS</span>
            <div style={styles.socialGroup}>
              <a 
                href="https://github.com/harshit-aiot" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialLink}
              >
                <Github size={20} /> <span>GITHUB</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/harshitbh7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialLink}
              >
                <Linkedin size={20} /> <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Custom Form Card */}
        <div className="glass-card" style={styles.formCard}>
          <span className="telemetry-text" style={{ marginBottom: '1.5rem', display: 'block' }}>
            Transmission Form
          </span>

          {submitted ? (
            <div style={styles.successWrapper}>
              <span className="blink-dot" style={{ width: '12px', height: '12px' }}></span>
              <h4 style={styles.successTitle}>TRANSMISSION SUCCESSFUL</h4>
              <p style={styles.successText}>
                Your message has been converted to an IP payload and ingested successfully. I will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>IDENTIFIER / NAME</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  style={styles.input} 
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>RETURN ADDRESS / EMAIL</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. john@domain.com"
                  style={styles.input} 
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>MESSAGE / LOG DATA</label>
                <textarea 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Type your message here..."
                  style={{ ...styles.input, height: '120px', resize: 'none' }} 
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                Transmit Payload <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Large aesthetic footer text */}
      <div style={styles.hugeFooter}>
        <div className="stroke-title">CONNECT</div>
        <div style={{ color: '#00f2fe' }}>INGEST DATA</div>
        <div className="stroke-title">ANALYZE FUTURE</div>
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
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '4rem',
    alignItems: 'start',
    marginBottom: '4rem',
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  },
  contactRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '2rem',
    paddingTop: '1rem',
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
  },
  value: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    color: 'var(--text-primary)',
    fontWeight: '700',
    wordBreak: 'break-all',
    transition: 'color 0.2s',
  },
  socialGroup: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    marginTop: '0.5rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  formCard: {
    padding: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  inputLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: 'var(--accent-cyan)',
    letterSpacing: '0.05em',
  },
  input: {
    width: '100%',
    padding: '0.85rem 1.2rem',
    background: 'rgba(5, 7, 12, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  successWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
    textAlign: 'center',
    gap: '1rem',
  },
  successTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.1rem',
    color: '#05ffa1',
    letterSpacing: '0.05em',
  },
  successText: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  hugeFooter: {
    fontSize: 'clamp(2.2rem, 7vw, 6.5rem)',
    fontWeight: '900',
    letterSpacing: '-0.04em',
    lineHeight: '0.95',
    textTransform: 'uppercase',
    marginTop: 'auto',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '3rem',
  },
};

// Form hover focus animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    input:focus, textarea:focus {
      border-color: var(--accent-cyan) !important;
      box-shadow: 0 0 12px rgba(0, 242, 254, 0.15);
      background: rgba(5, 7, 12, 0.8) !important;
    }
    a[style*="value"]:hover {
      color: var(--accent-cyan) !important;
    }
    a[style*="socialLink"]:hover {
      color: var(--accent-cyan) !important;
      transform: translateY(-2px);
    }
    @media (max-width: 900px) {
      div[style*="contentGrid"] {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}
