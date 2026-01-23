import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/stats" element={<Experience />} />
          <Route path="/quests" element={<Projects />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
