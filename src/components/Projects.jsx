import React from 'react';

const C = { text: '#1a0533', sub: '#3730a3', muted: '#6d28d9', faint: '#8b5cf6' };

const hackathons = [
  {
    name: 'NEOLAND',
    status: 'WINNER',
    isWinner: true,
    desc: 'NFT marketplace built from scratch on CARV SVM Network.',
    detail: '3rd Team\'s Choice · 1st Community Favorite',
    href: 'https://github.com/AganFebro/neoland',
  },
  {
    name: 'PAYLAZOR',
    status: 'TBA',
    isWinner: false,
    desc: 'A plug-n-play UI widget built on top of LazorKit SDK.',
    detail: null,
    href: 'https://github.com/AganFebro/paylazor',
  },
];

const sideQuests = [
  { name: 'Forge OCR', desc: 'OCR + auto-mining helper for Roblox.', href: 'https://github.com/AganFebro/forge-ocr', color: '#a855f7' },
  { name: 'Kwitansi Digital', desc: 'Android app to print receipts.', href: 'https://github.com/AganFebro/Kwitansi-Digital', color: '#ec4899' },
  { name: 'CARV Survey', desc: 'Community survey web app.', href: 'https://github.com/AganFebro/CARV-Survey', color: '#60a5fa' },
  { name: 'Gaming Leaderboard', desc: 'Tournament leaderboard system.', href: 'https://github.com/AganFebro/CARV-Gaming-Leaderboard', color: '#34d399' },
  { name: 'Flask Web', desc: 'Notes + Money management app.', href: 'https://github.com/AganFebro/flask-web', color: '#fb923c' },
  { name: 'Youtube Automation', desc: 'Youtube automation using ffmpeg, n8n, and whisk-api.', href: 'https://github.com/AganFebro/yt-automation', color: '#f59e0b' },
  { name: 'Kust Widget', desc: 'Widget engine built from scratch using Rust.', href: 'https://github.com/AganFebro/kust-widget', color: '#06b6d4' },
  { name: 'Openclaw Opencode Bridge', desc: 'Let Openclaw codes in Opencode.', href: 'https://github.com/AganFebro/openclaw-opencode-bridge', color: '#8b5cf6' },
];

const Projects = () => {
  return (
    <div style={{ paddingBottom: '3rem' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="mono" style={{ fontSize: '0.75rem', color: C.faint, marginBottom: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Portfolio</p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: C.text }}>
          Quest{' '}
          <span style={{ background: 'linear-gradient(135deg,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Log</span>
        </h2>
      </div>

      {/* Hackathons */}
      <div style={{ marginBottom: '3.5rem' }}>
        <p className="section-title" style={{ marginBottom: '1.5rem' }}>Hackathon Bosses</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {hackathons.map(({ name, status, isWinner, desc, detail, href }) => (
            <div
              key={name}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                transition: 'transform 0.25s, box-shadow 0.25s',
                background: isWinner
                  ? 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.08))'
                  : 'var(--glass-bg)',
                borderColor: isWinner ? 'rgba(168,85,247,0.3)' : 'var(--glass-border)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(168,85,247,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: C.text }}>{name}</h4>
                <span style={{
                  fontSize: '0.68rem', padding: '0.25rem 0.7rem', borderRadius: '999px',
                  fontFamily: 'JetBrains Mono, monospace', fontWeight: 600,
                  background: isWinner ? 'linear-gradient(135deg,#a855f7,#ec4899)' : 'rgba(167,139,250,0.15)',
                  color: isWinner ? '#fff' : C.faint,
                  border: isWinner ? 'none' : '1px solid rgba(167,139,250,0.3)',
                }}>
                  {status}
                </span>
              </div>
              <p style={{ color: C.sub, fontSize: '0.9rem', marginBottom: '0.75rem', lineHeight: 1.7 }}>{desc}</p>
              {detail && <p className="mono" style={{ color: C.faint, fontSize: '0.72rem', marginBottom: '1rem' }}>{detail}</p>}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.82rem', color: '#7c3aed', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                View Code ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Side quests */}
      <div>
        <p className="section-title" style={{ marginBottom: '1.5rem' }}>Side Quests</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {sideQuests.map(({ name, desc, href, color }) => (
            <div
              key={name}
              className="glass-panel"
              style={{
                borderRadius: '18px',
                transition: 'transform 0.25s, box-shadow 0.25s',
                borderTop: `3px solid ${color}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${color}30`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: color }} />
              </div>
              <h5 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: C.text }}>{name}</h5>
              <p style={{ color: C.muted, fontSize: '0.82rem', marginBottom: '0.9rem', lineHeight: 1.6 }}>{desc}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.78rem', color, fontWeight: 600 }}
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
