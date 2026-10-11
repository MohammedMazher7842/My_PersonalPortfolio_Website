/**
 * Portfolio Data File for Mohammed Mazher Pasha
 * 
 * Clean, organized, authentic, and learner-friendly.
 * Update your information directly in this file without modifying component logic.
 */

export const portfolioData = {
  personalInfo: {
    name: "Mohammed Mazher Pasha",
    headline: "Senior Learning & Development Professional",
    subheadline: "Organizational Development | Learning Technology | AI-Enabled Learning",
    positioningStatement: "I bring together learning, technology, and organizational development to help people grow and work more effectively.",
    supportingStatement: "From training employees and leaders to managing a digital learning platform and facilitating organization-wide learning initiatives, my journey is focused on making learning practical, meaningful, and relevant to real work.",
    intersectionStatement: "Working at the intersection of people development, learning technology, and organizational growth.",
    
    // Current Role Details
    currentRole: {
      title: "Senior Learning & Development Professional",
      organization: "WyzMindz Solutions",
      department: "Organizational Development (OD) Team",
      reporting: "Reporting directly to the CMD",
      relationshipSummary: "Part of the OD team, working closely with the CMD of the company on organizational learning and development priorities."
    },

    contactEmail: "mailto:mohammedmazher.ld@example.com", // Replace with your verified email
    emailDisplay: "mohammedmazher.ld@example.com",
    linkedIn: "https://www.linkedin.com/in/", // Replace with your actual LinkedIn profile
    github: "https://github.com/MohammedMazher7842",
    location: "India",
    
    // Professional photograph
    isDemoPhoto: false,
    photoUrl: "images/mohammed-mazher-pasha.jpg",
    photoAlt: "Mohammed Mazher Pasha - Senior Learning & Development Professional",
    photoNote: "",
  },

  // Three Core Professional Focus Areas (Home Page)
  focusAreas: [
    {
      id: "leadership",
      title: "Learning & Leadership Development",
      description: "Delivering Theory U workshops, leadership awareness sessions, and interactive facilitation to help employees navigate organizational challenges.",
      icon: "BookOpen"
    },
    {
      id: "tech-ai",
      title: "Learning Technology, AI & Analytics",
      description: "Managing Suryojasvi Learning Academy (Moodle LMS), conducting AI training across the organization, and creating visual learning metrics.",
      icon: "Laptop"
    },
    {
      id: "od",
      title: "Organizational Development",
      description: "Working closely with executive leadership to support OD initiatives that bridge individual capability building with organizational priorities.",
      icon: "Sparkles"
    }
  ],

  // Career Progression Journey (Process Trainer -> Software Trainer -> Senior L&D)
  careerProgression: [
    {
      stage: "01",
      title: "Process Trainer",
      organization: "Altruist Technologies Private Limited",
      process: "Airtel Black",
      period: "26 March 2021 – 30 November 2022",
      summary: "Building a foundation in facilitation and learner engagement while training Airtel Black employees and leaders."
    },
    {
      stage: "02",
      title: "Software Trainer",
      organization: "Learning Technology & Systems",
      process: "LMS & Digital Learning",
      period: "Transition & Growth",
      summary: "Taking responsibility for the Moodle LMS that became Suryojasvi Learning Academy, along with digital content creation and online workshops."
    },
    {
      stage: "03",
      title: "Senior Learning & Development Professional",
      organization: "WyzMindz Solutions",
      process: "Organizational Development (OD)",
      period: "Current Role",
      summary: "Expanding into AI training, Theory U facilitation, and OD initiatives while working closely with the CMD."
    }
  ],

  // Current Role: WyzMindz Solutions
  currentRoleExperience: {
    title: "Senior Learning & Development Professional",
    organization: "WyzMindz Solutions",
    department: "Organizational Development (OD) Team",
    reporting: "Reporting directly to the CMD",
    period: "Current",
    summary: "As part of the Organizational Development team reporting directly to the CMD, I work closely with executive leadership on organizational learning priorities, cross-functional AI training, Theory U delivery, and LMS management.",
    responsibilities: [
      "Supporting Organizational Development initiatives across the company.",
      "Working closely with the CMD on organizational learning and development priorities.",
      "Conducting AI training programs across the organization.",
      "Delivering Theory U training to employees across the organization.",
      "Managing and contributing to Suryojasvi Learning Academy, the organization's Moodle-based Learning Management System.",
      "Creating learning content and facilitating online workshops.",
      "Supporting learning experiences that connect individual development with organizational needs."
    ]
  },

  // Airtel Black Training Experience (Altruist Technologies)
  airtelBlackExperience: {
    role: "Process Trainer",
    company: "Altruist Technologies Private Limited",
    process: "Airtel Black",
    period: "26 March 2021 – 30 November 2022",
    summary: "Delivered interactive process training across the Airtel Black process, laying a solid foundation in facilitation, learner engagement, and batch management.",
    metrics: [
      { value: "500+", label: "Employees Trained", note: "Cumulative training experience across batches" },
      { value: "50+", label: "Leaders Trained", note: "Process alignment and supervisory enablement" },
      { value: "20–30", label: "Learners per Batch", note: "Interactive cohort size for effective learning" },
      { value: "~30", label: "Training Sessions", note: "Structured training delivery batches" }
    ],
    details: [
      "Facilitated end-to-end training batches of approximately 20–30 learners per batch.",
      "Trained more than 500 frontline employees in the Airtel Black customer process.",
      "Delivered process orientation and training to more than 50 team leaders and supervisors.",
      "Conducted approximately 30 structured training sessions to build operational readiness and process understanding."
    ]
  },

  // Featured Theory U Section
  theoryU: {
    sectionTitle: "Theory U: Bringing Leadership and Awareness into Practice",
    headline: "Transformational Leadership & Awareness",
    description: "Having completed certification in Theory U concepts through Manoj Omkar, I now facilitate learning sessions to help employees explore leadership, listening, awareness, and new ways of approaching organizational challenges.",
    certificationTitle: "Creating Future Ready Organizations (Theory U Concepts)",
    certifyingOrganization: "Management Innovations (Vision to Implementation)",
    programDirector: "Manoj Onkar",
    completionDate: "May 2026",
    certificateNumber: "MI-CFRO-MAY-2026-128",
    certificateImage: "images/certificates/theory-u-creating-future-ready-organizations.jpg",
    trainingFocusAreas: [
      {
        title: "Deeper Listening & Awareness",
        description: "Helping individuals move beyond habitual reactions toward open listening and empathetic perspective-taking."
      },
      {
        title: "Approaching Organizational Challenges",
        description: "Creating safe spaces to examine collective patterns and explore new, constructive ways of solving workplace problems."
      },
      {
        title: "Translating Reflection into Practice",
        description: "Guiding learners to prototype practical behaviors that support organizational renewal and collaboration."
      }
    ]
  },

  // Verified Certificates Gallery
  verifiedCertificates: [
    {
      id: "theory-u",
      title: "Creating Future Ready Organizations",
      subtitle: "Theory U Concepts & Leadership Awareness",
      organization: "Management Innovations",
      programDirector: "Manoj Onkar",
      completionDate: "May 2026",
      certificateNumber: "MI-CFRO-MAY-2026-128",
      image: "images/certificates/theory-u-creating-future-ready-organizations.jpg",
      description: "Immersive workshop certification in Theory U concepts, focusing on leadership, active listening, awareness, and organizational capability building.",
      verified: true
    },
    {
      id: "outskill-genai",
      title: "Gen AI Engineering Mastermind",
      subtitle: "Certificate of Completion",
      organization: "Outskill",
      programDirector: "Ramanathan, Vishnuvardhan BKM & Vaibhav Sisinty",
      completionDate: "Verified",
      certificateNumber: "Outskill Mastermind Credential",
      image: "images/certificates/outskill-gen-ai-mastermind.jpg",
      documentUrl: "documents/certificates/outskill-gen-ai-mastermind.pdf",
      description: "Hands-on certification in Generative AI architectures, prompt design, and AI workflow integration for modern applications.",
      verified: true
    }
  ],

  // Selected Projects Showcase
  selectedProjects: [
    {
      slug: "suryojasvi-learning-academy",
      title: "Suryojasvi Learning Academy",
      subtitle: "Learning Management System & Digital Learning",
      problem: "Multiple business units required a centralized digital learning platform to access training courses, monitor participation, and standardize employee development.",
      contribution: "Managing and contributing to Suryojasvi Learning Academy on Moodle LMS. Structured course categories, user enrollments, content modules, and completion reporting.",
      tools: ["Moodle LMS", "Digital Learning Tools", "Online Workshop Systems", "Spreadsheet Tracking"],
      outcome: "Established a functional, centralized enterprise learning hub with active enrollment tracking and course accessibility.",
      outcomeStatus: "Active enterprise LMS management"
    },
    {
      slug: "theory-u-leadership-sessions",
      title: "Theory U Leadership & Awareness Sessions",
      subtitle: "Leadership Facilitation & Organizational Development",
      problem: "Employees and teams needed structured spaces to step back from routine pressures, practice open listening, and address organizational challenges constructively.",
      contribution: "Certified under Manoj Omkar, designing and delivering Theory U training sessions across the organization to cultivate awareness and empathetic leadership.",
      tools: ["Theory U Framework", "Interactive Facilitation", "Reflective Inquiry", "Dialogue Spaces"],
      outcome: "Conducted organization-wide learning sessions fostering open communication, active listening, and fresh approaches to collaborative problem-solving.",
      outcomeStatus: "Active ongoing delivery"
    },
    {
      slug: "ai-training-programs",
      title: "Organization-Wide AI Training Programs",
      subtitle: "AI-Enabled Learning & Capability Building",
      problem: "Bridging the gap between emerging Generative AI tools and practical workplace adoption for non-technical and business teams.",
      contribution: "Certified in Gen AI Engineering, conceptualized and delivered practical AI training sessions across departments to demonstrate responsible AI prompt workflows and content generation.",
      tools: ["Generative AI", "Workflow Automation", "Prompt Engineering", "Instructional Aids"],
      outcome: "Empowered employees across departments to safely experiment with AI tools for drafting, brainstorming, and daily productivity.",
      outcomeStatus: "Ongoing training rollout"
    },
    {
      slug: "airtel-black-process-enablement",
      title: "Airtel Black Process Enablement",
      subtitle: "Cumulative Process & Leadership Training",
      problem: "Rapidly onboard and upskill frontline associates and supervisory leaders on complex telecommunications and billing workflows in the Airtel Black line of business.",
      contribution: "Served as Process Trainer at Altruist Technologies, facilitating 30 structured cohorts for batches of 20–30 learners each.",
      tools: ["Process Training Methodology", "Batch Management", "Performance Coaching", "Feedback Systems"],
      outcome: "Successfully trained 500+ frontline employees and 50+ leaders in process standards and customer engagement.",
      outcomeStatus: "Completed (26 Mar 2021 – 30 Nov 2022)"
    }
  ],

  about: {
    introduction: "Hello! I am Mohammed Mazher Pasha, a Senior Learning & Development Professional working at WyzMindz Solutions.",
    journey: "My career has evolved through three meaningful phases: from laying strong facilitation foundations as a Process Trainer for Airtel Black at Altruist Technologies, to managing learning technology and the Moodle-based Suryojasvi Learning Academy as a Software Trainer, to now leading Organizational Development initiatives, AI training, and Theory U workshops while working directly with the CMD at WyzMindz Solutions.",
    approachPrinciples: [
      {
        title: "Learning Should Change Behavior",
        description: "Information delivery by itself does not produce growth. Real learning occurs when concepts are applied in everyday work to build lasting habits."
      },
      {
        title: "Training is an Event; Learning is a Journey",
        description: "One-off workshops fade quickly without contextual practice, constructive feedback, psychological safety, and continuous reinforcement."
      },
      {
        title: "Awareness & Empathy Guide Leadership",
        description: "Drawing on Theory U, true leadership begins with active listening, letting go of habitual judgment, and seeing challenges from the collective viewpoint."
      },
      {
        title: "Technology & AI as Practical Enablers",
        description: "Whether managing Moodle or conducting AI training, technology must simplify work, enhance human potential, and reduce unnecessary friction."
      }
    ],
    growthGoals: [
      "Deepening organizational development interventions that support strategic leadership priorities.",
      "Expanding organization-wide Theory U facilitation to foster collaborative, reflective team cultures.",
      "Scaling AI enablement programs to help employees apply Generative AI responsibly in daily work.",
      "Advancing learning analytics to connect platform engagement with tangible workplace performance."
    ],
    organizationalContribution: [
      "Collaborating closely with executive leadership to translate strategic priorities into actionable learning experiences.",
      "Delivering interactive, psychologically safe workshops in Theory U, AI literacy, and operational processes.",
      "Managing robust LMS operations (Suryojasvi Learning Academy) to ensure seamless course access for all employees.",
      "Bridging individual learner aspirations with overarching organizational development objectives."
    ]
  },

  skillsCategories: [
    {
      category: "Learning & Development",
      description: "Core competencies in designing and orchestrating human-centered learning journeys.",
      skills: [
        "Training facilitation",
        "Theory U facilitation",
        "Learning program coordination",
        "Learning content development",
        "Learner onboarding experience",
        "Needs assessment support"
      ]
    },
    {
      category: "Organizational Development & Leadership",
      description: "Supporting executive priorities, leadership awareness, and cultural alignment.",
      skills: [
        "OD initiative support",
        "CMD collaboration & reporting",
        "Theory U leadership concepts",
        "Deep listening & dialogue facilitation",
        "Cross-functional team alignment",
        "Culture & engagement initiatives"
      ]
    },
    {
      category: "Learning Technology",
      description: "Platforms and digital tools that power accessible, structured learning.",
      skills: [
        "Moodle LMS administration",
        "Suryojasvi Learning Academy management",
        "Digital learning tools",
        "Course setup & user enrollment",
        "Online workshop facilitation"
      ]
    },
    {
      category: "AI & Innovation",
      description: "Conducting AI training programs and applying Generative AI responsibly.",
      skills: [
        "AI training program delivery",
        "Generative AI for workplace learning",
        "Prompt engineering for training content",
        "AI-assisted workflow optimization",
        "Gen AI engineering fundamentals"
      ]
    },
    {
      category: "Process Training & Data",
      description: "Proven experience in batch facilitation, process enablement, and reporting.",
      skills: [
        "Process training delivery (Airtel Black)",
        "Cohort & batch management (20–30 learners)",
        "Leader & supervisor enablement",
        "Excel and Google Sheets reporting",
        "Attendance & completion tracking"
      ]
    }
  ],

  certificatesNotice: {
    title: "Certificates & Professional Credentials",
    statusMessage: "Verified credentials from Management Innovations and Outskill are cataloged below.",
    instruction: "Each verified card includes the issuing organization, program director, completion details, and high-resolution credential preview."
  },

  testimonialsNotice: {
    title: "Recommendations & Learner Feedback",
    statusMessage: "Professional recommendations and learner feedback will be added here as they become available.",
    explanation: "This space is reserved for genuine, unedited feedback from managers, colleagues, stakeholders, and workshop participants.",
    callToAction: "Have we worked together on a learning program, platform implementation, or workshop? I would welcome your authentic feedback."
  }
};
