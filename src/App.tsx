/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Github, Instagram, Mail, ArrowUpRight } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: 'SomnoMask: Smart Sleep Mask for 70M People the Market Forgot',
    tag: 'pm',
    award: '🏆 Best Project & Best Speaker Award',
    desc: 'Led product ideation end-to-end — competitive research, user personas, Design Thinking, SCAMPER, investor pitch, and go-to-market. Scored 83/84 against competitors.',
    img: 'https://miro.medium.com/v2/resize:fit:1200/1*NRtaE8lxe6dTMSa4OF62QQ.png',
    url: 'https://medium.com/@lalithalaharikarri/somnomask-designing-a-smart-sleep-mask-for-the-70-million-people-the-market-forgot-0de4b84a8c31',
  },
  {
    id: 2,
    title: 'Dash4Earth: Sustainability Intelligence Platform',
    tag: 'pm',
    award: '🏆 1st Place — CPRBS Case Competition',
    desc: 'Led cross-functional team of 5 to redesign a 0% adoption dashboard into an AI-powered platform with RAG chatbot serving 4 distinct user groups.',
    img: 'https://miro.medium.com/v2/resize:fit:1200/1*smG-QcCxK6_zg1NezqPAAw.png',
    url: 'https://medium.com/@lalithalaharikarri/dash4earth-sustainability-case-competition-43fdd947f376',
  },
  {
    id: 3,
    title: 'AI-Powered Study Planner with Canvas LMS Integration',
    tag: 'pm',
    award: null,
    desc: 'Scoped and planned a full EdTech product — Canvas OAuth integration, AI schedule generation, risk analysis, and an 8-week $82 delivery plan.',
    img: 'https://miro.medium.com/v2/resize:fit:1200/1*PhD2Y8GlDGEuYmBAvQNVKQ.png',
    url: 'https://medium.com/@lalithalaharikarri/ai-powered-study-planner-with-canvas-lms-integration-acee612f5813',
  },
  {
    id: 4,
    title: 'Cherie: Your AI-Powered Personal Stylist',
    tag: 'pm',
    award: null,
    desc: 'Defined the product vision, user personas, and feature roadmap for an AI-driven fashion recommendation app that actually knows your body.',
    img: `${BASE}cherie.webp`,
    url: 'https://medium.com/@lalithalaharikarri/cherie-your-ai-powered-personal-stylist-that-actually-knows-your-body-d884ad3a270d',
  },
  {
    id: 5,
    title: "From Verse to the Crowd: How Lyrics Shape an Artist's Cultural Journey",
    tag: 'analytics',
    award: null,
    desc: 'Analyzed 425 songs across 4 artists using VADER sentiment + TF-IDF to measure how career events leave measurable fingerprints in lyrics.',
    img: 'https://miro.medium.com/v2/resize:fit:975/1*bXvG2xF34CIVqqkO9em3nQ.png',
    url: 'https://medium.com/@lalithalaharikarri/from-verse-to-the-crowd-how-lyrics-shape-an-artists-cultural-journey-736a859ac5aa',
  },
  {
    id: 6,
    title: 'What 10,000 Housing Reviews Taught Me About Landlords',
    tag: 'analytics',
    award: null,
    desc: 'NLP + sentiment analysis of 10,000+ student housing reviews to surface actionable failure patterns for property managers.',
    img: `${BASE}housing.jpg`,
    url: 'https://medium.com/@lalithalaharikarri/what-10-000-student-housing-reviews-taught-me-about-why-landlords-fail-015085cf113f',
  },
  {
    id: 7,
    title: "60 Days of Blockchain Data: What USDT's Rivals Don't Want You to Know",
    tag: 'analytics',
    award: null,
    desc: 'Queried 60 days of on-chain stablecoin data to reveal competitive patterns, liquidity signals, and market positioning in the USDT ecosystem.',
    img: `${BASE}blockchain.jpg`,
    url: 'https://medium.com/@lalithalaharikarri/i-queried-60-days-of-blockchain-data-heres-what-usdt-s-competitors-don-t-want-you-to-know-68c8b2943a54',
  },
] as const;

const EXPERIENCE = [
  {
    role: 'Data Analyst — Decision Support & Business Intelligence',
    org: 'University of Illinois Urbana-Champaign',
    sub: 'Office of the Provost · Champaign, IL',
    period: 'Jan 2026 – Present',
    bullets: [
      'Manage reporting workflows across 20+ institutional partners for a program serving 55,000+ students.',
      'Organize project documentation, track deliverable timelines, and maintain a structured knowledge base across complex multi-stakeholder reporting cycles.',
    ],
  },
  {
    role: 'Growth Coach — BUS 401',
    org: 'University of Illinois Urbana-Champaign',
    sub: 'Champaign, IL',
    period: '2025 – Present',
    bullets: [
      'Lead "Growth Groups" — 30-min personalized small-group sessions (5–15 students) for BUS 401, covering course concepts and mutual peer support.',
      'Coach students on career clarity, AI-integrated workflows, and productivity systems to turn chaotic job searches into organized, strategic processes.',
      'Track student success metrics (attendance, grades), complete grading, develop discussion guides, and help organize course events.',
    ],
  },
  {
    role: 'AI Productivity Coach & Content Creator',
    org: '@lalithajournal — Instagram',
    sub: '5,000+ Community · Remote',
    period: '2025 – Present',
    bullets: [
      'Built and grew a 5,000+ member community teaching Notion and AI workflows for academics and career growth.',
      'Host weekly live coaching calls; created original Notion templates for academic planning, job tracking, and career development actively used across diverse student backgrounds.',
    ],
  },
  {
    role: 'Global Educator & Tech Accessibility Advocate',
    org: 'University of Illinois Urbana-Champaign, ISSS',
    sub: 'Champaign, IL',
    period: '2025 – Present',
    bullets: [
      'Facilitate training workshops helping STEM faculty adopt AI and productivity tools for accessible, inclusive course design.',
      'Build Notion workspaces for course planning and student-facing documentation — translating complex tools into structured, beginner-friendly systems.',
    ],
  },
  {
    role: 'BI Engineer',
    org: 'Accenture',
    sub: 'Bengaluru, India',
    period: 'Aug 2024 – Jul 2025',
    bullets: [
      'Developed Tableau dashboards tracking key business metrics, supporting leadership decisions and saving $500K+ in identified costs.',
      'Cleaned and analyzed 500K+ operational records at 99% accuracy; standardized data definitions, reducing reporting discrepancies by 40%.',
    ],
  },
  {
    role: 'Data Analyst',
    org: 'Accenture',
    sub: 'Bengaluru, India',
    period: 'Aug 2022 – Jul 2024',
    bullets: [
      'Designed SQL pipelines reducing analytics turnaround by 35%; automated data cleaning with Python, eliminating 90% of manual errors.',
      'Led QlikView-to-Tableau migration for 700+ reports, achieving 99.9% data accuracy and cutting workflow time by 40%.',
    ],
  },
] as const;

// ─────────────────────────────────────────────────────────────────
// STYLES (shared tokens)
// ─────────────────────────────────────────────────────────────────

const NAVY = '#1e3a5f';
const INDIGO = '#2f6bba';
const SKY = '#5b9bd5';
const CORAL = '#e07654';
const INK = '#111827';
const MID = '#4b5563';
const MUTED = '#64748b';
const LIGHT_BG = '#f8fafc';
const BORDER = '#e2e8f0';

// ─────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pm' | 'analytics'>('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState<string | null>('ms');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.tag === activeFilter);

  const filters = [
    { id: 'all' as const, label: 'All' },
    { id: 'pm' as const, label: 'Product Management' },
    { id: 'analytics' as const, label: 'Analytics & Data' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  const navLinks = ['About', 'Projects', 'Experience', 'Education', 'Contact'];

  return (
    <div style={{ fontFamily: 'var(--sans)', background: '#fff', color: INK, overflowX: 'hidden' }}>

      {/* ── TOP NAV ── */}
      <header className="top-nav">
        <a href="#home" className="top-nav-brand">
          Lalitha <span style={{ color: INDIGO }}>Lahari</span>
        </a>

        {/* Desktop links */}
        <nav className="top-nav-links">
          {navLinks.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="top-nav-link">{item}</a>
          ))}
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginLeft: '0.5rem' }}>
            <a href="https://linkedin.com/in/lalithalaharikarri" target="_blank" rel="noreferrer" className="top-nav-icon"><Linkedin size={16} /></a>
            <a href="https://github.com/llkarri" target="_blank" rel="noreferrer" className="top-nav-icon"><Github size={16} /></a>
            <a href="https://www.instagram.com/lalithajournal_/" target="_blank" rel="noreferrer" className="top-nav-icon"><Instagram size={16} /></a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button className={'hamburger' + (menuOpen ? ' open' : '')} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile menu */}
      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        {navLinks.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="mobile-menu-link">{item}</a>
        ))}
        <div className="mobile-menu-socials">
          <a href="https://linkedin.com/in/lalithalaharikarri" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          <a href="https://github.com/llkarri" target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a href="https://www.instagram.com/lalithajournal_/" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
        </div>
      </div>

      <main style={{ paddingTop: '60px' }}>

        {/* ── HERO ── */}
        <section id="home" className="section-hero">
          <motion.div className="hero-text" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero-badge">✦ Open to PM &amp; Analytics Roles</span>
            <h1 className="hero-name">
              Hi, I'm<br />
              <em style={{ fontStyle: 'italic', color: INDIGO }}>Lalitha Lahari</em>
            </h1>
            <p className="hero-tagline">
              MS Business Analytics @ UIUC Gies. I sit at the intersection of product strategy and data — building things that matter, backed by numbers that prove it.
            </p>
            <div className="skill-chips">
              {['Product Management', 'Business Analytics', 'Data Strategy', 'AI & Productivity', 'Community Building'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href={`${BASE}resume.pdf`} download className="btn-outline">Download Resume</a>
            </div>
          </motion.div>

          <motion.div className="hero-photo-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="hero-photo-frame">
              <img src={`${BASE}lalitha.jpg`} alt="Lalitha Lahari Karri" />
            </div>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ background: LIGHT_BG, padding: '5rem 6rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">About Me</p>
            <h2 className="section-title">Analyst. Builder. <em>Community Maker.</em></h2>
            <hr className="rule" />
            <div className="about-grid">
              <div>
                <p style={{ fontSize: '0.92rem', fontWeight: 300, color: MID, lineHeight: 1.9, marginBottom: '1.1rem' }}>
                  I started in engineering, moved into data at Accenture where I spent 3 years turning 500K+ messy records into dashboards that saved $500K+ — and somewhere along the way I realized I was more excited about <em>why</em> a product existed than how its data flowed.
                </p>
                <p style={{ fontSize: '0.92rem', fontWeight: 300, color: MID, lineHeight: 1.9, marginBottom: '1.1rem' }}>
                  Now at UIUC Gies, I'm a Growth Coach, a Global Educator, and building a 5,000+ community that teaches real students how to navigate careers with AI and intentionality. My projects span product strategy, analytics, and everything in between.
                </p>
                <p style={{ fontSize: '0.92rem', fontWeight: 300, color: MID, lineHeight: 1.9 }}>
                  I believe the best products are built by people who speak both languages — data and design thinking. That's the space I live in.
                </p>
                <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem', alignItems: 'center' }}>
                  <div className="logo-box" style={{ height: '52px', width: '80px' }}>
                    <img src={`${BASE}uiuc.jpg`} alt="UIUC" />
                  </div>
                  <div className="logo-box" style={{ height: '52px', width: '80px' }}>
                    <img src={`${BASE}accenture.jpg`} alt="Accenture" />
                  </div>
                </div>
              </div>
              <div className="stats-grid">
                {[
                  { num: '5K+', label: 'Community Members' },
                  { num: '2', label: 'Competition Awards' },
                  { num: '3 yrs', label: 'Industry Experience' },
                  { num: '7', label: 'Published Projects' },
                ].map(stat => (
                  <div key={stat.label} className="stat-card">
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1.9rem', fontWeight: 600, color: INDIGO }}>{stat.num}</div>
                    <div style={{ fontSize: '0.64rem', color: MUTED, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, marginTop: '0.2rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: '5rem 6rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Projects that <em>shipped ideas.</em></h2>
            <hr className="rule" />
            <p style={{ fontSize: '0.88rem', fontWeight: 300, color: MID, marginBottom: '2rem', maxWidth: '560px', lineHeight: 1.75 }}>
              From product case studies to data analysis — each project is published on Medium. Click any card to read the full write-up.
            </p>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={'filter-pill' + (activeFilter === f.id ? ' active' : '')}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <motion.div layout className="projects-grid">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map(p => (
                  <motion.a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.28 }}
                    className="project-card"
                  >
                    <div className="project-card-img-wrap">
                      <img src={p.img} alt={p.title} />
                      <div className="project-card-overlay">
                        <ArrowUpRight size={22} color="#fff" />
                      </div>
                    </div>
                    <div className="project-card-body">
                      {p.award && (
                        <span className="p-award">{p.award}</span>
                      )}
                      <span className={'project-tag' + (p.tag === 'pm' ? ' tag-pm' : ' tag-analytics')}>
                        {p.tag === 'pm' ? 'Product Management' : 'Analytics & Data'}
                      </span>
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-desc">{p.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={{ background: LIGHT_BG, padding: '5rem 6rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">How I've made an <em>impact.</em></h2>
            <hr className="rule" />
            <div className="exp-timeline">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  className="exp-row"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06 } } }}
                  style={{ borderBottom: i < EXPERIENCE.length - 1 ? `1px solid ${BORDER}` : 'none' }}
                >
                  <div className="exp-period-col">
                    <p style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: SKY, fontWeight: 500 }}>{exp.period}</p>
                    <p style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.25rem', lineHeight: 1.4 }}>{exp.sub}</p>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 600, color: INK, marginBottom: '0.15rem', lineHeight: 1.2 }}>{exp.role}</h3>
                    <p style={{ fontSize: '0.78rem', color: MUTED, marginBottom: '0.75rem' }}>{exp.org}</p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} style={{ fontSize: '0.8rem', fontWeight: 300, color: MID, lineHeight: 1.7, paddingLeft: '0.9rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: SKY, fontSize: '1.1rem', lineHeight: '1.4' }}>·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: '5rem 6rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Education</p>
            <h2 className="section-title">Where I built my <em>foundation.</em></h2>
            <hr className="rule" />
            <div className="edu-list" style={{ maxWidth: '700px' }}>
              <div className={'edu-accordion ' + (eduOpen === 'ms' ? 'open' : '')}>
                <div className="edu-header" onClick={() => setEduOpen(eduOpen === 'ms' ? null : 'ms')}>
                  <span className="edu-header-text">Master of Science in Business Analytics</span>
                  <span className="edu-toggle">{eduOpen === 'ms' ? '−' : '+'}</span>
                </div>
                <div className="edu-body">
                  <div className="edu-content">
                    <div className="edu-degree">MS Business Analytics</div>
                    <div className="edu-period">Aug 2025 – Dec 2026 · University of Illinois Urbana-Champaign, IL</div>
                    <div className="edu-detail">
                      <strong>Coursework</strong>
                      Marketing Analytics · Product Development · Enterprise Database Management · Data Analytics · Decision Analytics · Data Storytelling · Project Management
                    </div>
                    <div className="honor-badge">Gies Scholar Recipient</div>
                  </div>
                </div>
              </div>
              <div className={'edu-accordion ' + (eduOpen === 'bs' ? 'open' : '')}>
                <div className="edu-header" onClick={() => setEduOpen(eduOpen === 'bs' ? null : 'bs')}>
                  <span className="edu-header-text">B.S. Electrical and Electronics Engineering</span>
                  <span className="edu-toggle">{eduOpen === 'bs' ? '−' : '+'}</span>
                </div>
                <div className="edu-body">
                  <div className="edu-content">
                    <div className="edu-degree">B.S. Electrical and Electronics Engineering</div>
                    <div className="edu-period">Jun 2019 – May 2022 · Sathyabama University, Chennai, India</div>
                    <div className="edu-detail">
                      <strong>Foundation</strong>
                      An engineering mindset that fuels rigorous, systems-level thinking across every data and product problem I tackle.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── OUTSIDE ── */}
        <section style={{ background: LIGHT_BG, padding: '4.5rem 6rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Beyond Work</p>
            <h2 className="section-title">Community, creativity, <em>and travel.</em></h2>
            <hr className="rule" />
            <p style={{ fontSize: '0.9rem', fontWeight: 300, color: MID, lineHeight: 1.85, maxWidth: '600px', marginBottom: '2.5rem' }}>
              I run <strong style={{ color: INK, fontWeight: 500 }}>@lalithajournal</strong> on Instagram — a community of <strong style={{ color: INK, fontWeight: 500 }}>5,000+ people</strong> navigating analytics and product careers. Also a <strong style={{ color: INK, fontWeight: 500 }}>Global Educator</strong> with ISSS at UIUC, representing my country and supporting international students.
            </p>
            <div className="outside-grid">
              <motion.div className="o-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <img src={`${BASE}giese.jpg`} alt="ISSS Global Educator" />
                <div className="o-label">ISSS Global Educator</div>
              </motion.div>
              <motion.div className="o-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <img src={`${BASE}beacons.jpg`} alt="Community" />
                <div className="o-label">@lalithajournal · 5K+ Community</div>
              </motion.div>
              <motion.div className="o-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <img src={`${BASE}travel.jpg`} alt="Travel" />
                <div className="o-label">Travel &amp; Adventure</div>
              </motion.div>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a href="https://medium.com/@lalithalaharikarri" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: INK }}>
                Read on Medium
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* ── FOOTER / CONTACT ── */}
      <footer id="contact" style={{ background: NAVY, padding: '5rem 6rem 3rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow" style={{ color: 'var(--sky-l)' }}>Get In Touch</p>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Let's start a <em style={{ color: 'var(--sky-l)' }}>conversation.</em>
          </h2>
          <hr className="rule" />
          <div className="contact-grid">
            <div>
              <p className="contact-info-text">
                Open to PM, project management, and analytics roles. Whether it's a project, a role, or just a good conversation about data and product — reach out.
              </p>
              <div className="contact-links">
                <a href="mailto:lalithalaharikarri@gmail.com" className="c-row">
                  <div className="c-icon"><Mail size={18} /></div>
                  <div><div className="c-label">Email</div><div className="c-val">lalithalaharikarri@gmail.com</div></div>
                </a>
                <a href="https://linkedin.com/in/lalithalaharikarri" target="_blank" rel="noreferrer" className="c-row">
                  <div className="c-icon"><Linkedin size={18} /></div>
                  <div><div className="c-label">LinkedIn</div><div className="c-val">linkedin.com/in/lalithalaharikarri</div></div>
                </a>
                <a href="https://github.com/llkarri" target="_blank" rel="noreferrer" className="c-row">
                  <div className="c-icon"><Github size={18} /></div>
                  <div><div className="c-label">GitHub</div><div className="c-val">github.com/llkarri</div></div>
                </a>
                <a href="https://www.instagram.com/lalithajournal_/" target="_blank" rel="noreferrer" className="c-row">
                  <div className="c-icon"><Instagram size={18} /></div>
                  <div><div className="c-label">Instagram</div><div className="c-val">@lalithajournal</div></div>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form action="https://formspree.io/f/xgonvjkl" method="POST">
                <div className="f-field"><input type="text" name="name" placeholder="Your Name" required /></div>
                <div className="f-field"><input type="email" name="email" placeholder="Your Email" required /></div>
                <div className="f-field"><textarea name="message" placeholder="Your Message" required /></div>
                <button type="submit" className="btn-send">Send Message</button>
              </form>
            </div>
          </div>
        </motion.div>
        <div style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.64rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.05em' }}>© 2026 Lalitha Lahari Karri · Champaign, IL</p>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/lalithalaharikarri' },
              { label: 'GitHub', href: 'https://github.com/llkarri' },
              { label: 'Instagram', href: 'https://www.instagram.com/lalithajournal_/' },
              { label: 'Medium', href: 'https://medium.com/@lalithalaharikarri' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
