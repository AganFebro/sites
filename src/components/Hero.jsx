import logo from '../assets/logo_colored.png';

const socialIcons = {
  Twitter: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Discord: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.128 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>,
  Telegram: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
  YouTube: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  LinkedIn: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  GitHub: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
};

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/febroriginal' },
  { label: 'Discord', href: 'https://discord.com/users/335738604901105667' },
  { label: 'Telegram', href: 'https://t.me/febri555' },
  { label: 'YouTube', href: 'https://www.youtube.com/@febroeth' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/febrian-a-aa5253256/' },
  { label: 'GitHub', href: 'https://github.com/AganFebro' },
];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '230K+', label: 'Community Members' },
  { value: '5+', label: 'Projects Built' },
];

const Hero = () => {
  return (
    <div style={{ paddingBottom: '3rem' }}>

      {/* ── Two-column hero ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        minHeight: 'calc(100vh - 200px)',
        paddingBottom: '3rem',
        maxWidth: '1000px',
      }}>

        {/* Left: text */}
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.82rem', fontWeight: 500, marginBottom: '2rem',
            background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)',
            padding: '0.35rem 1rem', borderRadius: '999px', color: 'var(--accent-purple)',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'inline-block', boxShadow: '0 0 8px var(--accent-purple)' }} />
            Available for opportunities
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.25rem', color: '#1a0533' }}>
            Febrian Avien<br />
            <span style={{
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Wibowo</span>
          </h1>

          <h2 style={{ fontSize: '1.2rem', color: '#5b21b6', fontWeight: 500, marginBottom: '2rem', opacity: 0.85 }}>
            Web3 Community Moderator
          </h2>

          {/* Bio glass card */}
          <div className="glass-panel" style={{ marginBottom: '2.5rem', maxWidth: '540px', padding: '1.5rem 1.75rem' }}>
            <p style={{ color: '#3730a3', lineHeight: 1.85, margin: 0, fontSize: '0.95rem' }}>
              Community moderator with 2+ years experience managing large-scale Web3 communities.
              Led regional engagement initiatives within a 230K Discord member server, maintaining strong daily active users globally.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <a
              href="https://twitter.com/febroriginal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 2rem', borderRadius: '999px',
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                boxShadow: '0 8px 24px rgba(168,85,247,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(168,85,247,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(168,85,247,0.4)'; }}
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/AganFebro"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 2rem', borderRadius: '999px',
                border: '1.5px solid rgba(91,33,182,0.3)',
                color: '#5b21b6', fontWeight: 700, fontSize: '0.9rem',
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.12)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(91,33,182,0.3)'; }}
            >
              GitHub ↗
            </a>
          </div>

          {/* Social icon links */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '10px',
                  color: '#5b21b6',
                  background: 'rgba(168,85,247,0.08)',
                  border: '1px solid rgba(168,85,247,0.15)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.18)'; e.currentTarget.style.color = '#ec4899'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.08)'; e.currentTarget.style.color = '#5b21b6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.15)'; }}
              >
                {socialIcons[label]}
              </a>
            ))}
          </div>
        </div>

        {/* Right: avatar glass card */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
          {/* Outer glow ring */}
          <div style={{
            position: 'relative',
            width: '290px', height: '290px',
          }}>
            {/* Glow behind */}
            <div style={{
              position: 'absolute', inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.15) 50%, transparent 70%)',
              filter: 'blur(20px)',
            }} />
            {/* Logo — no border circle */}
            <img
              src={logo}
              alt="Febrian Avien Wibowo"
              style={{
                width: '290px', height: '290px',
                objectFit: 'cover',
                position: 'relative', zIndex: 1,
                filter: 'drop-shadow(0 8px 24px rgba(168,85,247,0.25))',
              }}
            />
          </div>

          {/* Name tag card */}
          <div className="glass-panel" style={{ padding: '0.75rem 1.5rem', textAlign: 'center', borderRadius: '14px' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a0533', margin: 0 }}>Febrian Avien Wibowo</p>
            <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: '0.2rem 0 0' }}>@febroriginal</p>
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        {stats.map(({ value, label }) => (
          <div key={label} className="glass-panel" style={{
            textAlign: 'center', borderRadius: '20px', padding: '2rem 1.5rem',
            background: 'rgba(255,255,255,0.6)',
          }}>
            <p style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, lineHeight: 1,
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {value}
            </p>
            <p style={{ color: '#5b21b6', fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;
