import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  Laptop, 
  BarChart3, 
  Cpu, 
  Users, 
  CheckCircle2, 
  Info,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsPage() {
  const { skillsCategories } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Learning & Development':
        return <BookOpen size={22} />;
      case 'Learning Technology':
        return <Laptop size={22} />;
      case 'Data & Reporting':
        return <BarChart3 size={22} />;
      case 'AI & Automation':
        return <Cpu size={22} />;
      case 'Professional Skills':
        return <Users size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <div className="section" style={{ paddingTop: '3.5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="eyebrow">
            <Sparkles size={14} /> Capability Toolkit
          </span>
          <h1>Skills & Core Competencies</h1>
          <p className="section-description">
            Categorized skills grounded in practical experience, project work, and ongoing development.
          </p>
        </div>

        {/* Notice of Authenticity */}
        <div className="container-narrow" style={{ padding: 0 }}>
          <div className="notice-box">
            <Info size={20} className="notice-icon" />
            <div>
              <h2 className="notice-title" style={{ fontSize: '1rem', margin: 0 }}>Authentic & Practice-Based</h2>
              <p className="notice-text">
                These skills represent capabilities demonstrated through real project work and active learning. 
                In keeping with professional credibility, no arbitrary numerical percentages, star ratings, or exaggerated seniority labels are used.
              </p>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {skillsCategories.map((group, idx) => (
            <article key={idx} className="card skill-category-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div 
                  style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: 'var(--radius-sm)', 
                    backgroundColor: 'var(--bg-accent-subtle)', 
                    color: 'var(--accent-teal-dark)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                  aria-hidden="true"
                >
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.1rem' }}>{group.category}</h3>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-subtle)', lineHeight: '1.5', marginBottom: '1rem' }}>
                {group.description}
              </p>

              <div className="skill-list" aria-label={`Skills in ${group.category}`}>
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    <CheckCircle2 size={13} style={{ color: 'var(--accent-teal)' }} />
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <NavLink to="/certificates" className="btn btn-primary">
            View Certificates & Credentials <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
