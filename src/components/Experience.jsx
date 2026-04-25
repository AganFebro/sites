import React from 'react';

const C = { text: '#1a0533', sub: '#3730a3', muted: '#6d28d9', faint: '#8b5cf6' };

const skills = [
  { name: 'Community Moderation', pct: 95, sub: 'Discord/Telegram management, Conflict Handling' },
  { name: 'Events & Engagement', pct: 90, sub: 'Hosting live games, podcasts, AMA' },
  { name: 'Growth & Social', pct: 85, sub: 'Content coordination, onboarding support' },
  { name: 'Product Support', pct: 80, sub: 'Explaining how-to to end users, answering product questions' },
  { name: 'Content & Media', pct: 75, sub: 'Streams on Discord & Twitch, video/photo editing' },
];

const Experience = () => {
  return (
    <div style={{ paddingBottom: '3rem' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="mono" style={{ fontSize: '0.75rem', color: C.faint, marginBottom: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Career</p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: C.text }}>
          Stats &amp;{' '}
          <span style={{ background: 'linear-gradient(135deg,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Skills</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

        {/* Experience column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p className="section-title">Experience</p>

          {/* CARV */}
          <div className="glass-panel" style={{ borderLeft: '3px solid #a855f7', borderRadius: '0 20px 20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text }}>
                <a href="https://carv.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>CARV</a>
              </h4>
              <span className="mono" style={{ fontSize: '0.7rem', color: C.faint, background: 'rgba(168,85,247,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>Feb 2024 – Jan 2026</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: C.sub, fontWeight: 600, marginBottom: '0.75rem' }}>Indonesia Community Moderator</p>
            <ul style={{ paddingLeft: '1.2rem', color: C.muted, fontSize: '0.875rem', lineHeight: 1.9 }}>
              <li>Handling CARV product support in global/regional community.</li>
              <li>Grew Indonesia Discord to top 3 most active global CARV communities.</li>
              <li>Hosted daily live events (game nights, quizzes).</li>
              <li>Owned conflict resolution &amp; escalation handling.</li>
              <li>Produced gaming-related videos for campaigns.</li>
              <li>Built community tools (survey webapps, tourney registration).</li>
            </ul>
          </div>

          {/* Anitya */}
          <div className="glass-panel" style={{ borderLeft: '3px solid #ec4899', borderRadius: '0 20px 20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                <a href="https://www.anitya.space/" target="_blank" rel="noopener noreferrer" style={{ color: '#ec4899' }}>Anitya</a>
              </h4>
              <span className="mono" style={{ fontSize: '0.7rem', color: C.faint, background: 'rgba(236,72,153,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>Aug 2025 – Sep 2025</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: C.sub, fontWeight: 600, marginBottom: '0.75rem' }}>Ambassador</p>
            <ul style={{ paddingLeft: '1.2rem', color: C.muted, fontSize: '0.875rem', lineHeight: 1.9 }}>
              <li>Designed 3D gamified experience within Anitya ecosystem.</li>
              <li>Promoted awareness through consistent content on X (Twitter).</li>
            </ul>
          </div>

        </div>

        {/* Skills column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p className="section-title">Skill Tree</p>
          <div className="glass-panel">
            {skills.map((skill, i) => (
              <div key={skill.name} style={{ marginBottom: i < skills.length - 1 ? '1.75rem' : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: C.text }}>{skill.name}</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${skill.pct}%` }} />
                </div>
                <p style={{ fontSize: '0.78rem', color: C.faint, marginTop: '0.3rem' }}>{skill.sub}</p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="glass-panel">
            <p className="section-title">Languages</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Indonesia — Native', 'English — Fluent'].map(l => (
                <span key={l} style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.875rem', color: C.sub, fontWeight: 500 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
