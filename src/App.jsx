import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo_colored.png';

const slides = [
  { id: 'hero', label: 'Prelude', liveLabel: 'Slide 1 of 5, hero' },
  { id: 'profile', label: 'Profile', liveLabel: 'Slide 2 of 5, profile' },
  { id: 'snapshot', label: 'Snapshot', liveLabel: 'Slide 3 of 5, snapshot' },
  { id: 'experience', label: 'Experience', liveLabel: 'Slide 4 of 5, experience' },
  { id: 'work', label: 'Selected Work', liveLabel: 'Slide 5 of 5, selected work' },
];

const metrics = [
  { value: '2+', label: 'Years in Web3 community moderation' },
  { value: '230K+', label: 'Largest Discord member base supported' },
  { value: 'Top 3', label: 'CARV Indonesia community rank globally' },
];

const roles = [
  {
    company: 'CARV',
    url: 'https://carv.io',
    span: 'February 2024 - January 2026',
    title: 'Community Moderator',
    summary:
      'Handled day-to-day moderation, product support, and live community operations for one of CARV\'s strongest regional communities.',
    highlights: [
      'Supported global and regional users with product guidance, escalation handling, and community support through chat.',
      'Expanded the Indonesia Discord community into one of the top three most active CARV communities worldwide.',
      'Ran daily activations including game nights, quizzes, and campaign content, plus lightweight event tooling like a tournament registration site.',
      'Streamed CARV Gaming Events on Twitch and produced edited gaming videos to support regional campaigns.',
    ],
  },
  {
    company: 'Anitya',
    url: 'https://anitya.space',
    span: 'August 2025 - September 2025',
    title: 'Ambassador',
    summary:
      'Supported ecosystem awareness through campaign content and an interactive experience concept tailored to the product.',
    highlights: [
      'Designed a 3D gamified experience inside the Anitya web app ecosystem to support ecosystem storytelling.',
      'Promoted awareness and engagement through consistent content on X.',
    ],
  },
];

const workItems = [
  {
    name: 'areyouai',
    tag: 'AI / Backend',
    description: 'Agent-to-agent social platform built in Go and Next.js — a turn-based room engine with SSE streaming, durable recovery, and a clean protocol for AI agents to discover and chat with each other.',
    url: 'https://github.com/AganFebro/areyouai',
    accent: '#8db7ff',
  },
  {
    name: 'Paylazor',
    tag: 'Web3 / npm',
    description: 'Published npm checkout widget for “Pay with Solana (USDC)” built on LazorKit passkey wallets and gasless transactions, with a live demo on Vercel.',
    url: 'https://github.com/AganFebro/paylazor',
    accent: '#7ed8c2',
  },
  {
    name: 'fhast',
    tag: 'Systems / Rust',
    description: 'Rust download manager with a Windows desktop app, terminal UI, CLI, and Chrome extension — segmented downloads, resume/retry, and SQLite persistence.',
    url: 'https://github.com/AganFebro/fhast',
    accent: '#ffb177',
  },
  {
    name: 'Survey Apps',
    tag: 'Community tool',
    description: 'Lightweight survey webapp used to collect structured feedback from regional community members after activations, cutting manual follow-up for the ops team.',
    url: 'https://github.com/AganFebro/CARV-Survey',
    accent: '#c39bff',
  },
];

const socialLinks = [
  { label: 'X', href: 'https://twitter.com/febroriginal' },
  { label: 'Discord', href: 'https://discord.com/users/335738604901105667' },
  { label: 'Telegram', href: 'https://t.me/febri555' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/febrian-a-aa5253256/' },
  { label: 'GitHub', href: 'https://github.com/AganFebro' },
];

const orbStates = [
  [
    { x: '-8%', y: '-10%', scale: 1.02 },
    { x: '6%', y: '-4%', scale: 1 },
    { x: '-4%', y: '4%', scale: 1.04 },
    { x: '2%', y: '6%', scale: 0.98 },
  ],
  [
    { x: '-12%', y: '-5%', scale: 1.08 },
    { x: '10%', y: '-8%', scale: 1.04 },
    { x: '-8%', y: '8%', scale: 0.98 },
    { x: '5%', y: '10%', scale: 1.02 },
  ],
  [
    { x: '-6%', y: '-2%', scale: 1.12 },
    { x: '8%', y: '-10%', scale: 0.96 },
    { x: '-10%', y: '10%', scale: 1.02 },
    { x: '0%', y: '12%', scale: 1.06 },
  ],
  [
    { x: '-10%', y: '-8%', scale: 1 },
    { x: '4%', y: '-2%', scale: 1.08 },
    { x: '-3%', y: '12%', scale: 1.06 },
    { x: '8%', y: '6%', scale: 0.96 },
  ],
  [
    { x: '-7%', y: '-6%', scale: 1.04 },
    { x: '9%', y: '-5%', scale: 1.02 },
    { x: '-6%', y: '10%', scale: 1.02 },
    { x: '6%', y: '11%', scale: 1 },
  ],
];

function ArrowIcon({ direction }) {
  const rotation = direction === 'left' ? '180 12 12' : '0 12 12';

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path
        d="M8 5.5 15.5 12 8 18.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        transform={`rotate(${rotation})`}
      />
    </svg>
  );
}

function SocialIcon({ label }) {
  switch (label) {
    case 'X':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.503 11.24h-6.657l-4.714-6.232-5.402 6.232H2.747l7.731-8.836L1.254 2.25H7.91l4.253 5.622 6.081-5.622Zm-1.168 17.52h1.833L6.914 4.126H5.081Z" fill="currentColor" />
        </svg>
      );
    case 'Discord':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.74 19.74 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.212.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.076.076 0 0 0-.078-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .03.058 19.93 19.93 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.04-.106 13.13 13.13 0 0 1-1.873-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.373-.292a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.88 19.88 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.55-13.66a.061.061 0 0 0-.03-.03ZM8.02 15.33c-1.184 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418Zm7.975 0c-1.184 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" fill="currentColor" />
        </svg>
      );
    case 'Telegram':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm5.907 7.224c.1-.002.321.023.465.14a.51.51 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z" fill="currentColor" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286ZM5.337 7.433A2.063 2.063 0 1 1 5.337 3.307a2.063 2.063 0 0 1 0 4.126Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771A1.75 1.75 0 0 0 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451A1.75 1.75 0 0 0 24 22.271V1.729A1.75 1.75 0 0 0 22.222 0h.003Z" fill="currentColor" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.49 11.49 0 0 1 6 0c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function SlideShell({ active, className = '', children }) {
  const scrollRef = useRef(null);
  const [scrollMetrics, setScrollMetrics] = useState({
    visible: false,
    thumbHeight: 0,
    thumbOffset: 0,
  });

  useLayoutEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return undefined;
    }

    const updateScrollMetrics = () => {
      const { clientHeight, scrollHeight, scrollTop } = element;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 1) {
        setScrollMetrics((current) => {
          if (!current.visible && current.thumbHeight === 0 && current.thumbOffset === 0) {
            return current;
          }

          return { visible: false, thumbHeight: 0, thumbOffset: 0 };
        });
        return;
      }

      const thumbHeight = Math.min(Math.max((clientHeight / scrollHeight) * clientHeight, 3.5 * 16), clientHeight);
      const travel = Math.max(clientHeight - thumbHeight, 0);
      const thumbOffset = maxScroll > 0 ? (scrollTop / maxScroll) * travel : 0;

      setScrollMetrics((current) => {
        if (
          current.visible &&
          Math.abs(current.thumbHeight - thumbHeight) < 0.5 &&
          Math.abs(current.thumbOffset - thumbOffset) < 0.5
        ) {
          return current;
        }

        return {
          visible: true,
          thumbHeight,
          thumbOffset,
        };
      });
    };

    const handleResize = () => {
      window.requestAnimationFrame(updateScrollMetrics);
    };

    updateScrollMetrics();

    element.addEventListener('scroll', updateScrollMetrics, { passive: true });
    window.addEventListener('resize', handleResize);

    let resizeObserver;

    if (typeof ResizeObserver === 'function') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(element);

      if (element.firstElementChild instanceof Element) {
        resizeObserver.observe(element.firstElementChild);
      }
    }

    return () => {
      element.removeEventListener('scroll', updateScrollMetrics);
      window.removeEventListener('resize', handleResize);
      resizeObserver?.disconnect();
    };
  }, [active]);

  return (
    <section className={`slide ${className}`.trim()} aria-hidden={!active}>
      <div ref={scrollRef} className="slide-scroll-area">
        {children}
      </div>
      {scrollMetrics.visible ? (
        <span className="slide-scrollbar" aria-hidden="true">
          <span
            className="slide-scrollbar__thumb"
            style={{
              height: `${scrollMetrics.thumbHeight}px`,
              transform: `translateY(${scrollMetrics.thumbOffset}px)`,
            }}
          />
        </span>
      ) : null}
    </section>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = slides.length - 1;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      const activeElement = document.activeElement;
      const isTypingTarget =
        activeElement instanceof HTMLElement &&
        (activeElement.isContentEditable ||
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.tagName === 'SELECT');

      if (isTypingTarget) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((current) => Math.max(current - 1, 0));
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((current) => Math.min(current + 1, lastIndex));
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lastIndex]);

  const goPrevious = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const goNext = () => {
    setActiveIndex((current) => Math.min(current + 1, lastIndex));
  };

  return (
    <div className="app-shell">
      <p id="slideshow-help" className="sr-only">
        Use the previous and next buttons or the left and right arrow keys to move between slides.
      </p>
      <div className="sr-only" aria-live="polite">
        {slides[activeIndex].liveLabel}
      </div>

      <div className="ambient-scene" aria-hidden="true">
        {orbStates[activeIndex].map((state, index) => (
          <span
            key={`${slides[activeIndex].id}-${index}`}
            className={`ambient-orb ambient-orb--${index + 1}`}
            style={{
              transform: `translate3d(${state.x}, ${state.y}, 0) scale(${state.scale})`,
            }}
          />
        ))}
      </div>

      <main className="glass-frame" aria-describedby="slideshow-help" aria-label="Portfolio slideshow">
        <div className="frame-bar">
          <div className="frame-copy">
            <p className="frame-copy__eyebrow">{slides[activeIndex].label}</p>
            <p className="frame-copy__count">
              {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </p>
          </div>

          <div className="frame-actions" aria-label="Slide controls">
            <button
              type="button"
              className="nav-arrow"
              onClick={goPrevious}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              className="nav-arrow"
              onClick={goNext}
              disabled={activeIndex === lastIndex}
              aria-label="Next slide"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="slides-window">
          <div
            className="slides-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <SlideShell className="slide--hero" active={activeIndex === 0}>
              <div className="slide-panel hero-stage">
                <div className="hero-mark">
                  <img src={logo} alt="Febrian logo" className="hero-mark__image" />
                </div>
                <div className="hero-copy">
                  <h1 className="hero-name" aria-label="Febrian">
                    <span className="hero-name__viewport" aria-hidden="true">
                      <span className="hero-name__track">
                        <span className="hero-name__line">febro</span>
                        <span className="hero-name__line">Febrian</span>
                      </span>
                    </span>
                  </h1>
                  <div className="social-row social-row--hero" aria-label="Social links">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={item.label}
                        tabIndex={activeIndex === 0 ? 0 : -1}
                      >
                        <SocialIcon label={item.label} />
                      </a>
                    ))}
                    <Link
                      to="/blog"
                      className="social-link social-link--writing"
                      aria-label="Writing"
                      tabIndex={activeIndex === 0 ? 0 : -1}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SlideShell>

            <SlideShell active={activeIndex === 1}>
              <div className="slide-panel profile-layout">
                <article className="surface-card surface-card--feature">
                  <h2 className="section-heading">Building and running Web3 communities through daily live events, moderation, and user support.</h2>
                  <p className="body-copy">
                    Community moderator with 2+ years scaling Web3 communities globally. Hosted daily live
                    events including game nights, quizzes, and AMAs — growing the Indonesia CARV Discord
                    into one of the top 3 most active communities worldwide across a 230k+ member network.
                    Acts as a bridge between community feedback and internal teams.
                  </p>
                  <div className="chip-row" aria-label="Focus areas">
                    <span className="chip">Community moderation</span>
                    <span className="chip">Live event hosting</span>
                    <span className="chip">Growth & retention</span>
                    <span className="chip">Product support</span>
                    <span className="chip">Content & media</span>
                  </div>
                </article>
              </div>
            </SlideShell>

            <SlideShell active={activeIndex === 2}>
              <div className="slide-panel snapshot-layout">
                <article className="surface-card surface-card--compact">
                  <h2 className="section-heading section-heading--compact">230k+ members, daily live events, and bilingual community operations.</h2>
                  <p className="body-copy body-copy--compact">
                    Numbers and scope across recent roles — Discord scale, community rank, and years running live operations.
                  </p>
                </article>

                <div className="metric-grid metric-grid--balanced">
                  {metrics.map((metric) => (
                    <article key={metric.label} className="surface-card metric-card">
                      <p className="metric-card__value">{metric.value}</p>
                      <p className="metric-card__label">{metric.label}</p>
                    </article>
                  ))}
                  <article className="surface-card metric-card">
                    <p className="metric-card__value">What I cover</p>
                    <p className="metric-card__label">
                      Live events, moderation, and bilingual support across Discord, Telegram, and Twitch.
                    </p>
                  </article>
                </div>
              </div>
            </SlideShell>

            <SlideShell active={activeIndex === 3}>
              <div className="slide-panel single-column-slide">
                <article className="surface-card">
                  <div className="role-list">
                    {roles.map((role) => (
                      <article key={role.company} className="role-card">
                        <div className="role-card__topline">
                          <div>
                            <h2 className="role-card__company">
                              {role.url ? (
                                <a href={role.url} target="_blank" rel="noopener noreferrer">{role.company}</a>
                              ) : role.company}
                            </h2>
                            <p className="role-card__title">{role.title}</p>
                          </div>
                          <p className="role-card__span">{role.span}</p>
                        </div>
                        <p className="role-card__summary">{role.summary}</p>
                        <ul className="role-card__highlights">
                          {role.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </article>
              </div>
            </SlideShell>

            <SlideShell active={activeIndex === 4}>
              <div className="slide-panel single-column-slide">
                <article className="surface-card surface-card--feature">
                  <h2 className="section-heading section-heading--compact">
                    Things I have designed and built, from backend systems to Web3 tooling.
                  </h2>
                  <div className="work-grid work-grid--feature">
                    {workItems.map((item) => (
                      <article
                        key={item.name}
                        className="work-card"
                        style={{ '--work-accent': item.accent }}
                      >
                        <p className="work-card__tag">{item.tag}</p>
                        <h2 className="work-card__name">
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                          ) : item.name}
                        </h2>
                        <p className="work-card__copy">{item.description}</p>
                      </article>
                    ))}
                  </div>
                  <p className="body-copy body-copy--compact body-copy--full">
                    Check my GitHub to see more of my projects —{' '}
                    <a href="https://github.com/AganFebro" target="_blank" rel="noopener noreferrer">github.com/AganFebro</a>.
                  </p>
                </article>
              </div>
            </SlideShell>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;