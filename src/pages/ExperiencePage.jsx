import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Briefcase, 
  Building2, 
  Calendar,
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperiencePage() {
  const { currentRoleExperience, airtelBlackExperience, theoryU, careerProgression } = portfolioData;

  return (
    <div className="section" style={{ paddingTop: '3.5rem' }}>
      <div className="container container-narrow">
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="eyebrow">
            <Briefcase size={14} /> Career Experience & Progression
          </span>
          <h1>Professional Experience</h1>
          <p className="section-description">
            Progression from process training to learning technology, AI enablement, and organizational development.
          </p>
        </div>

        {/* Career Progression Journey: Process Trainer -> Software Trainer -> Senior L&D */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <TrendingUp size={20} style={{ color: 'var(--accent-teal)' }} />
              <h2 style={{ fontSize: '1.35rem', margin: 0 }}>Career Progression Stages</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {careerProgression.map((prog, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    paddingBottom: idx !== careerProgression.length - 1 ? '1.25rem' : '0',
                    borderBottom: idx !== careerProgression.length - 1 ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  <div 
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      backgroundColor: idx === 2 ? 'var(--accent-teal)' : 'rgba(13, 148, 136, 0.12)',
                      color: idx === 2 ? '#ffffff' : 'var(--accent-teal-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{prog.title}</h3>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--accent-teal-dark)', fontWeight: 600 }}>
                        {prog.organization}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                        ({prog.period})
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.55', margin: 0 }}>
                      {prog.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. CURRENT ROLE: WyzMindz Solutions */}
        <section style={{ marginBottom: '3.5rem' }}>
          <article className="experience-card" style={{ borderLeftWidth: '5px' }}>
            <div className="experience-header">
              <div>
                <span className="badge-tag" style={{ marginBottom: '0.4rem', backgroundColor: 'var(--bg-accent-subtle)', color: 'var(--accent-teal-dark)' }}>
                  Current Role • Executive Reporting
                </span>
                <h2 className="experience-title" style={{ fontSize: '1.45rem' }}>
                  {currentRoleExperience.title}
                </h2>
              </div>
              <span className="experience-badge">{currentRoleExperience.period}</span>
            </div>

            {/* Organization, Team, Reporting metadata */}
            <div className="experience-placeholders" style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem 1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Building2 size={16} style={{ color: 'var(--accent-teal)' }} />
                <span><strong>Company:</strong> {currentRoleExperience.organization}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Layers size={16} style={{ color: 'var(--accent-teal)' }} />
                <span><strong>Team:</strong> {currentRoleExperience.department}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} style={{ color: 'var(--accent-teal)' }} />
                <span><strong>Reporting:</strong> {currentRoleExperience.reporting}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {currentRoleExperience.summary}
            </p>

            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Core Responsibilities & Contributions:
            </h4>

            <div className="experience-bullet-list">
              {currentRoleExperience.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} className="experience-bullet-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-main)' }}>{resp}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* 2. FEATURED SECTION: Theory U: Bringing Leadership and Awareness into Practice */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div className="card" style={{ padding: '2.25rem', border: '1px solid rgba(13, 148, 136, 0.3)', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <Award size={22} style={{ color: 'var(--accent-teal)' }} />
              <h2 style={{ fontSize: '1.4rem', margin: 0 }}>{theoryU.sectionTitle}</h2>
            </div>

            <blockquote style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.65', marginBottom: '1.5rem', fontStyle: 'italic', borderLeft: '3px solid var(--accent-teal)', paddingLeft: '1rem' }}>
              "{theoryU.description}"
            </blockquote>

            {/* Certification Details Table / Card */}
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-teal-dark)', marginBottom: '0.75rem' }}>
                Certification & Credentials Details (Editable Fields)
              </h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', fontSize: '0.875rem' }}>
                <div><strong>Certification Title:</strong> {theoryU.certificationTitle}</div>
                <div><strong>Training / Issuing Org:</strong> {theoryU.certifyingOrganization}</div>
                <div><strong>Program Director:</strong> {theoryU.programDirector}</div>
                <div><strong>Completion Date:</strong> {theoryU.completionDate}</div>
                <div><strong>Certificate ID:</strong> {theoryU.certificateNumber}</div>
              </div>
            </div>

            {/* Training focus areas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {theoryU.trainingFocusAreas.map((area, idx) => (
                <div key={idx} style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--accent-teal-dark)' }}>{area.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                Certified credential with certificate verification preview available.
              </span>
              <NavLink to="/certificates" className="btn btn-primary btn-sm">
                View Certificate Gallery <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </section>

        {/* 3. AIRTEL BLACK TRAINING EXPERIENCE: Altruist Technologies */}
        <section style={{ marginBottom: '3.5rem' }}>
          <article className="experience-card" style={{ borderLeftColor: '#0284c7' }}>
            <div className="experience-header">
              <div>
                <span className="badge-tag" style={{ marginBottom: '0.4rem', backgroundColor: '#e0f2fe', color: '#0369a1' }}>
                  Process Training • Frontline & Leadership
                </span>
                <h2 className="experience-title" style={{ fontSize: '1.45rem' }}>
                  {airtelBlackExperience.role} — {airtelBlackExperience.process}
                </h2>
              </div>
              <span className="experience-badge">{airtelBlackExperience.period}</span>
            </div>

            <div className="experience-placeholders" style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem 1rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Building2 size={16} style={{ color: '#0284c7' }} />
                <span><strong>Company:</strong> {airtelBlackExperience.company}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={16} style={{ color: '#0284c7' }} />
                <span><strong>Period:</strong> {airtelBlackExperience.period}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {airtelBlackExperience.summary}
            </p>

            {/* Impact Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {airtelBlackExperience.metrics.map((metric, mIdx) => (
                <div 
                  key={mIdx} 
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)', 
                    padding: '1rem', 
                    borderRadius: 'var(--radius-sm)', 
                    textAlign: 'center' 
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.2rem' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>
                    {metric.note}
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              Cumulative Training Execution Details:
            </h4>

            <div className="experience-bullet-list">
              {airtelBlackExperience.details.map((item, dIdx) => (
                <div key={dIdx} className="experience-bullet-item">
                  <span className="bullet-dot" style={{ color: '#0284c7' }} aria-hidden="true">•</span>
                  <span style={{ fontSize: '0.92rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <NavLink to="/skills" className="btn btn-primary">
            View Categorized Skills <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
