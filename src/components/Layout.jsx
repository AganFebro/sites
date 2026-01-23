import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const date = new Date().toLocaleDateString();

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <div className="crt min-h-screen">
      <div className="container">
        <header className="panel flex flex-col gap-4 justify-between items-center text-center">
          <div className="w-full flex justify-between items-center border-b-2 border-dashed border-[var(--term-dim)] pb-2 mb-2">
            <div className="logo blink retro-font text-xs md:text-sm">SYSTEM STATUS: ONLINE</div>
            <div className="date retro-font text-xs md:text-sm">{date}</div>
          </div>

          <div className="flex justify-center gap-2 md:gap-4 flex-wrap w-full px-2">
            <a href="https://twitter.com/febroriginal" target="_blank" rel="noopener noreferrer" className="retro-font whitespace-nowrap" style={{ fontSize: 'clamp(8px, 1vw, 13px)' }}>[ TWITTER ]</a>
            <a href="https://discord.com/users/335738604901105667" target="_blank" rel="noopener noreferrer" className="retro-font whitespace-nowrap" style={{ fontSize: 'clamp(8px, 1vw, 13px)' }}>[ DISCORD ]</a>
            <a href="https://t.me/febri555" target="_blank" rel="noopener noreferrer" className="retro-font whitespace-nowrap" style={{ fontSize: 'clamp(8px, 1vw, 13px)' }}>[ TELEGRAM ]</a>
            <a href="https://www.youtube.com/@febroeth" target="_blank" rel="noopener noreferrer" className="retro-font whitespace-nowrap" style={{ fontSize: 'clamp(8px, 1vw, 13px)' }}>[ YOUTUBE ]</a>
            <a href="https://www.linkedin.com/in/febrian-a-aa5253256/" target="_blank" rel="noopener noreferrer" className="retro-font whitespace-nowrap" style={{ fontSize: 'clamp(8px, 1vw, 13px)' }}>[ LINKEDIN ]</a>
          </div>
        </header>

        <nav className="panel mb-8">
          <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" className={`text-xl md:text-2xl ${isActive('/')}`}>[ HOME ]</Link></li>
            <li><Link to="/stats" className={`text-xl md:text-2xl ${isActive('/stats')}`}>[ STATS ]</Link></li>
            <li><Link to="/quests" className={`text-xl md:text-2xl ${isActive('/quests')}`}>[ QUESTS ]</Link></li>
            {/* <li><Link to="/log" className={isActive('/log')}>[ LOG ]</Link></li> */}
          </ul>
        </nav>

        <main className="content">
          {children}
        </main>

        <footer className="panel mt-8 text-center text-sm">
          <p>© 2026 Febrian Avien Wibowo // RETRO_SYS_V.1.0</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
