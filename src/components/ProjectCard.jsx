import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-header">
        <span className="project-meta-pill">{project.subtitle}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>

      <div className="project-block">
        <span className="project-label">Problem / Opportunity</span>
        <p className="project-text">{project.problem}</p>
      </div>

      <div className="project-block">
        <span className="project-label">My Contribution</span>
        <p className="project-text">{project.contribution}</p>
      </div>

      <div className="project-block">
        <span className="project-label">Verified Outcome / Status</span>
        <p className="project-text" style={{ color: 'var(--text-main)', fontWeight: 500 }}>
          {project.outcome}
        </p>
      </div>

      <div className="project-tags" aria-label="Tools and methods used">
        {project.tools.map((tool, idx) => (
          <span key={idx} className="badge-tag">
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}
