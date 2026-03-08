/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Instagram, Mail, MapPin } from 'lucide-react';

export default function App() {
  const base = import.meta.env.BASE_URL;
  const [activeSection, setActiveSection] = useState('home');
  const [eduOpen, setEduOpen] = useState<string | null>('ms');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((s) => {
        const section = s as HTMLElement;
        if (window.scrollY >= section.offsetTop - 130) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleEdu = (id: string) => {
    setEduOpen(eduOpen === id ? null : id);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const navItems = ['home', 'about', 'portfolio', 'experience', 'education', 'outside', 'contact'];

  return (
    <div className="font-sans text-ink bg-white flex">

      {/* MOBILE TOP NAV */}
      <div className="mobile-nav">
        <a href="#home" className="mobile-nav-name">Lalitha <span>Lahari</span></a>
        <button className={"hamburger " + (menuOpen ? 'open' : '')} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div className={"mobile-menu " + (menuOpen ? 'open' : '')}>
        {navItems.map((item) => (
          <a
            key={item}
            href={"#" + item}
            onClick={() => setMenuOpen(false)}
            className={activeSection === item ? 'active' : ''}
          >
            {item === 'outside' ? 'Outside Work' : item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
        <div className="mobile-menu-socials">
          <a href="https://linkedin.com/in/lalithalaharikarri" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          <a href="https://github.com/llkarri" target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a href="https://www.instagram.com/lalithajournal_/" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <nav className="sidebar">
        <a href="#home" className="sidebar-name">Lalitha<br /><span>Lahari</span> Karri</a>
        <p className="sidebar-role">Business Analyst</p>
        <ul className="sidebar-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={"#" + item} className={activeSection === item ? 'active' : ''}>
                {item === 'outside' ? 'Outside Work' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="sidebar-socials">
          <a href="https://linkedin.com/in/lalithalaharikarri" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={18} /></a>
          <a href="https://github.com/llkarri" target="_blank" rel="noreferrer" title="GitHub"><Github size={18} /></a>
          <a href="https://www.instagram.com/lalithajournal_/" target="_blank" rel="noreferrer" title="Instagram"><Instagram size={18} /></a>
        </div>
      </nav>

      <main>
        {/* HOME */}
        <section id="home">
          <motion.div className="home-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="home-name">Hi, I'm Lalitha</span>
            <div className="home-cta">
              <a href={base + "resume.pdf"} download className="btn-primary">Down Resume</a>
            </div>
          </motion.div>
          <motion.div className="home-right" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
            <div className="hero-photo-frame">
              <img src={base + "lalitha.jpg"} alt="Lalitha Lahari Karri" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="alt">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Who Am I?</h2>
          <hr className="rule" />
          <motion.div className="about-body" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <p>I've always been fascinated by the story hidden within the numbers. For me, data isn't just rows and columns—it's the voice of the user and the blueprint for smarter decisions.</p>
            <p>My journey started in engineering, teaching me to think in systems. During my three years at Accenture, I turned complex, messy datasets into clear narratives for leadership, driving real efficiency. But I wanted to do more than just report on the past; I wanted to shape the future.</p>
            <p>Now, pursuing my MS in Business Analytics at UIUC, I'm bridging the gap between technical data analysis and product strategy. I build tools that don't just show data, but explain <em>why</em> it matters.</p>
            <div className="about-logos">
              <div className="logo-box" title="University of Illinois Urbana-Champaign">
                <img src={base + "uiuc.jpg"} alt="UIUC" />
              </div>
              <div className="logo-box" title="Accenture">
                <img src={base + "accenture.jpg"} alt="Accenture" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio">
          <p className="eyebrow">My Work</p>
          <h2 className="section-title">How do I turn data into <em>results?</em></h2>
          <hr className="rule" />
          <p className="portfolio-intro">Projects where analytics meets real-world impact. Click Read More to explore each write-up on Medium.</p>
          <div className="portfolio-grid">
            <motion.div className="p-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <img src={base + "housing.jpg"} alt="Housing Reviews" className="p-card-img" />
              <div className="p-card-body">
                <h3 className="p-name">What 10,000 Housing Reviews Taught Me About Landlords</h3>
                <a href="https://medium.com/@lalithalaharikarri/what-10-000-student-housing-reviews-taught-me-about-why-landlords-fail-015085cf113f" target="_blank" rel="noreferrer" className="p-read">Read More</a>
              </div>
            </motion.div>

            <motion.div className="p-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
              <img src={base + "blockchain.jpg"} alt="Blockchain Analysis" className="p-card-img" />
              <div className="p-card-body">
                <h3 className="p-name">60 Days of Blockchain Data: What USDT's Rivals Don't Want You to Know</h3>
                <a href="https://medium.com/@lalithalaharikarri/i-queried-60-days-of-blockchain-data-heres-what-usdt-s-competitors-don-t-want-you-to-know-68c8b2943a54" target="_blank" rel="noreferrer" className="p-read">Read More</a>
              </div>
            </motion.div>

            <motion.div className="p-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <img src={base + "cherie.webp"} alt="Cherie AI Stylist" className="p-card-img" />
              <div className="p-card-body">
                <h3 className="p-name">Cherie: Your AI-Powered Personal Stylist</h3>
                <a href="https://medium.com/@lalithalaharikarri/cherie-your-ai-powered-personal-stylist-that-actually-knows-your-body-d884ad3a270d" target="_blank" rel="noreferrer" className="p-read">Read More</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="alt">
          <p className="eyebrow">Work Experience</p>
          <h2 className="section-title">How have I made an <em>impact?</em></h2>
          <hr className="rule" />
          <div className="exp-list">
            <motion.div className="exp-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="exp-logo">
                <img src={base + "uiuc.jpg"} alt="UIUC" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <div>
                <p className="exp-period">Jan 2026 - Present</p>
                <h3 className="exp-role">Multimedia Analyst</h3>
                <p className="exp-co">University of Illinois Urbana-Champaign</p>
                <ul className="exp-bullets">
                  <li>Integrating AI tools into the academic workflow for STEM faculty and students, making course materials more accessible and reducing document turnaround time by 25%.</li>
                  <li>Leading a team of 4 to audit and organize course content on Canvas, improving consistency and usability across departments.</li>
                  <li>Championing accessibility-first documentation practices so all students can engage with digital resources effectively.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="exp-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
              <div className="exp-logo">
                <img src={base + "accenture.jpg"} alt="Accenture" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <div>
                <p className="exp-period">Aug 2024 - July 2025</p>
                <h3 className="exp-role">BI Engineer</h3>
                <p className="exp-co">Accenture - Bengaluru, India</p>
                <ul className="exp-bullets">
                  <li>Collaborated with Data Engineering teams to clean and analyze 500K+ operational records, achieving 99% accuracy for business reviews.</li>
                  <li>Developed interactive Tableau dashboards tracking key business metrics, directly supporting leadership in identifying performance trends and saving $500K+ in costs.</li>
                  <li>Standardized data definitions across cross-functional teams, reducing reporting discrepancies by 40%.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="exp-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <div className="exp-logo">
                <img src={base + "accenture.jpg"} alt="Accenture" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <div>
                <p className="exp-period">Aug 2022 - July 2024</p>
                <h3 className="exp-role">Data Analyst</h3>
                <p className="exp-co">Accenture - Bengaluru, India</p>
                <ul className="exp-bullets">
                  <li>Designed robust SQL pipelines to transform raw data into analysis-ready datasets, reducing analytics turnaround time by 35%.</li>
                  <li>Automated data cleaning workflows using Python, eliminating manual entry errors by 90% and boosting process efficiency for the analytics team.</li>
                  <li>Led QlikView-to-Tableau migration for 700+ reports, ensuring 99.9% data accuracy and cutting workflow completion time by 40%.</li>
                  <li>Collaborated on enterprise-wide data projects ensuring usability and trust for downstream modeling and forecasting.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Where did I build my <em>foundation?</em></h2>
          <hr className="rule" />
          <div className="edu-list">
            <div className={"edu-accordion " + (eduOpen === 'ms' ? 'open' : '')}>
              <div className="edu-header" onClick={() => toggleEdu('ms')}>
                <span className="edu-header-text">Master of Science in Business Analytics</span>
                <span className="edu-toggle">{eduOpen === 'ms' ? '-' : '+'}</span>
              </div>
              <div className="edu-body">
                <div className="edu-content">
                  <div className="edu-degree">MS Business Analytics</div>
                  <div className="edu-period">Aug 2025 - Dec 2026 - University of Illinois Urbana-Champaign, IL</div>
                  <div className="edu-detail">
                    <strong>Coursework</strong>
                    Marketing Analytics - Product Development - Enterprise Database Management - Data Analytics - Decision Analytics - Data Storytelling - Project Management
                  </div>
                  <div className="honor-badge">Gies Scholar Recipient</div>
                </div>
              </div>
            </div>

            <div className={"edu-accordion " + (eduOpen === 'bs' ? 'open' : '')}>
              <div className="edu-header" onClick={() => toggleEdu('bs')}>
                <span className="edu-header-text">B.S. Electrical and Electronics Engineering</span>
                <span className="edu-toggle">{eduOpen === 'bs' ? '-' : '+'}</span>
              </div>
              <div className="edu-body">
                <div className="edu-content">
                  <div className="edu-degree">B.S. Electrical and Electronics Engineering</div>
                  <div className="edu-period">June 2019 - May 2022 - Sathyabama University, Chennai, India</div>
                  <div className="edu-detail">
                    <strong>Foundation</strong>
                    An engineering mindset that fuels rigorous, systems-level thinking across every data problem I tackle.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUTSIDE WORK */}
        <section id="outside" className="alt">
          <p className="eyebrow">Outside Work</p>
          <h2 className="section-title">What inspires me <em>beyond data?</em></h2>
          <hr className="rule" />
          <motion.div className="outside-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <p>I run <strong>@lalithajournal</strong> on Instagram — a community of <strong>5,000+ people</strong> navigating their careers in analytics. From internship resources to life as an international student, I share the real journey.</p>
            <p>I'm also a <strong>Global Educator</strong> with ISSS (International Student and Scholar Services), volunteering to represent my country and support international students in finding their footing. Outside of all this, you'll find me travelling and hosting events that bring people together.</p>
          </motion.div>
          <div className="outside-grid">
            <motion.div className="o-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <img src={base + "giese.jpg"} alt="ISSS Global Educator" />
              <div className="o-label">ISSS Global Educator</div>
            </motion.div>
            <motion.div className="o-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
              <img src={base + "beacons.jpg"} alt="Instagram Community" />
              <div className="o-label">@lalithajournal 5K+ Community</div>
            </motion.div>
            <motion.div className="o-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <img src={base + "travel.jpg"} alt="Travel" />
              <div className="o-label">Travel and Adventure</div>
            </motion.div>
          </div>
          <motion.div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <a href="https://medium.com/@lalithalaharikarri" target="_blank" rel="noreferrer" className="btn-primary" style={{backgroundColor: '#1a1a1a'}}>Read on Medium</a>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Let's start a <em>conversation!</em></h2>
          <hr className="rule" />
          <div className="contact-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <p className="contact-info-text">I'm always open to new opportunities, collaborations, or a good conversation about data and analytics. Drop me a message!</p>
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
                <div className="c-row" style={{cursor: 'default', pointerEvents: 'none'}}>
                  <div className="c-icon"><MapPin size={18} /></div>
                  <div><div className="c-label">Location</div><div className="c-val">Champaign, IL</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="contact-form" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <form action="https://formspree.io/f/xgonvjkl" method="POST">
                <div className="f-field"><input type="text" name="name" placeholder="Your Name" required /></div>
                <div className="f-field"><input type="email" name="email" placeholder="Your Email" required /></div>
                <div className="f-field"><textarea name="message" placeholder="Your Message" required></textarea></div>
                <button type="submit" className="btn-send">Send Message</button>
              </form>
            </motion.div>
          </div>
        </section>

        <footer>
          <p className="footer-copy">2026 Lalitha Lahari Karri - Champaign, IL</p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/lalithalaharikarri" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/llkarri" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/lalithajournal_/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
