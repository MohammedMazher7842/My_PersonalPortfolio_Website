import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { content } from './content';
import { Menu, X, PlayCircle, Quote, ArrowRight } from 'lucide-react';

// Intersection Observer for scroll animations
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo serif" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
          {content.personalInfo.name}
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/work" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Work</NavLink>
          <NavLink to="/lab" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Learning Lab</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <a href={content.personalInfo.contactEmail} className="btn btn-primary" style={{marginLeft: '1rem', padding: '0.5rem 1rem'}}>Let's Connect</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem'}} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <NavLink to="/work" onClick={() => setIsOpen(false)} style={{fontSize: '1.125rem'}}>Work</NavLink>
          <NavLink to="/lab" onClick={() => setIsOpen(false)} style={{fontSize: '1.125rem'}}>Learning Lab</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} style={{fontSize: '1.125rem'}}>About</NavLink>
          <a href={content.personalInfo.contactEmail} onClick={() => setIsOpen(false)} style={{fontSize: '1.125rem', color: 'var(--accent)', fontWeight: 500}}>Let's Connect</a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer>
    <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem'}}>
      <div>
        <p className="serif" style={{fontWeight: 600, fontSize: '1.5rem'}}>{content.personalInfo.name}</p>
        <p style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>{content.personalInfo.role}</p>
      </div>
      <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
        <a href={content.personalInfo.linkedIn} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
        <a href={content.personalInfo.contactEmail} className="nav-link">Email</a>
        <NavLink to="/about" className="nav-link">Resume</NavLink>
      </div>
    </div>
  </footer>
);

// Pages
const Home = () => {
  useScrollReveal();
  
  return (
    <div className="page-enter-active">
      <section className="hero container grid-2" style={{alignItems: 'center'}}>
        <div className="hero-content reveal-on-scroll stagger-1">
          <span className="eyebrow" style={{color: 'var(--accent)'}}>Transformational L&D × Technology</span>
          <h1 className="serif">
            {content.personalInfo.headline}
          </h1>
          <p className="hero-subtitle">
            {content.personalInfo.subHeadline}
          </p>
          <div className="hero-actions">
            <NavLink to="/work" className="btn btn-primary">Explore My Work</NavLink>
            <NavLink to="/about" className="btn btn-secondary">About Me</NavLink>
          </div>
        </div>
        <div className="hero-image-wrapper reveal-on-scroll stagger-2">
          <img src={content.personalInfo.heroImage} alt="Mohammed Mazher at work" className="hero-image" />
          <div className="color-accent-block"></div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section bg-dark text-light reveal-on-scroll">
        <div className="container grid-4">
          {content.metrics.map((metric, idx) => (
            <div key={idx} className="metric-box">
              <h2 className="serif text-accent hover-scale" style={{fontSize: '3.5rem', marginBottom: '0.5rem'}}>{metric.value}</h2>
              <span className="eyebrow" style={{color: 'rgba(255,255,255,0.7)'}}>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What I Work On - Accent Background */}
      <section className="section bg-accent text-light reveal-on-scroll">
        <div className="container">
          <h2 className="serif" style={{marginBottom: '4rem'}}>What I Work On</h2>
          <div className="grid-2">
            {content.whatIWorkOn.map((item, idx) => (
              <div key={item.id} className="card-transparent hover-lift">
                <div className="card-number-light">0{idx + 1}</div>
                <h3 style={{marginBottom: '1rem', fontSize: '1.25rem', letterSpacing: '1px'}}>{item.title}</h3>
                <p style={{color: 'rgba(255,255,255,0.8)'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section container reveal-on-scroll">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem'}}>
          <h2 className="serif">Selected Work</h2>
          <NavLink to="/work" className="text-accent" style={{fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            View all projects <ArrowRight size={16} />
          </NavLink>
        </div>
        <div className="grid-2">
          {content.projects.slice(0, 2).map(project => (
            <div key={project.slug} className="card project-card hover-lift">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div style={{padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <span className="eyebrow">{project.category}</span>
                <h3 style={{marginBottom: '1rem'}}>{project.title}</h3>
                <p style={{color: 'var(--text-secondary)', marginBottom: '2.5rem', flex: 1}}>{project.shortDescription}</p>
                <NavLink to={`/work/${project.slug}`} className="btn btn-secondary" style={{alignSelf: 'flex-start'}}>View Case Study</NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Videos Section */}
      <section className="section bg-light reveal-on-scroll">
        <div className="container">
          <h2 className="serif" style={{marginBottom: '3rem'}}>Training & Facilitation</h2>
          <div className="grid-3">
            {content.videos.map(video => (
              <a key={video.id} href={video.videoUrl} target="_blank" rel="noreferrer" className="video-card hover-lift">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button-overlay">
                    <PlayCircle size={64} strokeWidth={1} />
                  </div>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--bg-color)'}}>
                  <h4 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>{video.title}</h4>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>{video.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container reveal-on-scroll">
        <h2 className="serif text-center" style={{marginBottom: '4rem'}}>What People Say</h2>
        <div className="grid-3">
          {content.testimonials.map(t => (
            <div key={t.id} className="testimonial-card hover-lift">
              <Quote size={32} color="var(--highlight)" style={{marginBottom: '1.5rem', opacity: 0.8}} />
              <p style={{fontStyle: 'italic', marginBottom: '2.5rem', flex: 1, fontSize: '1.1rem', lineHeight: 1.7}}>{t.quote}</p>
              <div style={{borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
                <p style={{fontWeight: 600, fontSize: '0.95rem'}}>{t.name}</p>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.85rem'}}>{t.title}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Work = () => {
  useScrollReveal();
  return (
    <div className="container section page-enter-active">
      <h1 className="serif reveal-on-scroll" style={{marginBottom: '4rem', fontSize: '4rem'}}>Selected Work</h1>
      <div className="grid-2">
        {content.projects.map((project, idx) => (
          <div key={project.slug} className="card project-card reveal-on-scroll hover-lift">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div style={{padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
              <span className="eyebrow" style={{color: 'var(--accent)'}}>0{idx + 1} &mdash; {project.category}</span>
              <h3 style={{marginBottom: '1rem', fontSize: '1.5rem'}}>{project.title}</h3>
              <p style={{color: 'var(--text-secondary)', marginBottom: '2.5rem', flex: 1}}>{project.shortDescription}</p>
              <NavLink to={`/work/${project.slug}`} className="btn btn-secondary" style={{alignSelf: 'flex-start'}}>View Case Study</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseStudy = () => {
  useScrollReveal();
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const project = content.projects.find(p => p.slug === slug);

  if (!project) return <div className="container section">Project not found</div>;

  const sections = [
    { title: "THE CHALLENGE", content: project.challenge },
    { title: "THE CONTEXT", content: project.context },
    { title: "MY ROLE", content: project.role },
    { title: "THE APPROACH", content: project.approach },
    { title: "WHAT I BUILT", content: project.solution },
    { title: "TECHNOLOGY", content: project.technology.join(", ") },
    { title: "LEARNING DESIGN", content: project.learningDesign },
    { title: "IMPACT", content: project.impact },
    { title: "WHAT I LEARNED", content: project.learnings },
    { title: "WHAT I WOULD DO NEXT", content: project.nextSteps },
  ];

  return (
    <div className="page-enter-active">
      <div className="reveal-on-scroll" style={{ width: '100%', height: '50vh', overflow: 'hidden', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(17,17,17,0.2), rgba(17,17,17,0.8))' }}></div>
      </div>
      <header className="container section reveal-on-scroll stagger-1" style={{marginTop: '-8rem', position: 'relative', zIndex: 10, background: 'var(--bg-color)', padding: '4rem', boxShadow: '0 -20px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)'}}>
        <span className="eyebrow" style={{color: 'var(--accent)'}}>{project.category}</span>
        <h1 className="serif" style={{fontSize: '3rem'}}>{project.title}</h1>
      </header>
      <div className="container section" style={{paddingTop: '2rem'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {sections.map((sec, idx) => (
            <div key={idx} className="reveal-on-scroll" style={{marginBottom: '4rem', paddingLeft: '2rem', borderLeft: '2px solid var(--border-color)'}}>
              <span className="eyebrow" style={{color: 'var(--accent)', marginBottom: '1rem'}}>0{idx + 1} &mdash; {sec.title}</span>
              <div style={{fontSize: '1.125rem', color: 'var(--text-secondary)'}}>
                {sec.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LearningLab = () => {
  useScrollReveal();
  return (
    <div className="page-enter-active">
      <div className="bg-secondary text-light section" style={{paddingBottom: '8rem'}}>
        <div className="container reveal-on-scroll">
          <div style={{maxWidth: '800px'}}>
            <span className="eyebrow" style={{color: 'var(--highlight)'}}>R&D Space</span>
            <h1 className="serif" style={{fontSize: '4rem', marginBottom: '1.5rem'}}>Learning Lab</h1>
            <p style={{fontSize: '1.25rem', opacity: 0.9}}>
              Experiments at the intersection of learning, technology and human behaviour.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container" style={{marginTop: '-4rem'}}>
        <div className="grid-2">
          {content.learningLab.map(exp => (
            <div key={exp.id} className="card hover-lift reveal-on-scroll">
              <div className="card-number" style={{color: 'var(--accent)'}}>{exp.id}</div>
              <h3 style={{marginBottom: '2rem', fontSize: '1.35rem', lineHeight: 1.4}}>{exp.title}</h3>
              
              <div style={{marginBottom: '1.5rem'}}>
                <span className="eyebrow">Question</span>
                <p style={{fontWeight: 500}}>{exp.question}</p>
              </div>
              
              <div style={{marginBottom: '1.5rem'}}>
                <span className="eyebrow">Hypothesis</span>
                <p style={{color: 'var(--text-secondary)'}}>{exp.hypothesis}</p>
              </div>
              
              <div style={{marginBottom: '1.5rem'}}>
                <span className="eyebrow">Experiment</span>
                <p style={{color: 'var(--text-secondary)'}}>{exp.experiment}</p>
              </div>
              
              <div style={{paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)'}}>
                <span className="eyebrow">Learning</span>
                <p style={{color: 'var(--accent)', fontWeight: 500}}>{exp.learning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container section">
        <div className="bg-light reveal-on-scroll" style={{padding: '4rem', border: '1px solid var(--border-color)'}}>
          <h2 className="serif" style={{marginBottom: '3rem'}}>How I Think About Learning</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            {content.principles.map(principle => (
              <div key={principle.id} className="hover-lift" style={{paddingLeft: '2rem', borderLeft: '2px solid var(--accent)'}}>
                <span className="eyebrow" style={{color: 'var(--text-secondary)'}}>{principle.id}</span>
                <h3 className="serif" style={{marginBottom: '1rem', fontSize: '1.75rem'}}>{principle.title}</h3>
                <p style={{fontSize: '1.125rem', color: 'var(--text-secondary)'}}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  useScrollReveal();
  return (
    <div className="page-enter-active">
      <div className="container section">
        <div className="grid-2 reveal-on-scroll stagger-1" style={{alignItems: 'center', marginBottom: '8rem'}}>
          <div>
            <span className="eyebrow" style={{color: 'var(--accent)'}}>About Me</span>
            <h1 className="serif" style={{marginBottom: '1.5rem'}}>Learning is where people, performance and possibility meet.</h1>
            <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem'}}>{content.personalInfo.aboutMeIntro}</p>
            <div style={{display: 'flex', gap: '1rem'}}>
              <a href={content.personalInfo.resumeLink} className="btn btn-primary" target="_blank" rel="noreferrer">Download Resume</a>
              <a href={content.personalInfo.linkedIn} className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="profile-image-container hover-lift">
            <img src={content.personalInfo.profileImage} alt="Mohammed Mazher" className="profile-image" />
            <div className="color-accent-block"></div>
          </div>
        </div>

        <div className="grid-3 reveal-on-scroll" style={{marginBottom: '8rem'}}>
          {content.aboutDimensions.map((dim, idx) => (
            <div key={idx} style={{borderTop: '2px solid var(--text-primary)', paddingTop: '1.5rem'}} className="hover-lift">
              <h3 className="serif" style={{marginBottom: '1rem', fontSize: '1.5rem'}}>{dim.title}</h3>
              <p style={{color: 'var(--text-secondary)'}}>{dim.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-accent text-light section reveal-on-scroll">
        <div className="container">
          <h2 className="serif" style={{marginBottom: '4rem', fontSize: '3rem'}}>Skills Ecosystem</h2>
          <div className="grid-3">
            {Object.entries(content.skills).map(([category, skills]) => (
              <div key={category} className="card-transparent hover-lift">
                <span className="eyebrow" style={{color: 'var(--highlight)'}}>{category}</span>
                <ul style={{listStyle: 'none', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  {skills.map(skill => (
                    <li key={skill} style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
                      <div style={{width: '8px', height: '8px', background: 'var(--highlight)', borderRadius: '50%'}}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container section reveal-on-scroll" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2 className="serif" style={{marginBottom: '3rem', fontSize: '3rem'}}>Professional Journey</h2>
        <div style={{marginBottom: '4rem'}}>
          <p style={{fontSize: '1.125rem', marginBottom: '3rem', color: 'var(--text-secondary)'}}>{content.resume.summary}</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            {content.resume.experience.map((exp, idx) => (
              <div key={idx} className="hover-lift" style={{paddingLeft: '2rem', borderLeft: '2px solid var(--border-color)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem'}}>
                  <h3 style={{fontSize: '1.35rem', color: 'var(--text-primary)'}}>{exp.role}</h3>
                  <span style={{color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600}}>{exp.period}</span>
                </div>
                <p style={{fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)'}}>{exp.company}</p>
                <ul style={{listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{position: 'relative', paddingLeft: '1rem'}}>
                      <span style={{position: 'absolute', left: '0', color: 'var(--accent)'}}>&bull;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/lab" element={<LearningLab />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
