import React, { useState } from 'react';
import { Send, Github, Linkedin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    // Create mailto link or simulate delivery
    const mailtoLink = `mailto:harshitbhargava439@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailtoLink;

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
        <span style={styles.kicker}>CONTACT</span>
        <h2 style={styles.title}>Let's Connect</h2>
        <p style={styles.subtitle}>
          Have an IoT hardware project, data analytics opportunity, or internship to discuss? Reach out directly via email, phone, or LinkedIn.
        </p>
      </div>

      <div className="responsive-contact-grid" style={styles.contentGrid}>
        {/* Contact info list */}
        <div style={styles.infoColumn}>
          <div style={styles.contactRow}>
            <span style={styles.label}>DIRECT EMAIL</span>
            <a href="mailto:harshitbhargava439@gmail.com" className="contact-row-value" style={styles.value}>
              harshitbhargava439@gmail.com
            </a>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.label}>DIRECT PHONE</span>
            <a href="tel:+918209158578" className="contact-row-value" style={styles.value}>
              +91 82091 58578
            </a>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.label}>LOCATIONS</span>
            <span style={styles.valueLocation}>
              Bikaner, Rajasthan · LPU, Punjab, India
            </span>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.label}>PROFILES</span>
            <div style={styles.socialGroup}>
              <a 
                href="https://github.com/harshit-aiot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link"
                style={styles.socialLink}
              >
                <Github size={18} /> <span>GitHub (@harshit-aiot)</span>
                <ArrowUpRight size={14} />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshitbh7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link"
                style={styles.socialLink}
              >
                <Linkedin size={18} /> <span>LinkedIn (harshitbh7)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Custom Form Card */}
        <div className="glass-card" style={styles.formCard}>
          <span style={styles.formTitle}>
            Send a Direct Note
          </span>

          {submitted ? (
            <div style={styles.successWrapper}>
              <CheckCircle2 size={36} style={{ color: '#10b981' }} />
              <h4 style={styles.successTitle}>Email Prepared</h4>
              <p style={styles.successText}>
                Your email client has been opened with your message. You can also email me directly at <strong>harshitbhargava439@gmail.com</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>YOUR NAME</label>
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
                <label style={styles.inputLabel}>YOUR EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  style={styles.input} 
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.inputLabel}>MESSAGE / PROJECT INQUIRY</label>
                <textarea 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  style={{ ...styles.input, height: '130px', resize: 'vertical' }} 
                  required
                />
              </div>

              <button type="submit" className="btn-human-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          )}
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
  header: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
    color: '#0f172a',
  },
  subtitle: {
    maxWidth: '650px',
    color: '#475569',
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '3.5rem',
    alignItems: 'start',
    marginBottom: '4rem',
  },
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
  },
  contactRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    paddingBottom: '1.5rem',
    paddingTop: '1rem',
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.78rem',
    letterSpacing: '0.1em',
    color: '#64748b',
    fontWeight: '600',
  },
  value: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: '#0f172a',
    fontWeight: '700',
    wordBreak: 'break-all',
    transition: 'color 0.2s',
  },
  valueLocation: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#0f172a',
    fontWeight: '600',
  },
  socialGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    marginTop: '0.5rem',
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#0f172a',
    padding: '0.55rem 0.9rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
    width: 'fit-content',
    transition: 'all 0.2s ease',
  },
  kicker: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#4f46e5',
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '0.4rem',
  },
  formTitle: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '1.5rem',
    display: 'block',
  },
  formCard: {
    padding: '2.5rem',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.95)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(16px)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  inputLabel: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#475569',
    letterSpacing: '0.04em',
  },
  input: {
    width: '100%',
    padding: '0.85rem 1.2rem',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    color: '#0f172a',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.03)',
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
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#059669',
  },
  successText: {
    color: '#475569',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
};
