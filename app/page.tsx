import Link from 'next/link'
import Hero3D from '@/components/Hero3D'
import ClientEffects from '@/components/ClientEffects'
import Testimonials from '@/components/Testimonials'

export default function HomePage() {
  return (
    <>
      <ClientEffects />

      <header id="siteHeader">
        <div className="wrap flex items-center justify-between">
          <div className="brand"><b className="font-medium text-gold">N</b>usrat Build</div>
          <nav className="nav-links flex gap-9 text-[13px] tracking-wide text-ivory-dim">
            <a href="#about">Studio</a>
            <a href="#process">Process</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Journal</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-solid">Book a Consultation</a>
        </div>
      </header>

      <section id="hero" className="relative h-screen min-h-[680px] overflow-hidden bg-[linear-gradient(180deg,#0d0f13_0%,#0a0b0d_55%,#08090b_100%)]">
        <Hero3D />
        <div className="wrap relative z-[5] flex h-full flex-col justify-center pt-[70px]">
          <div className="hero-copy max-w-[640px]">
            <div className="eyebrow reveal">Nusrat Build — Architecture &amp; Construction</div>
            <h1 className="reveal reveal-delay-1">Architecture<br />drawn in <em>light.</em></h1>
            <p className="reveal reveal-delay-2">
              We design and build private residences where structure, light and landscape are
              considered as one continuous idea — from the first line on paper to the last stone
              set in place.
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
              <a href="#portfolio" className="btn btn-solid">Explore Portfolio</a>
              <a href="#process" className="btn">Our Process</a>
            </div>
          </div>
        </div>
        <div className="reveal reveal-delay-3 absolute bottom-[38px] left-8 z-[5] flex items-center gap-3 text-[11px] uppercase tracking-widest text-ivory-dim">
          <div className="scroll-line" /> Scroll
        </div>
      </section>

      <section id="stats" className="border-y border-white/10 bg-ink-2 !py-0">
        <div className="wrap">
          <div className="stats-row">
            <div className="stat reveal"><div className="stat-num" data-target="14">0</div><div className="lbl">Years Practicing</div></div>
            <div className="stat reveal reveal-delay-1"><div className="stat-num" data-target="86">0</div><div className="lbl">Projects Delivered</div></div>
            <div className="stat reveal reveal-delay-2"><div className="stat-num" data-target="120">0</div><div className="lbl">Clients Served</div></div>
            <div className="stat reveal reveal-delay-3"><div className="stat-num" data-target="6">0</div><div className="lbl">Countries</div></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap about-grid">
          <div className="blueprint-art reveal">
            <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="500" fill="#131519" />
              <g stroke="#c8a25c" strokeWidth="1" opacity="0.7">
                <rect x="60" y="260" width="280" height="140" />
                <rect x="60" y="180" width="170" height="80" />
                <line x1="60" y1="260" x2="60" y2="400" />
                <line x1="340" y1="260" x2="340" y2="400" />
                <line x1="120" y1="180" x2="120" y2="260" />
                <line x1="60" y1="150" x2="230" y2="150" />
                <line x1="60" y1="150" x2="60" y2="180" />
                <line x1="230" y1="150" x2="230" y2="180" />
              </g>
              <g stroke="#5b4636" strokeWidth="0.6" opacity="0.5">
                <line x1="0" y1="400" x2="400" y2="400" />
                <line x1="90" y1="400" x2="90" y2="440" />
                <line x1="310" y1="400" x2="310" y2="440" />
                <line x1="90" y1="440" x2="310" y2="440" />
              </g>
              <text x="60" y="120" fill="#c9c4b5" fontFamily="monospace" fontSize="10" letterSpacing="2">SITE PLAN — 01</text>
              <circle cx="200" cy="330" r="3" fill="#e8c987" />
            </svg>
          </div>
          <div className="about-copy">
            <div className="eyebrow reveal">The Studio</div>
            <h2 className="reveal reveal-delay-1 mb-6 mt-4 text-[clamp(28px,3.6vw,42px)]">
              Built on precision. Finished with restraint.
            </h2>
            <p className="reveal reveal-delay-1"><b>Nusrat Build</b> is an architecture and construction studio working on private residences, villas and small hospitality projects. We keep every project small enough that the same team who draws it is the team who builds it.</p>
            <p className="reveal reveal-delay-2">Our work favors honest materials — concrete, timber, stone and glass — arranged so that daylight becomes part of the floor plan rather than an afterthought.</p>
            <p className="reveal reveal-delay-3">Every commission starts with the site, not the style. The land tells us where the building wants to stand.</p>
          </div>
        </div>
      </section>

      <section id="process" className="bg-ink-2">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">How We Work</div>
            <h2 className="reveal reveal-delay-1">Five stages, one continuous line.</h2>
            <p className="reveal reveal-delay-2">From first sketch to handed-over keys, every project follows the same disciplined sequence — nothing skipped, nothing rushed.</p>
          </div>
          <div className="process-list">
            <div className="process-item reveal"><div className="idx">01</div><h3>Concept</h3><p>Site analysis, client brief and the first spatial studies — usually a week of drawing before a single wall is proposed.</p></div>
            <div className="process-item reveal reveal-delay-1"><div className="idx">02</div><h3>Design Development</h3><p>Materials, structure and services are resolved together, so the drawings that reach the site are already buildable.</p></div>
            <div className="process-item reveal reveal-delay-2"><div className="idx">03</div><h3>Permits &amp; Engineering</h3><p>We manage approvals and structural sign-off directly, so the client&apos;s only job is to keep choosing finishes.</p></div>
            <div className="process-item reveal reveal-delay-3"><div className="idx">04</div><h3>Construction</h3><p>Our own site team runs the build, with weekly progress reviews shared with the client throughout.</p></div>
            <div className="process-item reveal reveal-delay-3"><div className="idx">05</div><h3>Handover</h3><p>A final walkthrough, full documentation, and a maintenance plan for the first year in the house.</p></div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Selected Work</div>
            <h2 className="reveal reveal-delay-1">A few recent residences.</h2>
          </div>
          <div className="portfolio-grid">
            <div className="p-card reveal">
              <div className="p-visual">
                <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
                  <rect width="300" height="240" fill="#14161a" /><rect x="40" y="120" width="220" height="80" fill="#1f2228" /><rect x="40" y="90" width="140" height="40" fill="#232833" stroke="#c8a25c" strokeWidth="0.5" /><rect x="60" y="140" width="180" height="40" fill="#0f4a44" opacity="0.5" /><line x1="0" y1="200" x2="300" y2="200" stroke="#c8a25c" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>
              <div className="p-body"><div className="tag">Residential — Hisor</div><h3>Terrace House</h3><p>A stepped concrete residence set into a hillside, opening fully to the valley below.</p></div>
            </div>
            <div className="p-card reveal reveal-delay-1">
              <div className="p-visual">
                <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
                  <rect width="300" height="240" fill="#14161a" /><rect x="30" y="130" width="240" height="70" fill="#1f2228" /><rect x="90" y="100" width="120" height="30" fill="#232833" stroke="#c8a25c" strokeWidth="0.5" /><rect x="30" y="160" width="240" height="10" fill="#0f4a44" opacity="0.4" /><circle cx="250" cy="60" r="14" fill="#e8c987" opacity="0.15" />
                </svg>
              </div>
              <div className="p-body"><div className="tag">Villa — Varzob</div><h3>Riverline Villa</h3><p>A low, linear villa built along the water&apos;s edge with a cantilevered pool deck.</p></div>
            </div>
            <div className="p-card reveal reveal-delay-2">
              <div className="p-visual">
                <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
                  <rect width="300" height="240" fill="#14161a" /><rect x="60" y="110" width="180" height="90" fill="#1f2228" /><rect x="60" y="80" width="90" height="30" fill="#232833" stroke="#c8a25c" strokeWidth="0.5" /><rect x="60" y="200" width="180" height="6" fill="#5b4636" /><line x1="150" y1="80" x2="150" y2="200" stroke="#c8a25c" strokeWidth="0.4" opacity="0.5" />
                </svg>
              </div>
              <div className="p-body"><div className="tag">Renovation — Dushanbe</div><h3>Courtyard Residence</h3><p>A 1980s family home rebuilt around a new interior courtyard and garden.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-ink-2">
        <div className="wrap">
          <div className="section-head mx-auto mb-14 text-center">
            <div className="eyebrow reveal justify-center">Client Notes</div>
            <h2 className="reveal reveal-delay-1">Said after the keys changed hands.</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="box reveal">
            <div>
              <h2>Have a site in mind?</h2>
              <p>Tell us where the land is and what you&apos;re picturing. We reply within two working days with next steps.</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <a className="btn btn-solid" href="https://wa.me/992171116644" target="_blank" rel="noopener">Message on WhatsApp</a>
              <a className="btn" href="mailto:nsunatullo71@gmail.com">nsunatullo71@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-0 pb-9 pt-[60px]">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-col">
              <div className="brand"><b className="font-medium text-gold">N</b>usrat Build</div>
              <p className="mt-3.5 max-w-[280px] text-[13.5px] font-light leading-relaxed text-ivory-dim">
                An architecture and construction studio designing residences with restraint, precision and a strong sense of place.
              </p>
            </div>
            <div className="foot-col">
              <h4>Studio</h4>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#portfolio">Portfolio</a>
            </div>
            <div className="foot-col">
              <h4>Connect</h4>
              <a href="https://wa.me/992171116644" target="_blank" rel="noopener">WhatsApp</a>
              <a href="mailto:nsunatullo71@gmail.com">Email</a>
              <Link href="/login">Sign In</Link>
            </div>
            <div className="foot-col">
              <h4>Studio Hours</h4>
              <span className="block text-[14px] text-ivory-dim">Mon – Fri, 9:00–18:00</span>
              <span className="block text-[14px] text-ivory-dim">Dushanbe, Tajikistan</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7 text-[12px] text-ivory-dim">
            <span>© 2026 Nusrat Build. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
