// ============================================================
//  📁 src/data/portfolio.js  —  YOUR SINGLE SOURCE OF TRUTH
//  Edit this file to update every section of your portfolio.
//  No other files need changing for content updates.
// ============================================================

export const meta = {
  name: 'Kunjan Shah',
  title: 'AI Engineer & Software Developer',
  email: 'kkshah0811@gmail.com',
  phone: '+49 179 726 1289',
  location: 'Paderborn, Germany',
  // 👇 Formspree endpoint — sign up free at formspree.io and paste your form ID
  formspreeId: 'YOUR_FORM_ID',
  linkedin: 'https://linkedin.com/in/kunjanshah811',
  github: 'https://github.com/kunjanshah0811',
  // Photo: put your image in public/ and reference it here
  photo: 'public/photo.jpg',
  // For <meta> tags / SEO
  seoDescription:
    'Kunjan Shah — AI Engineer & Software Developer specialising in LLMs, RAG pipelines, NLP, and full-stack backend APIs.',
}

export const hero = {
  greeting: 'Hi, I\'m',
  taglines: [
    'Building LLM-powered applications',
    'Designing RAG pipelines',
    'Fine-tuning open-source models',
    'Crafting production APIs',
  ],
  badges: [
    '🤝 Open to Collaborate',
    '💼 Open to Freelance',
    '🌍 Open to Relocate',
    '🔓 Open Source Contributor',
  ],
  openSourceHighlight: {
    label: 'Contributed to',
    project: 'Giskard',
    url: 'https://github.com/Giskard-AI/giskard',
    detail: 'Integrated Groq inference — 18× faster LLM execution',
  },
}

export const about = {
  headline: 'Who I Am',
  paragraphs: [
    'Passionate software developer and AI enthusiast with 2+ years crafting NLP pipelines, RAG chatbots, and agentic LLM systems in production research environments.',
    'I build LLM-powered applications, RAG pipelines, and solid backend APIs — with a track record of open-source contributions and peer-reviewed publications in computational social science.',
    'Enthusiastic open-source contributor with hands-on LLM fine-tuning experience; achieved up to 50 % accuracy gains over baseline open-source models in my Master\'s thesis.',
  ],
  collaborationTitle: '🤝 Looking to Collaborate',
  collaborationPoints: [
    'Hackathons and genuine open-source projects',
    'Interesting AI, backend, or full-stack challenges',
    'Research-driven NLP and information-retrieval work',
  ],
  openForTitle: '💬 Open For',
  openForPoints: [
    'Freelancing across AI applications, LLM systems, RAG pipelines, production APIs, and full-stack web apps',
    'End-to-end solutions — from concept to fully deployed product',
    'Long-term technical partnerships and consulting',
  ],
}

// ──────────────────────────────────────────────
//  SKILLS  (level: 0–100)
// ──────────────────────────────────────────────
export const skillCategories = [
  {
    category: 'AI & NLP',
    icon: '🤖',
    skills: [
      { name: 'LangChain / LangGraph', icon: 'SiLangchain', level: 90 },
      { name: 'RAG Pipelines', icon: 'custom-rag', level: 88 },
      { name: 'LLM Fine-Tuning (SFT)', icon: 'custom-llm', level: 82 },
      { name: 'SpaCy / NLTK', icon: 'custom-nlp', level: 85 },
      { name: 'HuggingFace', icon: 'SiHuggingface', level: 83 },
      { name: 'Vector DBs (FAISS, Pinecone)', icon: 'custom-vector', level: 80 },
    ],
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', icon: 'SiPython', level: 95 },
      { name: 'SQL (PostgreSQL)', icon: 'SiPostgresql', level: 85 },
      { name: 'JavaScript / React', icon: 'SiReact', level: 75 },
      { name: 'R (Shiny / Quarto)', icon: 'SiR', level: 70 },
      { name: 'HTML5 / CSS3', icon: 'SiHtml5', level: 78 },
    ],
  },
  {
    category: 'Backend & DevOps',
    icon: '⚙️',
    skills: [
      { name: 'FastAPI', icon: 'SiFastapi', level: 88 },
      { name: 'Docker', icon: 'SiDocker', level: 80 },
      { name: 'GitHub Actions / CI-CD', icon: 'SiGithubactions', level: 78 },
      { name: 'Google Cloud Platform', icon: 'SiGooglecloud', level: 70 },
      { name: 'Django', icon: 'SiDjango', level: 72 },
    ],
  },
  {
    category: 'Data & ML',
    icon: '📊',
    skills: [
      { name: 'PyTorch', icon: 'SiPytorch', level: 80 },
      { name: 'scikit-learn', icon: 'SiScikitlearn', level: 85 },
      { name: 'Pandas / NumPy', icon: 'SiPandas', level: 90 },
      { name: 'ElasticSearch', icon: 'SiElasticsearch', level: 72 },
      { name: 'Selenium / BeautifulSoup', icon: 'SiSelenium', level: 88 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🌟',
    skills: [
      { name: 'Research & Publication', icon: 'custom-research', level: 88 },
      { name: 'Technical Communication', icon: 'custom-comm', level: 85 },
      { name: 'Problem Solving', icon: 'custom-problem', level: 92 },
      { name: 'Cross-functional Collaboration', icon: 'custom-collab', level: 87 },
      { name: 'Self-directed Learning', icon: 'custom-learn', level: 95 },
    ],
  },
]

// ──────────────────────────────────────────────
//  PROJECTS
// ──────────────────────────────────────────────
export const projects = [
  {
    title: 'Master Thesis: LLM Function Calling Fine-Tuning',
    grade: '1.0 (Distinction)',
    org: 'Fraunhofer IEM',
    description:
      'Designed a full evaluation framework benchmarking 4+ leading LLMs on tool-calling accuracy using AST-based evaluation on synthetic datasets. Applied SFT (PyTorch, HuggingFace) achieving up to 50% accuracy gains — enabling open-source models to match proprietary counterparts on agentic tasks.',
    tags: ['LLM', 'Fine-Tuning', 'PyTorch', 'HuggingFace', 'Agentic AI', 'Benchmarking'],
    link: 'https://github.com/kunjanshah0811/Fine-tune-experiment',
    featured: true,
  },
  {
    title: 'Conversational RAG Chatbot',
    grade: null,
    org: 'DICE – Paderborn University',
    description:
      'Architected a domain-specific conversational chatbot using LangChain, FAISS vector store, and OpenAI — context-aware PDF Q&A with sub-second retrieval across large document corpora.',
    tags: ['RAG', 'LangChain', 'FAISS', 'FastAPI', 'OpenAI'],
    link: 'https://github.com/kunjanshah0811',
    featured: true,
  },
  {
    title: 'LLM Prompt Repository',
    grade: null,
    org: 'Personal Project',
    description:
      'Async FastAPI + PostgreSQL backend with sub-100 ms full-text search. React-Vite frontend with instant-copy UX — reducing friction from prompt discovery to use in under 2 clicks.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Vite', 'Full-Stack'],
    link: 'https://github.com/kunjanshah0811/LLM-Prompts-Repository',
    featured: false,
  },
  {
    title: 'TextPrep – NLP Preprocessing Tool',
    grade: null,
    org: 'GESIS – KODAQS Project',
    description:
      'Built the TextPrep tool to preprocess large-scale digital behavioural text data: translation, cleaning, stopword removal. Measured impact via cosine similarity & topic modelling; published in Die Publizistik.',
    tags: ['NLP', 'Python', 'Topic Modeling', 'Cosine Similarity', 'Published'],
    link: 'https://kodaqs-toolbox.gesis.org/github.com/YannikPeters/DQ_Tool_TextPreprocessing/index/',
    featured: false,
  },
  {
    title: 'Datcha – Social Media Dataset Comparison App',
    grade: null,
    org: 'GESIS',
    description:
      'Full-stack Shiny web application to compare social media datasets. Integrated sentiment analysis, keyness scoring, and topic modelling with interactive LDAvis visualizations — hosted on GESIS infrastructure.',
    tags: ['R', 'Shiny', 'Sentiment Analysis', 'LDA', 'Data Viz'],
    link: 'https://shiny.gesis.org/datcha/',
    featured: false,
  },
  {
    title: 'Giskard Open-Source Contribution',
    grade: null,
    org: 'Giskard AI',
    description:
      'Integrated Groq inference into Giskard\'s LLM evaluation library — delivering up to 18× faster execution while maintaining CI quality gates.',
    tags: ['Open Source', 'Groq', 'LLM Evaluation', 'Giskard', 'CI/CD'],
    link: 'https://github.com/Giskard-AI/giskard',
    featured: true,
    openSource: true,
  },
]

// ──────────────────────────────────────────────
//  WORK EXPERIENCE
// ──────────────────────────────────────────────
export const experience = [
  {
    company: 'GESIS – Leibniz Institute for the Social Sciences',
    role: 'Research Student Assistant – NLP & Information Retrieval',
    period: 'Jul 2024 – Present',
    location: 'Cologne, Germany',
    url: 'https://www.gesis.org',
    highlights: [
      'Designed an automated extraction framework (Selenium, BeautifulSoup, Scrapling) cutting manual ingestion by ~70%.',
      'Built TextPrep NLP preprocessing tool — results published in Die Publizistik.',
      'Developed Datcha, a full-stack Shiny app for social media dataset comparison with interactive visualisations.',
      'Co-authored 2 peer-reviewed publications; contributed GESIS Blog on CSS data quality.',
    ],
    tags: ['Python', 'NLP', 'Web Scraping', 'R', 'Published'],
  },
  {
    company: 'Data Science Group (DICE) – Paderborn University',
    role: 'Research Assistant – Conversational AI & RAG Systems',
    period: 'Oct 2024 – Mar 2025',
    location: 'Paderborn, Germany',
    url: 'https://dice-research.org',
    highlights: [
      'Architected and deployed a domain-specific RAG chatbot with sub-second FAISS retrieval.',
      'Built automated LLM evaluation pipelines (Giskard RAGET, Ragas) — reduced manual QA by ~60%.',
      'Designed vector-based retrieval systems embedding semantic search into production-grade applications.',
      'Wrote multi-join SQL queries across 10+ tables in a PostgreSQL warehouse.',
    ],
    tags: ['LangChain', 'RAG', 'FAISS', 'PostgreSQL', 'CI/CD'],
  },
]

// ──────────────────────────────────────────────
//  EDUCATION
// ──────────────────────────────────────────────
export const education = [
  {
    institution: 'University of Paderborn',
    degree: 'M.Sc. Computer Science',
    gpa: '2.1',
    period: 'Apr 2022 – Mar 2026',
    location: 'Paderborn, Germany',
    url: 'https://www.uni-paderborn.de',
    notes: 'Thesis: "Function Calling in LLMs – Fine-Tuning for Precision" — Grade 1.0',
  },
  {
    institution: 'SVIT Vasad',
    degree: 'B.E. Computer Engineering',
    gpa: '1.7',
    period: 'Jul 2017 – Jul 2021',
    location: 'Anand, India',
    url: 'https://svitvasad.ac.in',
    notes: null,
  },
]

// ──────────────────────────────────────────────
//  PUBLICATIONS
// ──────────────────────────────────────────────
export const publications = [
  {
    title: 'Die KODAQS-Tools – Eine neue Ressource zur Beurteilung der Qualität von Forschungsdaten',
    subtitle: 'The KODAQS-Tools — A new resource for assessing the quality of research data',
    venue: 'Die Publizistik',
    year: '2024',
    url: 'https://link.springer.com/article/10.1007/s11616-026-00941-x',
    tags: ['NLP', 'Data Quality', 'Computational Social Science'],
  },
  {
    title: 'Tools – Indicators – Metrics: Data Quality in Computational Social Science',
    subtitle: 'Workshop summary — Competence Center Data Quality in the Social Sciences (KODAQS)',
    venue: 'GESIS Blog',
    year: 'Dec 2024',
    url: 'https://blog.gesis.org/tools-indicators-metrics-data-quality-in-computational-social-science/',
    tags: ['Data Quality', 'CSS', 'Workshop'],
  },
  {
    title: 'TextPrep – Comparing Tools and Workflows for Data Quality in Basic Text Preprocessing with R',
    subtitle: null,
    venue: 'GESIS Blog',
    year: 'Dec 2024',
    url: 'https://blog.gesis.org/textprep-comparing-tools-and-workflows-for-data-quality-in-basic-text-preprocessing-with-r/',
    authors: 'Peters, Yannik & Kunjan Shah',
    tags: ['R', 'NLP', 'Text Preprocessing'],
  },
]
