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
    role: 'Business Intelligence Analyst',
    org: 'University of Illinois Urbana-Champaign',
    sub: 'Office of the Provost · Champaign, IL',
    period: 'Jan 2026 – May 2026',
    logoImg: 'uiuc.jpg',
    logoInitials: 'UI',
    logoBg: '#e8700a',
    bullets: [
      'Developed a Student Success Scorecard in Tableau, giving deans and academic officers a real-time view of student outcomes across 55,000+ records.',
      'Built and maintained reporting workflows across 20+ institutional partners, bringing structure and consistency to a fragmented data ecosystem.',
    ],
  },
  {
    role: 'Growth Coach, BUS 401',
    org: 'University of Illinois Urbana-Champaign',
    sub: 'Champaign, IL',
    period: '2026 – Present',
    logoImg: 'uiuc.jpg',
    logoInitials: 'UI',
    logoBg: '#e8700a',
    bullets: [
      'Coached 5 to 15 students per weekly small-group session, turning scattered career anxiety into organized, strategic job search plans with real momentum.',
      'Designed discussion guides and tracked attendance and grade trends that kept the program running smoothly and students on course across the full semester.',
    ],
  },
  {
    role: 'AI Productivity Coach & Content Creator',
    org: '@lalithajournal',
    sub: '5,000+ Community · Remote',
    period: '2025 – Present',
    logoImg: null,
    logoInitials: 'LJ',
    logoBg: '#e07654',
    bullets: [
      'Grew an Instagram community from 0 to 5,000+ by creating Notion templates and AI workflow content that made career navigation feel simple and actionable.',
      'Completed 550+ coaching calls on Topmate, helping international students gain clarity on tech careers, visa timelines, and navigating life after graduation.',
      'Host weekly group calls that break down complex career topics into clear, digestible frameworks students actually use.',
    ],
  },
  {
    role: 'Tech Accessibility Advocate',
    org: 'UIUC, ISSS',
    sub: 'Champaign, IL',
    period: '2025 – Present',
    logoImg: 'uiuc.jpg',
    logoInitials: 'UI',
    logoBg: '#e8700a',
    bullets: [
      'Ran accessible AI workshops for STEM faculty, translating intimidating tools into beginner-friendly systems that instructors could adopt immediately.',
      'Built Notion course workspaces that gave instructors one clear source of truth, eliminating the chaos of scattered course materials across multiple platforms.',
    ],
  },
  {
    role: 'Business Intelligence Analyst',
    org: 'Accenture',
    sub: 'Bengaluru, India',
    period: 'Aug 2024 – Jul 2025',
    logoImg: 'accenture.jpg',
    logoInitials: 'AC',
    logoBg: '#a100ff',
    bullets: [
      'Designed Tableau dashboards that surfaced $500K+ in cost opportunities and gave leadership a reliable view of business performance for the first time.',
      'Validated and cleaned 500K+ operational records at 99% accuracy, cutting reporting discrepancies by 40% across the entire analytics team.',
    ],
  },
  {
    role: 'Data Engineer Associate',
    org: 'Accenture',
    sub: 'Bengaluru, India',
    period: 'Aug 2022 – Jul 2024',
    logoImg: 'accenture.jpg',
    logoInitials: 'AC',
    logoBg: '#a100ff',
    bullets: [
      'Rebuilt SQL pipelines from scratch, reducing analytics turnaround by 35% and ending the weekly scramble for clean, query-ready data.',
      'Led a full migration of 700+ reports from QlikView to Tableau, achieving 99.9% accuracy and cutting manual workflow overhead by 40%.',
    ],
  },
] as const;

const AWARDS = [
  {
    title: '1st Place — CPRBS Case Competition',
    org: 'University of Illinois Urbana-Champaign',
    year: '2026',
    desc: 'Led a cross-functional team of 5 to redesign a 0% adoption sustainability dashboard into an AI-powered platform. Pitched to a panel of industry judges and won first place.',
    icon: '🏆',
  },
  {
    title: 'Best Project & Best Speaker Award',
    org: 'University of Illinois Urbana-Champaign',
    year: '2026',
    desc: 'Scored 83/84 for the SomnoMask product concept — recognized for both the quality of the product case and the strength of the investor pitch delivery.',
    icon: '🎤',
  },
  {
    title: 'Pinnacle Award — Best Employee Recognition',
    org: 'Accenture',
    year: '2024',
    desc: 'Recognized for exceptional performance and impact on client data quality initiatives, awarded among top performers across the analytics team.',
    icon: '⭐',
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

  const navLinks = ['About', 'Projects', 'Experience', 'Awards', 'Education', 'Contact'];

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
              <a href="#contact" className="btn-outline">Let's Connect</a>
            </div>
          </motion.div>

          <motion.div className="hero-photo-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="hero-photo-frame">
              <img src={`${BASE}lalitha.jpg`} alt="Lalitha Lahari Karri" />
            </div>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ background: '#fff', padding: '5rem clamp(1.5rem, 7vw, 6rem)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">About Me</p>
            <h2 className="section-title">Who Am I?</h2>
            <hr className="rule" />
            <div style={{ maxWidth: '780px' }}>
              <p style={{ fontSize: '1rem', lineHeight: 1.95, color: MID, marginBottom: '1.4rem' }}>
                <strong style={{ color: INK, fontWeight: 600 }}>Hi, I'm Lalitha.</strong> A Business Analytics student at UIUC Gies with a background in data engineering and a drive to build products that actually make sense to the people who use them.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: MID, lineHeight: 1.95, marginBottom: '1.4rem' }}>
                I spent 3 years at Accenture as a Data Engineer and Business Intelligence Analyst, working across messy, high-stakes data problems that needed both technical precision and clear communication to solve. That experience taught me how to turn complexity into clarity — and how good data decisions only matter when they're connected to the right product decisions.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: MID, lineHeight: 1.95, marginBottom: '1.4rem' }}>
                Now at UIUC Gies, I'm studying Business Analytics, coaching students as a Growth Coach, advocating for tech accessibility, and building a community of people navigating the same crossroads I once stood at: smart, technical, and figuring out how to make it in product.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 400, color: NAVY, lineHeight: 1.95, fontStyle: 'italic', borderLeft: `3px solid ${SKY}`, paddingLeft: '1.2rem' }}>
                I believe the best products are built by people who speak both languages: data and design thinking. That's the space I live in.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, marginBottom: '1rem', fontWeight: 500 }}>Where I've worked</p>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div className="logo-box" style={{ height: '38px', width: '88px' }}>
                    <img src={`${BASE}uiuc.jpg`} alt="UIUC" />
                  </div>
                  <div className="logo-box" style={{ height: '38px', width: '88px' }}>
                    <img src={`${BASE}accenture.jpg`} alt="Accenture" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: '5rem clamp(1.5rem, 7vw, 6rem)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Projects that <em>shipped.</em></h2>
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
        <section id="experience" style={{ background: LIGHT_BG, padding: '5rem clamp(1.5rem, 7vw, 6rem)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">How I've made an <em>impact.</em></h2>
            <hr className="rule" />
            <div className="tl-wrap">
              <div className="tl-line" />
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.period}
                  className="tl-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  {/* Logo circle */}
                  <div className="tl-logo" style={{ background: exp.logoBg }}>
                    <span style={{ color: '#fff', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.03em' }}>{exp.logoInitials}</span>
                  </div>

                  {/* Card */}
                  <div className="tl-card">
                    <div className="tl-card-header">
                      <div>
                        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 600, color: INK, lineHeight: 1.25, marginBottom: '0.2rem' }}>{exp.org}</h3>
                        <p style={{ fontSize: '0.78rem', color: MUTED, marginBottom: '0.15rem' }}>{exp.role}</p>
                        <p style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: SKY, fontWeight: 500 }}>{exp.period} · {exp.sub}</p>
                      </div>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} style={{ fontSize: '0.8rem', fontWeight: 300, color: MID, lineHeight: 1.75, paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: INDIGO, fontWeight: 600 }}>›</span>
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

        {/* ── AWARDS ── */}
        <section id="awards" style={{ padding: '5rem clamp(1.5rem, 7vw, 6rem)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Recognition</p>
            <h2 className="section-title">Awards &amp; <em>Achievements.</em></h2>
            <hr className="rule" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '780px' }}>
              {AWARDS.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    gap: '1.4rem',
                    alignItems: 'flex-start',
                    background: '#fff',
                    border: `1px solid ${BORDER}`,
                    borderRadius: '1rem',
                    padding: '1.6rem 1.8rem',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    lineHeight: 1,
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    background: '#eef2ff',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {award.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 600, color: INK, lineHeight: 1.3 }}>
                        {award.title}
                      </h3>
                      <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: SKY, fontWeight: 500, whiteSpace: 'nowrap' }}>
                        {award.year}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.68rem', color: MUTED, marginTop: '0.2rem', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>
                      {award.org}
                    </p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 300, color: MID, lineHeight: 1.7 }}>
                      {award.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: '5rem clamp(1.5rem, 7vw, 6rem)' }}>
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
        <section style={{ background: LIGHT_BG, padding: '4.5rem clamp(1.5rem, 7vw, 6rem)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="eyebrow">Beyond Work</p>
            <h2 className="section-title">Community, creativity, <em>and travel.</em></h2>
            <hr className="rule" />
            <p style={{ fontSize: '0.9rem', fontWeight: 300, color: MID, lineHeight: 1.85, maxWidth: '620px', marginBottom: '1.4rem' }}>
              I run <strong style={{ color: INK, fontWeight: 500 }}>@lalithajournal</strong> on Instagram, a community of <strong style={{ color: INK, fontWeight: 500 }}>5,000+ people</strong> navigating analytics and product careers. I host weekly calls to simplify topics that feel overwhelming, from PM fundamentals to figuring out life in tech.
            </p>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, color: MID, lineHeight: 1.85, maxWidth: '620px', marginBottom: '1.4rem' }}>
              I've completed <strong style={{ color: INK, fontWeight: 500 }}>550+ 1:1 coaching calls on Topmate</strong>, helping international students gain clarity on tech careers, understand the US job market, and build a future they actually want.
            </p>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, color: MID, lineHeight: 1.85, maxWidth: '620px', marginBottom: '2.5rem' }}>
              Also a <strong style={{ color: INK, fontWeight: 500 }}>Global Educator</strong> with ISSS at UIUC, representing my country and supporting students who are figuring out the world far from home.
            </p>
            <div className="outside-grid">
              <motion.div className="o-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <img src={`${BASE}giese.jpg`} alt="ISSS Global Educator" />
                <div className="o-label">ISSS Global Educator</div>
              </motion.div>
              <motion.div className="o-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <img src={`${BASE}beacons.jpg`} alt="Community" />
                {/* Topmate badges overlay */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '10px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '5px',
                }}>
                  {[
                    { label: 'Top 0.1%', bg: '#1a6b3a', emoji: '🍀' },
                    { label: 'Host Worthy', bg: '#1a3a6b', emoji: '🌸' },
                    { label: 'Community Care', bg: '#1a5a6b', emoji: '💙' },
                    { label: "People's Choice", bg: '#6b1a4a', emoji: '💗' },
                  ].map(b => (
                    <span key={b.label} style={{
                      background: b.bg,
                      color: '#fff',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      padding: '3px 7px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                      backdropFilter: 'blur(4px)',
                      letterSpacing: '0.02em',
                    }}>
                      {b.emoji} {b.label}
                    </span>
                  ))}
                </div>
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
      <footer id="contact" style={{ background: NAVY, padding: '5rem clamp(1.5rem, 7vw, 6rem) 3rem' }}>
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
