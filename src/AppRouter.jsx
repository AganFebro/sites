import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import BlogList from './pages/BlogList.jsx';
import BlogPost from './pages/BlogPost.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
