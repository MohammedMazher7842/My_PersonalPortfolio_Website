import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 style={{ marginBottom: '0.35rem', fontSize: '1.25rem' }}>
              {portfolioData.personalInfo.name}
            </h3>
            <p style={{ color: 'var(--accent-teal-dark)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>
              {portfolioData.personalInfo.headline}
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              {portfolioData.personalInfo.supportingStatement}
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Navigation</h4>
            <NavLink to="/" className="footer-link">Home</NavLink>
            <NavLink to="/about" className="footer-link">About</NavLink>
            <NavLink to="/experience" className="footer-link">Experience</NavLink>
            <NavLink to="/skills" className="footer-link">Skills</NavLink>
            <NavLink to="/certificates" className="footer-link">Certificates</NavLink>
            <NavLink to="/testimonials" className="footer-link">Testimonials</NavLink>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Connect</h4>
            <a 
              href={portfolioData.personalInfo.contactEmail} 
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Mail size={16} /> Email Me
            </a>
            <a 
              href={portfolioData.personalInfo.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <LinkedInIcon size={16} /> LinkedIn Profile
            </a>
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <GitHubIcon size={16} /> GitHub Repository
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} Mohammed Mazher Pasha. All rights reserved.</p>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            Built with care for learners and organizations
          </p>
        </div>
      </div>
    </footer>
  );
}
