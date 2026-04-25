import React from 'react';

/* ── Floating background blob ── */
const Blob = ({ style }) => (
  <div style={{ position: 'fixed', borderRadius: '50%', pointerEvents: 'none', zIndex: 0, ...style }} />
);


const Layout = ({ children }) => {
  return (
    <>
      {/* ── Decorative blobs ── */}
      <Blob style={{
        top: '-180px', left: '-80px',
        width: '580px', height: '580px',
        background: 'radial-gradient(circle, rgba(147,197,253,0.72) 0%, transparent 70%)',
        filter: 'blur(55px)',
        animation: 'blobFloat1 9s ease-in-out infinite',
      }} />
      <Blob style={{
        top: '5%', right: '-120px',
        width: '520px', height: '520px',
        background: 'radial-gradient(circle, rgba(249,168,212,0.68) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'blobFloat2 11s ease-in-out infinite',
      }} />
      <Blob style={{
        top: '45%', left: '25%',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(196,181,253,0.55) 0%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'blobFloat3 13s ease-in-out infinite',
      }} />
      <Blob style={{
        bottom: '-100px', right: '10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(167,243,208,0.60) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'blobFloat1 10s ease-in-out infinite reverse',
      }} />
      <Blob style={{
        bottom: '25%', left: '-60px',
        width: '380px', height: '380px',
        background: 'radial-gradient(circle, rgba(253,186,116,0.45) 0%, transparent 70%)',
        filter: 'blur(55px)',
        animation: 'blobFloat2 14s ease-in-out infinite',
      }} />

      {/* ── Page content ── */}
      <div className="wide-container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>

        <footer style={{ marginTop: '5rem' }}>
          <div className="glass-panel" style={{ textAlign: 'center', borderRadius: '16px', padding: '1.25rem' }}>
            <p className="mono" style={{ color: '#7c3aed', fontSize: '0.8rem' }}>
              © 2026 Febrian Avien Wibowo · Made with creativity
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
