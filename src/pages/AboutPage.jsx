import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Target, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  User,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutPage() {
  const { personalInfo, about } = portfolioData;

  return (
    <div className="section" style={{ paddingTop: '3.5rem' }}>
      <div className="container container-narrow">
        {/* Page Header */}
        <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow">
            <User size={14} /> About Me
          </span>
          <h1>A Learner-Centered Approach</h1>
          <p className="section-description">
            Passionate about people development, learning technologies, and practical skill building.
          </p>
        </div>

        {/* Professional Introduction */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: 'var(--radius-sm)', 
                    backgroundColor: 'var(--bg-accent-subtle)', 
                    color: 'var(--accent-teal-dark)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '0.15rem' }}>Professional Introduction</h2>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--accent-teal-dark)', fontWeight: 600 }}>
                    {personalInfo.headline}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '1.0625rem', color: 'var(--text-main)', lineHeight: '1.7' }}>
                {about.introduction}
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {about.journey}
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {personalInfo.supportingStatement}
              </p>
            </div>
          </div>
        </section>

        {/* My Approach to Learning */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="eyebrow">Core Philosophy</span>
            <h2>My Approach to Learning</h2>
            <p className="section-description">
              Principles that guide how I design, coordinate, and evaluate learning experiences.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {about.approachPrinciples.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(13, 148, 136, 0.1)', 
                      color: 'var(--accent-teal-dark)', 
                      width: '2rem', 
                      height: '2rem', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                      marginTop: '0.15rem'
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Am Interested in Developing */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'var(--bg-accent-subtle)', 
                  color: 'var(--accent-teal-dark)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <Target size={22} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.15rem' }}>What I Am Interested in Developing</h2>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Areas of active learning and curiosity</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              As a continuous learner myself, I actively invest time in expanding both my human facilitation and technical toolkits:
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {about.growthGoals.map((goal, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How I Want to Contribute to Organizations */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  borderRadius: 'var(--radius-sm)', 
                  backgroundColor: 'var(--bg-accent-subtle)', 
                  color: 'var(--accent-teal-dark)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <Briefcase size={22} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.15rem' }}>How I Want to Contribute to Organizations</h2>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Value creation for learners and leadership</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              I am eager to collaborate with teams that prioritize meaningful employee capability and well-designed learning environments:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {about.organizationalContribution.map((point, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    backgroundColor: 'var(--bg-subtle)', 
                    padding: '1.15rem', 
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    lineHeight: '1.5'
                  }}
                >
                  <span style={{ color: 'var(--accent-teal-dark)', fontWeight: 700, marginRight: '0.4rem' }}>•</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <NavLink to="/experience" className="btn btn-primary">
            Explore My Practical Experience <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
