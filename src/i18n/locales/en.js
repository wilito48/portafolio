const en = {
  meta: {
    title: 'Kervyn Rojas — Junior Full Stack Developer',
  },
  ui: {
    language: 'Language',
    switchLanguage: 'Switch to Spanish',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    backToTop: 'Back to top',
    downloadCv: 'Download Resume',
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  profile: {
    role: 'Junior Full Stack Developer',
    availability: 'Open to new opportunities',
    location: 'Lima, Peru',
    summary:
      'Junior Full Stack Developer with 8 months of professional experience on multi-tenant SaaS products in production. I work with Node.js, TypeScript, React and React Native, with hands-on experience in webhook integrations, subscriptions and payments, multi-tenant security and Redis.',
  },
  hero: {
    greeting: "Hi, I'm",
    viewProjects: 'View Projects',
    contact: 'Get in Touch',
    photoAlt: (name) => `Photo of ${name}`,
    integrationsLabel: 'Integrations I have built',
    integrationsCaption: 'Integrations I shipped to production',
  },
  marquee: {
    label: 'Technologies I work with',
  },
  techLabels: {},
  about: {
    title: 'About Me',
    subtitle: 'My background, experience and education',
    storyTitle: 'My Story',
    story: [
      "I'm a Junior Full Stack Developer and a final-semester Computer Systems Engineering student at Universidad Privada del Norte in Lima, Peru.",
      'At STARSOFT I worked on the backend, web app and mobile app of two multi-tenant SaaS CRMs in production, including Meta, TikTok and Mailchimp integrations, Culqi subscriptions, multi-tenant security and Redis caching.',
      'Before that, at Asociación Tecnológica del Perú, I audited the security of their web platform, integrated login and sign-up through APIs and automated marketing content with AI. I want to keep building real products alongside a great team.',
    ],
    stats: {
      experience: 'Months of experience',
      commits: 'Commits in production',
      internships: 'Professional internships',
      projects: 'Projects',
    },
    experienceTitle: 'Experience',
    experience: {
      starsoft: {
        role: 'Programming Intern',
        period: 'Jun 2026 - Sep 2026',
        description:
          'STARSOFT CRM and Abatar CRM (abatarcrm.com): backend, web and mobile app of two multi-tenant SaaS CRMs in production.',
        stack: ['Node.js', 'TypeScript', 'React', 'React Native', 'Redis'],
        highlights: [
          'More than 500 commits across the backend, web and mobile apps of both products.',
          'Meta (WhatsApp, Instagram and Messenger), TikTok and Mailchimp integrations through webhooks.',
          'Culqi subscriptions: 3DS payments, reactivation, cancellation, add-ons and plan usage.',
          'Multi-tenant security: per-company isolation, JWT validation and token encryption.',
          'Caching and rate limiting with Redis; real-time chat with Socket.IO.',
          'AI agent for WhatsApp with LangChain and production incident handling (VPS, PM2).',
          'Sections of the abatarcrm.com marketing site with Next.js, Tailwind CSS and GSAP.',
        ],
      },
      atp: {
        role: 'Systems Engineering Intern',
        period: 'Jan 2026 - Apr 2026',
        description: 'Web security, functional testing, REST APIs, databases and AI automation.',
        stack: ['REST APIs', 'Web security', 'Databases', 'AI'],
        highlights: [
          'Security audit of the web platform: critical vulnerabilities, CVEs and a mitigation plan.',
          'Login and sign-up integration with the backend through APIs, with functional and performance testing.',
          'Database design to register and track prospect companies.',
          'Marketing content automation integrating Telegram with Meta AI.',
        ],
      },
      upn: {
        role: 'Computer Systems Engineering',
        period: 'Final semester',
        description: 'Final-semester student focused on software development and cybersecurity.',
        stack: [],
        highlights: [],
      },
    },
    traits: {
      organized: { title: 'Organized', text: 'Clear, structured methodologies for every project' },
      proactive: { title: 'Proactive', text: 'Initiative to learn new technologies and solve problems' },
      security: { title: 'Security', text: 'Multi-tenant isolation, JWT, encryption and vulnerability audits' },
      creative: { title: 'Creative', text: 'Practical solutions for real technical challenges' },
      curious: { title: 'Curious', text: 'Constant interest in new technologies, AI and best practices' },
      dedicated: { title: 'Dedicated', text: 'Committed to every delivery, from development to production' },
    },
    traitsTitle: 'How I work',
    educationTitle: 'Education',
    education: {
      degree: 'Computer Systems Engineering',
      institution: 'Universidad Privada del Norte – Lima, Peru',
      detail: 'Final semester',
      status: 'In progress',
    },
    certificationsTitle: 'Certifications',
    certifications: {
      cybersoc: { title: 'CyberSOC Analyst Level 1', issuer: 'Resility Academy (Jan 2025)' },
      ethicalHacking: {
        title: 'Cybersecurity: Ethical Hacking',
        issuer: 'Universidad Nacional de Ingeniería (UNI) - 20/20',
      },
      offensiveDefensive: {
        title: 'Ethical Hacking: Offensive and Defensive Basics',
        issuer: 'ExorciseThat Global Cybersecurity - 97/100',
      },
      fundamentals: { title: 'Cybersecurity Fundamentals', issuer: 'ITEC - 18/20' },
    },
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Technologies and tools I work with',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend & Mobile',
      data: 'Databases & AI',
      devops: 'Testing & DevOps',
    },
    languagesTitle: 'Languages',
    languages: {
      es: { name: 'Spanish', level: 'Native' },
      en: { name: 'English', level: 'Basic (technical reading)' },
    },
  },
  projects: {
    title: 'My Projects',
    subtitle: 'A selection of my web and mobile work. Tap any screenshot to view it full screen.',
    filterLabel: 'Filter projects by category',
    categories: { all: 'All', web: 'Web', mobile: 'Mobile', desktop: 'Desktop' },
    emptyTitle: 'No projects in this category',
    emptyText: 'Try another category or browse all projects.',
    screenshotCount: (n) => `${n} screenshots`,
    screenCount: (n) => `${String(n).padStart(2, '0')} screens`,
    screenshotAlt: (title, n) => `${title} — screenshot ${n}`,
    comingSoon: 'Screenshots coming soon',
    features: 'Key features',
    showMore: (n) => `Show ${n} more`,
    showLess: 'Show less',
    demo: 'Live Demo',
    code: 'Code',
    technologies: 'Technologies',
    screenshots: 'Screenshots',
    viewScreenshot: (n) => `View screenshot ${n}`,
    zoom: (alt) => `Enlarge: ${alt}`,
    previous: 'Previous',
    next: 'Next',
    items: {
      arquitectura: {
        title: 'Corporate Website for an Architecture Studio',
        description:
          'Corporate website for an architecture studio that showcases its project portfolio and services and makes it easy for prospects to get in touch, with an elegant design and fast load times.',
        features: [
          'Project portfolio with detailed views',
          'Architecture services section',
          'Contact form with validation',
          'Direct contact through WhatsApp',
          'Responsive design for every device',
          'SEO optimization',
        ],
      },
      'ruta-academica': {
        title: 'Ruta Académica - Learning Platform',
        description:
          'Learning platform with courses, assessments, a real-time forum and an AI chatbot, secured with role-based JWT authentication.',
        features: [
          'Course and assessment management',
          'Real-time forum',
          'AI-powered chatbot',
          'Role-based JWT security',
          'Unit tests with JUnit',
        ],
      },
      'z-erok': {
        title: 'Z-EROK - Personal Finance App',
        description:
          'Personal finance mobile app with budgets, savings goals and multi-currency support, backed by a Spring Boot API.',
        features: ['Budgets and savings goals', 'Multi-currency support', 'Google sign-in', 'Push notifications'],
      },
      'agro-ahorro-ayacucho': {
        title: 'Agro Ahorro Ayacucho - Price Comparison',
        description:
          'Mobile app to compare prices of agricultural products, with an API deployed on a Linux VPS using Docker Compose.',
        features: [
          'Cross-platform mobile app with Expo',
          'NestJS API with Prisma and PostgreSQL',
          'Deployment on a Linux VPS with Docker Compose',
          'APK built with EAS Build',
        ],
      },
      nobicursos: {
        title: 'Nobicursos - Online Course Platform',
        description:
          'Learning platform to browse and access online courses in programming, design, digital marketing, data science and business.',
        features: [
          'Custom design with elegant typography',
          'Course catalog by category',
          'Customizable course name and date',
          'Intuitive, responsive interface',
        ],
      },
      vesfay: {
        title: 'Vesfay - Online Clothing Store',
        description:
          'Responsive online clothing store built with HTML, Bootstrap and JavaScript, with dynamic catalogs and categories for men, women and kids.',
        features: [
          'Dynamic catalogs',
          'Intuitive navigation',
          'Categories: men, women, kids',
          'Fully responsive design',
          'Admin panel',
        ],
      },
      'inventario-olla': {
        title: 'Inventory Management App',
        description:
          'Mobile app for simple inventory management, with product and stock control and perishable item tracking.',
        features: [
          'Product and stock control',
          'Perishable item tracking',
          'Local SQLite database',
          'Intuitive user interface',
        ],
      },
      'votacion-electronica': {
        title: 'Desktop Voting System',
        description: 'Desktop application with login, role management and vote storage in MySQL.',
        features: ['Authentication system', 'User role management', 'Vote storage', 'MySQL database'],
      },
      portafolio: {
        title: 'Personal Portfolio Website',
        description:
          'This portfolio: React with Vite, Tailwind CSS and GSAP animations, with light/dark theme, English version and web and mobile screenshot galleries.',
        features: [
          'Screenshot galleries with a full-screen viewer',
          'Animations with GSAP and ScrollTrigger',
          'Light/dark theme and English version',
          'Responsive design',
        ],
      },
      'cursos-platform': {
        title: 'Course Management Web App',
        description: 'Web system with full CRUD functionality to manage courses and users.',
        features: ['Full CRUD functionality', 'Course and user management', 'Tailwind CSS interface'],
      },
    },
  },
  lightbox: {
    label: (title) => `Screenshots of ${title}`,
    close: 'Close viewer',
    previous: 'Previous screenshot',
    next: 'Next screenshot',
    goTo: (n) => `Go to screenshot ${n}`,
  },
  contact: {
    title: 'Contact',
    subtitle: "Let's talk about opportunities to work together!",
    infoTitle: 'Contact Information',
    infoText:
      "I'm looking for new opportunities as a Full Stack Developer, where I can bring my SaaS product experience and keep growing with a team.",
    channels: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Phone',
      location: 'Location',
    },
    form: {
      title: 'Send Me a Message',
      name: { label: 'Name', placeholder: 'Your full name' },
      email: { label: 'Email', placeholder: 'your.email@example.com' },
      subject: { label: 'Subject', placeholder: 'How can I help you?' },
      message: { label: 'Message', placeholder: 'Tell me about your project or opportunity...' },
      submit: 'Send Message',
      sentTitle: 'Done! Your email app is open',
      sentText: 'Review the message in your email app and hit send. Thanks for reaching out!',
    },
    cta: {
      titleStart: 'Interested in',
      titleHighlight: 'working together',
      titleEnd: '?',
      text: "Junior Full Stack Developer with experience on SaaS products in production. Let's talk about how I can contribute to your team.",
      email: 'Send an email',
      call: 'Call',
    },
  },
  notFound: {
    metaTitle: 'Page not found — Kervyn Rojas',
    eyebrow: 'Error 404',
    title: "This page doesn't exist",
    text: 'The link may be mistyped or the page may have moved. Let’s get you back on track.',
    home: 'Back to home',
    projects: 'View projects',
  },
  footer: {
    quickLinks: 'Quick Links',
    contact: 'Contact',
    follow: 'Follow Me',
    rights: 'All rights reserved.',
    builtWith: 'Built with',
    using: 'using',
    love: 'love',
  },
};

export default en;
