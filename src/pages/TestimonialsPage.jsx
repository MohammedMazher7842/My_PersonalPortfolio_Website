import React from 'react';
import { 
  MessageSquare, 
  Quote, 
  Mail, 
  HeartHandshake
} from 'lucide-react';
import { LinkedInIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function TestimonialsPage() {
  const { testimonialsNotice, personalInfo } = portfolioData;

  // Categories of feedback that Mohammed actively welcomes
  const feedbackCategories = [
    {
      title: "Managers & Program Leaders",
      description: "Observations on reliability, coordination, LMS administration, and project execution."
    },
    {
      title: "Colleagues & Collaborators",
      description: "Feedback on cross-functional teamwork, problem-solving, and communication."
    },
    {
      title: "Facilitators & Subject Matter Experts",
      description: "Reflections on session coordination, slide support, and material preparation."
    },
    {
      title: "Learners & Workshop Participants",
      description: "Direct learner feedback on session engagement, clarity, and practical takeaways."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '3.5rem' }}>
      <div className="container container-narrow">
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="eyebrow">
            <MessageSquare size={14} /> Endorsements & Feedback
          </span>
          <h1>Testimonials & Learner Voice</h1>
          <p className="section-description">
            Perspectives from managers, colleagues, mentors, and participants.
          </p>
        </div>

        {/* Primary Tasteful Placeholder Card requested by user */}
        <div 
          className="card" 
          style={{ 
            padding: '2.5rem', 
            textAlign: 'center', 
            border: '1px solid rgba(13, 148, 136, 0.3)', 
            backgroundColor: 'var(--bg-accent-subtle)',
            marginBottom: '3rem'
          }}
        >
          <div 
            style={{ 
              width: '3.5rem', 
              height: '3.5rem', 
              borderRadius: '50%', 
              backgroundColor: '#ffffff', 
              color: 'var(--accent-teal)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}
            aria-hidden="true"
          >
            <Quote size={28} />
          </div>

          <h2 style={{ fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>
            {testimonialsNotice.title}
          </h2>

          <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontWeight: 500, maxWidth: '600px', margin: '0 auto 1rem', lineHeight: '1.6' }}>
            "{testimonialsNotice.statusMessage}"
          </p>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            {testimonialsNotice.explanation} Fictional endorsements are never generated to maintain full professional authenticity.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <LinkedInIcon size={15} /> Connect on LinkedIn
            </a>
            <a href={personalInfo.contactEmail} className="btn btn-secondary btn-sm">
              <Mail size={15} /> Share a Recommendation
            </a>
          </div>
        </div>

        {/* Structured Framework for Upcoming Testimonials */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Feedback Framework
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            As genuine feedback and written recommendations are received, they are cataloged according to four core collaboration areas:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {feedbackCategories.map((cat, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <HeartHandshake size={18} style={{ color: 'var(--accent-teal)' }} />
                  <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{cat.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.55', margin: 0 }}>
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to connect banner */}
        <div className="card" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Collaborated With Mohammed?</h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 1.25rem' }}>
            {testimonialsNotice.callToAction}
          </p>
          <a href={personalInfo.contactEmail} className="btn btn-primary btn-sm">
            <Mail size={15} /> Send Feedback or Message
          </a>
        </div>
      </div>
    </div>
  );
}
