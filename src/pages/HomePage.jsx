import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BookOpen, 
  Laptop, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Award,
  Layers, 
  Mail,
  TrendingUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function HomePage() {
  const { personalInfo, focusAreas, selectedProjects, careerProgression, theoryU } = portfolioData;

  // Icon mapping for focus areas
  const getFocusIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen size={24} />;
      case 'Laptop':
        return <Laptop size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      default:
        return <Layers size={24} />;
    }
  };

  const resolvedPhotoUrl = `${import.meta.env.BASE_URL}${personalInfo.photoUrl}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              {/* Current Role Badge */}
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  backgroundColor: 'var(--bg-accent-subtle)', 
                  border: '1px solid rgba(13, 148, 136, 0.25)', 
                  padding: '0.4rem 0.85rem', 
                  borderRadius: 'var(--radius-full)', 
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--accent-teal-dark)',
                  marginBottom: '1rem'
                }}
              >
                <Building2 size={14} />
                <span>{personalInfo.currentRole.title} • {personalInfo.currentRole.organization}</span>
              </div>
              
              <h1 className="hero-title">{personalInfo.name}</h1>
              <p className="hero-headline">{personalInfo.subheadline}</p>
              
              <p className="hero-statement" style={{ fontWeight: 500, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                "{personalInfo.positioningStatement}"
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                {personalInfo.supportingStatement}
              </p>

              <div className="hero-actions">
                <a href="#selected-work" className="btn btn-primary">
                  Explore My Work <ArrowRight size={16} />
                </a>
                <NavLink to="/experience" className="btn btn-secondary">
                  Career Experience
                </NavLink>
                <NavLink to="/about" className="btn btn-secondary">
                  About Me
                </NavLink>
              </div>

              {/* Organization and reporting summary */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-subtle)', fontSize: '0.85rem', background: 'var(--bg-subtle)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <Sparkles size={15} style={{ color: 'var(--accent-teal)' }} />
                <span>OD Team | Reporting directly to the CMD at WyzMindz Solutions</span>
              </div>
            </div>

            <div className="hero-portrait-container">
              <div className="hero-portrait-card">
                <img 
                  src={resolvedPhotoUrl} 
                  alt={personalInfo.photoAlt}
                  className="hero-portrait-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression Snapshot */}
      <section className="section-tight" style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.35rem' }}>
                <TrendingUp size={13} /> Career Trajectory
              </span>
              <h2 style={{ fontSize: '1.35rem' }}>Progression in Learning & Development</h2>
            </div>
            <NavLink to="/experience" style={{ color: 'var(--accent-teal-dark)', fontWeight: 600, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              View Complete Timeline <ArrowRight size={14} />
            </NavLink>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {careerProgression.map((prog, idx) => (
              <div key={idx} className="card" style={{ padding: '1.25rem', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-teal-dark)' }}>STAGE {prog.stage}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{prog.period}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{prog.title}</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginBottom: '0.5rem', fontWeight: 500 }}>
                  {prog.organization} {prog.process && `(${prog.process})`}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {prog.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Core Focus Areas */}
      <section className="section-tight" style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Professional Specializations</span>
            <h2>Three Core Focus Areas</h2>
            <p className="section-description">
              Connecting executive priorities, learning platforms, and human leadership capability.
            </p>
          </div>

          <div className="grid-3">
            {focusAreas.map((area) => (
              <div key={area.id} className="card focus-card">
                <div className="focus-card-icon" aria-hidden="true">
                  {getFocusIcon(area.icon)}
                </div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{area.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory U Featured Spotlight */}
      <section className="section-tight" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="card" style={{ padding: '2.5rem', border: '1px solid rgba(13, 148, 136, 0.25)', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                  <Award size={13} /> Featured Leadership Practice
                </span>
                <h2 style={{ fontSize: '1.65rem', marginBottom: '0.75rem' }}>{theoryU.sectionTitle}</h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  "{theoryU.description}"
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-subtle)' }}>
                  <div><strong>Credential:</strong> {theoryU.certificationTitle}</div>
                  <div><strong>Training Partner:</strong> {theoryU.programDirector} ({theoryU.certifyingOrganization})</div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <NavLink to="/certificates" className="btn btn-primary btn-sm">
                    View Verified Certificate <ArrowRight size={14} />
                  </NavLink>
                  <NavLink to="/experience" className="btn btn-secondary btn-sm">
                    Read Workshop Details
                  </NavLink>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img 
                  src={`${import.meta.env.BASE_URL}${theoryU.certificateImage}`} 
                  alt="Theory U Certificate preview" 
                  style={{ width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="section">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow">Portfolio Showcase</span>
              <h2>Selected Work & Impact</h2>
              <p className="section-description">
                Key initiatives across Organizational Development, LMS administration, AI enablement, and process training.
              </p>
            </div>
            <NavLink to="/experience" className="btn btn-secondary btn-sm">
              View Detailed Experience <ArrowRight size={14} />
            </NavLink>
          </div>

          <div className="grid-2">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="section-tight" style={{ backgroundColor: 'var(--bg-accent-subtle)', borderTop: '1px solid rgba(13, 148, 136, 0.15)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Let's Connect and Collaborate</h2>
          <p style={{ fontSize: '1.0625rem', marginBottom: '1.75rem' }}>
            Interested in discussing organizational development initiatives, Moodle LMS management, AI training, or Theory U leadership facilitation?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={personalInfo.contactEmail} className="btn btn-primary">
              <Mail size={16} /> Get in Touch
            </a>
            <NavLink to="/experience" className="btn btn-secondary">
              View Detailed Career Experience
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
