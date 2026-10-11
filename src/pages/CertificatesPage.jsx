import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  Building, 
  Calendar,
  ArrowRight,
  Eye,
  FileText,
  X
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificatesPage() {
  const { certificatesNotice, verifiedCertificates } = portfolioData;
  const [activeModalImage, setActiveModalImage] = useState(null);

  return (
    <div className="section" style={{ paddingTop: '3.5rem' }}>
      <div className="container container-narrow">
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="eyebrow">
            <Award size={14} /> Professional Credentials
          </span>
          <h1>Certificates & Accreditations</h1>
          <p className="section-description">
            Verified certifications in Theory U leadership, organizational development, and Generative AI.
          </p>
        </div>

        {/* Notice of Verified Credentials */}
        <div className="notice-box" style={{ borderStyle: 'solid', borderColor: 'rgba(13, 148, 136, 0.3)', backgroundColor: 'var(--bg-accent-subtle)' }}>
          <Award size={22} className="notice-icon" style={{ color: 'var(--accent-teal-dark)' }} />
          <div>
            <h2 className="notice-title" style={{ fontSize: '1.05rem', color: 'var(--accent-teal-dark)' }}>
              {certificatesNotice.title}
            </h2>
            <p className="notice-text" style={{ color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 500 }}>
              {certificatesNotice.statusMessage}
            </p>
            <p className="notice-text" style={{ fontSize: '0.85rem' }}>
              {certificatesNotice.instruction}
            </p>
          </div>
        </div>

        {/* Verified Certificates Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2.5rem' }}>
          {verifiedCertificates.map((cert) => (
            <article key={cert.id} className="card" style={{ padding: '2rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.35rem', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: 'var(--accent-teal-dark)', 
                        backgroundColor: 'rgba(13, 148, 136, 0.1)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: 'var(--radius-full)' 
                      }}
                    >
                      <CheckCircle2 size={13} /> Verified Credential
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                      ID: {cert.certificateNumber}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>
                    {cert.title}
                  </h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--accent-teal-dark)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {cert.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Building size={15} style={{ color: 'var(--accent-teal)' }} />
                      <span><strong>Issuer:</strong> {cert.organization}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={15} style={{ color: 'var(--accent-teal)' }} />
                      <span><strong>Date:</strong> {cert.completionDate}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {cert.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button 
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveModalImage(`${import.meta.env.BASE_URL}${cert.image}`)}
                    >
                      <Eye size={14} /> View Certificate Image
                    </button>
                    {cert.documentUrl && (
                      <a 
                        href={`${import.meta.env.BASE_URL}${cert.documentUrl}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-secondary btn-sm"
                      >
                        <FileText size={14} /> View PDF Document
                      </a>
                    )}
                  </div>
                </div>

                {/* Certificate Preview Image */}
                <div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => setActiveModalImage(`${import.meta.env.BASE_URL}${cert.image}`)}>
                  <img 
                    src={`${import.meta.env.BASE_URL}${cert.image}`} 
                    alt={`${cert.title} credential certificate`} 
                    style={{ 
                      width: '100%', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid var(--border-light)', 
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.5rem' }}>
                    Click to enlarge certificate
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for viewing certificate image full size */}
        {activeModalImage && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '1.5rem'
            }}
            onClick={() => setActiveModalImage(null)}
          >
            <div 
              style={{ position: 'relative', maxWidth: '900px', width: '100%', maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={() => setActiveModalImage(null)}
                style={{
                  position: 'absolute',
                  top: '-2.5rem',
                  right: '0',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.9rem'
                }}
              >
                <X size={20} /> Close
              </button>
              <img 
                src={activeModalImage} 
                alt="Enlarged Certificate View" 
                style={{ width: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--radius-md)', backgroundColor: '#ffffff' }}
              />
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <NavLink to="/testimonials" className="btn btn-primary">
            View Testimonials & Recommendations <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
