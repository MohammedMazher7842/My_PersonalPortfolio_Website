import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { content } from './content';
import { Menu, X } from 'lucide-react';

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
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
          <NavLink to="/work" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>WORK</NavLink>
          <NavLink to="/lab" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>LEARNING LAB</NavLink>
          <NavLink to="/thinking" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>THINKING</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>ABOUT</NavLink>
          <NavLink to="/resume" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>RESUME</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>CONTACT</NavLink>
          <a href={content.personalInfo.contactEmail} className="text-accent" style={{marginLeft: '1rem', fontWeight: 500}}>Let's Connect</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem'}} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>HOME</NavLink>
          <NavLink to="/work" onClick={() => setIsOpen(false)}>WORK</NavLink>
          <NavLink to="/lab" onClick={() => setIsOpen(false)}>LEARNING LAB</NavLink>
          <NavLink to="/thinking" onClick={() => setIsOpen(false)}>THINKING</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>ABOUT</NavLink>
          <NavLink to="/resume" onClick={() => setIsOpen(false)}>RESUME</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer>
    <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div>
        <p className="serif" style={{fontWeight: 600}}>{content.personalInfo.name}</p>
        <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>{content.personalInfo.role}</p>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <a href={content.personalInfo.linkedIn} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
        <a href={content.personalInfo.contactEmail} className="nav-link">Email</a>
      </div>
    </div>
  </footer>
);

// Pages
const Home = () => (
  <div className="page-enter-active">
    <section className="hero container">
      <div className="hero-content">
        <span className="eyebrow">Transformational L&D × Technology</span>
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
    </section>

    <section className="section container">
      <h2 className="serif" style={{marginBottom: '3rem'}}>What I Work On</h2>
      <div className="grid-2">
        {content.whatIWorkOn.map(item => (
          <div key={item.id} className="card">
            <div className="card-number">{item.id}</div>
            <h3 style={{marginBottom: '1rem', fontSize: '1.25rem'}}>{item.title}</h3>
            <p style={{color: 'var(--text-secondary)'}}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section container">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem'}}>
        <h2 className="serif">Selected Work</h2>
        <NavLink to="/work" className="text-accent" style={{fontWeight: 500}}>View all &rarr;</NavLink>
      </div>
      <div className="grid-2">
        {content.projects.slice(0, 4).map(project => (
          <div key={project.slug} className="card" style={{display: 'flex', flexDirection: 'column'}}>
            <span className="eyebrow">{project.category}</span>
            <h3 style={{marginBottom: '1rem'}}>{project.title}</h3>
            <p style={{color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1}}>{project.shortDescription}</p>
            <NavLink to={`/work/${project.slug}`} className="btn btn-secondary" style={{alignSelf: 'flex-start'}}>View Case Study</NavLink>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Work = () => (
  <div className="container section page-enter-active">
    <h1 className="serif" style={{marginBottom: '3rem'}}>Selected Work</h1>
    <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
      {content.projects.map((project, idx) => (
        <div key={project.slug} style={{borderTop: '1px solid var(--border-color)', paddingTop: '3rem'}} className="grid-2">
          <div>
            <span className="eyebrow">0{idx + 1} &mdash; {project.category}</span>
            <h2 style={{marginBottom: '1.5rem'}}>{project.title}</h2>
            <NavLink to={`/work/${project.slug}`} className="btn btn-secondary">View Case Study</NavLink>
          </div>
          <div>
            <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)'}}>{project.shortDescription}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CaseStudy = () => {
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
      <header className="container section" style={{paddingBottom: '2rem'}}>
        <span className="eyebrow">{project.category}</span>
        <h1 className="serif">{project.title}</h1>
      </header>
      <div className="container">
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {sections.map((sec, idx) => (
            <div key={idx} style={{marginBottom: '4rem'}}>
              <span className="eyebrow" style={{color: 'var(--accent)'}}>0{idx + 1} &mdash; {sec.title}</span>
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

const LearningLab = () => (
  <div className="container section page-enter-active">
    <div style={{maxWidth: '800px', marginBottom: '4rem'}}>
      <h1 className="serif">Learning Lab</h1>
      <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '1rem'}}>
        Experiments at the intersection of learning, technology and human behaviour.
      </p>
    </div>
    
    <div className="grid-2">
      {content.learningLab.map(exp => (
        <div key={exp.id} className="card">
          <div className="card-number">{exp.id}</div>
          <h3 style={{marginBottom: '2rem', fontSize: '1.25rem'}}>{exp.title}</h3>
          
          <div style={{marginBottom: '1.5rem'}}>
            <span className="eyebrow">Question</span>
            <p>{exp.question}</p>
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <span className="eyebrow">Hypothesis</span>
            <p style={{color: 'var(--text-secondary)'}}>{exp.hypothesis}</p>
          </div>
          
          <div style={{marginBottom: '1.5rem'}}>
            <span className="eyebrow">Experiment</span>
            <p style={{color: 'var(--text-secondary)'}}>{exp.experiment}</p>
          </div>
          
          <div style={{paddingTop: '1rem', borderTop: '1px solid var(--border-color)'}}>
            <span className="eyebrow">Learning</span>
            <p style={{color: 'var(--accent)'}}>{exp.learning}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Thinking = () => (
  <div className="container section page-enter-active">
    <div style={{maxWidth: '800px', marginBottom: '4rem'}}>
      <h1 className="serif">How I Think About Learning</h1>
    </div>
    
    <div style={{display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px'}}>
      {content.principles.map(principle => (
        <div key={principle.id} style={{paddingLeft: '2rem', borderLeft: '2px solid var(--text-primary)'}}>
          <span className="eyebrow" style={{color: 'var(--accent)'}}>{principle.id}</span>
          <h2 className="serif" style={{marginBottom: '1rem', fontSize: '1.75rem'}}>{principle.title}</h2>
          <p style={{fontSize: '1.125rem', color: 'var(--text-secondary)'}}>{principle.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="container section page-enter-active">
    <div style={{maxWidth: '800px', marginBottom: '4rem'}}>
      <h1 className="serif" style={{marginBottom: '1.5rem'}}>Learning is where people, performance and possibility meet.</h1>
      <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)'}}>{content.personalInfo.aboutMeIntro}</p>
    </div>

    <div className="grid-2" style={{marginBottom: '6rem'}}>
      {content.aboutDimensions.map((dim, idx) => (
        <div key={idx} style={{borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
          <h3 className="serif" style={{marginBottom: '1rem'}}>{dim.title}</h3>
          <p style={{color: 'var(--text-secondary)'}}>{dim.description}</p>
        </div>
      ))}
    </div>

    <h2 className="serif" style={{marginBottom: '3rem'}}>Skills Ecosystem</h2>
    <div className="grid-2" style={{marginBottom: '6rem'}}>
      {Object.entries(content.skills).map(([category, skills]) => (
        <div key={category} className="card">
          <span className="eyebrow">{category}</span>
          <ul style={{listStyle: 'none', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
            {skills.map(skill => (
              <li key={skill} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <div style={{width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%'}}></div>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Resume = () => (
  <div className="container section page-enter-active" style={{maxWidth: '800px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem'}}>
      <h1 className="serif">Resume</h1>
      <a href={content.personalInfo.resumeLink} className="btn btn-primary" target="_blank" rel="noreferrer">Download Resume</a>
    </div>

    <div style={{marginBottom: '4rem'}}>
      <span className="eyebrow">Professional Summary</span>
      <p style={{fontSize: '1.125rem'}}>{content.resume.summary}</p>
    </div>

    <div style={{marginBottom: '4rem'}}>
      <span className="eyebrow" style={{marginBottom: '2rem'}}>Experience</span>
      <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
        {content.resume.experience.map((exp, idx) => (
          <div key={idx}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem'}}>
              <h3 style={{fontSize: '1.25rem'}}>{exp.role}</h3>
              <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>{exp.period}</span>
            </div>
            <p style={{fontWeight: 500, marginBottom: '1rem'}}>{exp.company}</p>
            <ul style={{listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem'}}>
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx} style={{position: 'relative'}}>
                  <span style={{position: 'absolute', left: '-1rem', color: 'var(--accent)'}}>&bull;</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="container section page-enter-active" style={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{maxWidth: '600px'}}>
      <h1 className="serif" style={{marginBottom: '1.5rem'}}>Let's build something that helps people grow.</h1>
      <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem'}}>
        Interested in learning, technology, leadership development or building better learning experiences? Let's connect.
      </p>
      <div style={{display: 'flex', gap: '1rem'}}>
        <a href={content.personalInfo.contactEmail} className="btn btn-primary">Email Me</a>
        <a href={content.personalInfo.linkedIn} className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>
);

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
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
