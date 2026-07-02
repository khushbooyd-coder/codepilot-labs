'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="38" rx="10" fill="#0F172A"/>
      <path d="M6 12L14 19L6 26" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 26H32" stroke="white" stroke-width="3" stroke-linecap="round"/>
    </svg>
  )
}

export default function Home() {
  const s1Ref = useRef<HTMLSpanElement>(null)
  const s2Ref = useRef<HTMLSpanElement>(null)
  const s3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') })
    }, { threshold: 0.1 })
    reveals.forEach(r => io.observe(r))

    function animateCount(el: HTMLSpanElement, target: number, suffix = '') {
      let s = 0
      const step = target / (1500 / 16)
      const t = setInterval(() => {
        s = Math.min(s + step, target)
        el.textContent = Math.floor(s) + suffix
        if (s >= target) clearInterval(t)
      }, 16)
    }

    const statsBar = document.querySelector(`.${styles.statsBar}`)
    if (statsBar) {
      const so = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            if (s1Ref.current) animateCount(s1Ref.current, 5, '+')
            if (s2Ref.current) animateCount(s2Ref.current, 4, '+')
            if (s3Ref.current) animateCount(s3Ref.current, 3, '+')
            so.disconnect()
          }
        })
      }, { threshold: 0.5 })
      so.observe(statsBar)
    }

    return () => io.disconnect()
  }, [])

  return (
    <main>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Logo size={34} />
          Code<em>Pilot</em> Labs
        </div>
        <div className={styles.navLinks}>
          <a href="#products">Products</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/khushbooyd-coder" className={styles.navCta}>
            <i className="ti ti-brand-github" aria-hidden="true" /> GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className={styles.heroWrap}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <i className="ti ti-sparkles" aria-hidden="true" /> Full-stack developer & indie builder
          </div>
          <h1>
            Building <em>products</em><br />
            that solve real problems<span className={styles.cursor} />
          </h1>
          <p className={styles.heroSub}>
            Hi, I&apos;m Khushboo — a full-stack developer who builds SaaS products,
            WordPress plugins, and AI-powered tools. Welcome to my lab.
          </p>
          <div className={styles.heroBtns}>
            <a href="#products" className={styles.btnP}>
              <i className="ti ti-rocket" aria-hidden="true" /> See my work
            </a>
            <a href="https://www.linkedin.com/in/khushboo-dahat-230035345/" className={styles.btnS} target="_blank" rel="noopener noreferrer">
              <i className="ti ti-brand-linkedin" aria-hidden="true" /> Connect on LinkedIn
            </a>
          </div>
          <div className={styles.pills}>
            <span className={`${styles.pill} ${styles.pillBlue}`}><i className="ti ti-brand-nextjs" aria-hidden="true" /> Next.js</span>
            <span className={`${styles.pill} ${styles.pillPurple}`}><i className="ti ti-robot" aria-hidden="true" /> Claude AI</span>
            <span className={`${styles.pill} ${styles.pillTeal}`}><i className="ti ti-database" aria-hidden="true" /> Supabase</span>
            <span className={`${styles.pill} ${styles.pillWarn}`}><i className="ti ti-brand-python" aria-hidden="true" /> FastAPI</span>
            <span className={`${styles.pill} ${styles.pillBlue}`}><i className="ti ti-brand-wordpress" aria-hidden="true" /> WordPress</span>
            <span className={`${styles.pill} ${styles.pillPurple}`}><i className="ti ti-brand-typescript" aria-hidden="true" /> TypeScript</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          <div><span className={styles.statNum} ref={s1Ref}>0</span><span className={styles.statLabel}>Products shipped</span></div>
          <div><span className={styles.statNum} ref={s2Ref}>0</span><span className={styles.statLabel}>WordPress plugins</span></div>
          <div><span className={styles.statNum} ref={s3Ref}>0</span><span className={styles.statLabel}>Years building</span></div>
        </div>
      </div>

      {/* About */}
      <div className={`${styles.section} reveal`} id="about">
        <p className={styles.sLabel}>About</p>
        <h2 className={styles.sTitle}>What I do</h2>
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutCard} ${styles.acBlue}`}>
            <i className="ti ti-device-desktop" aria-hidden="true" />
            <h3>Full-stack development</h3>
            <p>Next.js, React, Node.js, FastAPI — building complete web apps from scratch to production.</p>
          </div>
          <div className={`${styles.aboutCard} ${styles.acPurple}`}>
            <i className="ti ti-robot" aria-hidden="true" />
            <h3>AI integration</h3>
            <p>Integrating Claude, OpenAI into products that solve real problems — not just cool demos.</p>
          </div>
          <div className={`${styles.aboutCard} ${styles.acTeal}`}>
            <i className="ti ti-brand-wordpress" aria-hidden="true" />
            <h3>WordPress plugins</h3>
            <p>Custom WordPress & WooCommerce plugins — from media optimizers to AI SEO writers.</p>
          </div>
          <div className={`${styles.aboutCard} ${styles.acWarn}`}>
            <i className="ti ti-chart-line" aria-hidden="true" />
            <h3>SaaS products</h3>
            <p>Shipping indie SaaS products — from idea to deployment, with real users in mind.</p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Products */}
      <div className={`${styles.section} reveal`} id="products">
        <p className={styles.sLabel}>Products</p>
        <h2 className={styles.sTitle}>What I&apos;ve built</h2>
        <div className={styles.productsGrid}>
          <div className={`${styles.productCard} ${styles.pcBlue}`}>
            <div className={styles.prodIcon}><i className="ti ti-brand-linkedin" aria-hidden="true" /></div>
            <div className={styles.prodBody}>
              <div className={styles.prodTop}>
                <span className={styles.prodName}>PostPilot AI</span>
                <span className={styles.bLive}>Live</span>
              </div>
              <p className={styles.prodDesc}>AI-powered LinkedIn auto-posting SaaS. Writes and publishes daily posts tuned to your niche, tone, and audience — completely hands-free.</p>
              <div className={styles.prodTags}>
                {['Next.js','Supabase','Claude AI','Vercel'].map(t => <span key={t} className={styles.prodTag}>{t}</span>)}
              </div>
              <a href="https://postpilot-ai-self.vercel.app" className={styles.prodLink} target="_blank" rel="noopener noreferrer">
                <i className="ti ti-external-link" aria-hidden="true" /> postpilot-ai-self.vercel.app
              </a>
            </div>
          </div>

          <div className={`${styles.productCard} ${styles.pcPurple}`}>
            <div className={styles.prodIcon}><i className="ti ti-puzzle" aria-hidden="true" /></div>
            <div className={styles.prodBody}>
              <div className={styles.prodTop}>
                <span className={styles.prodName}>SitePilot AI Plugins</span>
                <span className={styles.bWip}>In progress</span>
              </div>
              <p className={styles.prodDesc}>A suite of WordPress plugins — Media Optimizer, Auto Featured Image, AI SEO Writer, and IT ROI Calculator — all under one brand.</p>
              <div className={styles.prodTags}>
                {['WordPress','PHP','OpenAI','WooCommerce'].map(t => <span key={t} className={styles.prodTag}>{t}</span>)}
              </div>
              <a href="https://github.com/khushbooyd-coder" className={styles.prodLink} target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-github" aria-hidden="true" /> View on GitHub
              </a>
            </div>
          </div>

          <div className={`${styles.productCard} ${styles.pcTeal}`}>
            <div className={styles.prodIcon}><i className="ti ti-calendar-event" aria-hidden="true" /></div>
            <div className={styles.prodBody}>
              <div className={styles.prodTop}>
                <span className={styles.prodName}>Cresco AI</span>
                <span className={styles.bDone}>Delivered</span>
              </div>
              <p className={styles.prodDesc}>Event marketing automation platform with Apollo.io prospect discovery, SendGrid campaigns, HubSpot CRM sync, and LinkedIn post generation.</p>
              <div className={styles.prodTags}>
                {['Next.js','FastAPI','Supabase','Railway'].map(t => <span key={t} className={styles.prodTag}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Skills */}
      <div className={`${styles.section} reveal`} id="skills">
        <p className={styles.sLabel}>Skills</p>
        <h2 className={styles.sTitle}>Tech stack</h2>
        <div className={styles.skillsGrid}>
          {[
            { icon: 'ti-brand-nextjs', label: 'Next.js' },
            { icon: 'ti-brand-react', label: 'React' },
            { icon: 'ti-brand-python', label: 'FastAPI' },
            { icon: 'ti-database', label: 'Supabase' },
            { icon: 'ti-brand-typescript', label: 'TypeScript' },
            { icon: 'ti-brand-wordpress', label: 'WordPress' },
            { icon: 'ti-robot', label: 'Claude AI' },
            { icon: 'ti-brand-vercel', label: 'Vercel' },
            { icon: 'ti-brand-github', label: 'GitHub' },
            { icon: 'ti-fire', label: 'Firebase' },
            { icon: 'ti-server', label: 'Node.js' },
            { icon: 'ti-brand-php', label: 'PHP' },
          ].map(s => (
            <div key={s.label} className={styles.skill}>
              <i className={`ti ${s.icon}`} aria-hidden="true" /> {s.label}
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Contact */}
      <div className={`${styles.section} reveal`} id="contact">
        <p className={styles.sLabel}>Contact</p>
        <h2 className={styles.sTitle}>Let&apos;s connect</h2>
        <div className={styles.contactWrap}>
          <h3>Open to work & collabs</h3>
          <p>Freelance projects, SaaS collaborations, WordPress plugins — if you have an interesting idea, let&apos;s connect on LinkedIn!</p>
          <div className={styles.contactRow}>
            <a href="https://www.linkedin.com/in/khushboo-dahat-230035345/" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
              <i className="ti ti-brand-linkedin" aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://github.com/khushbooyd-coder" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
              <i className="ti ti-brand-github" aria-hidden="true" /> GitHub
            </a>
            <a href="mailto:khushbooyd@gmail.com" className={styles.contactBtn}>
              <i className="ti ti-mail" aria-hidden="true" /> Email me
            </a>
            <a href="https://postpilot-ai-self.vercel.app" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
              <i className="ti ti-rocket" aria-hidden="true" /> PostPilot AI
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 CodePilot Labs · Built with ♥ by Khushboo Dongre
      </footer>
    </main>
  )
}
