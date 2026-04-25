import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../blog.css';
import { formatPostDate, getAllPosts } from '../lib/posts.js';

export default function BlogList() {
  const posts = useMemo(() => getAllPosts(), []);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  return (
    <div className="blog-shell">
      <div className="blog-ambient-orb blog-orb--1" aria-hidden="true" />
      <div className="blog-ambient-orb blog-orb--2" aria-hidden="true" />

      <div className="blog-frame">
        <header className="blog-header">
          <Link to="/" className="blog-back-link" aria-label="Back to portfolio">
            <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 4L7 10L13 16" />
            </svg>
            Portfolio
          </Link>
          <div className="blog-header-title">
            <h1 className="blog-title">Writing</h1>
            <p className="blog-subtitle">Notes from inside the work.</p>
          </div>
        </header>

        <main className="blog-list">
          {posts.length === 0 && (
            <p className="blog-empty">No posts yet.</p>
          )}
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              {post.coverImage && (
                <img src={post.coverImage} alt="" className="post-card__cover" loading="lazy" />
              )}
              <div className="post-card__body">
                <time className="post-card__date" dateTime={post.date}>{formatPostDate(post.date)}</time>
                <h2 className="post-card__title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.description && (
                  <p className="post-card__desc">{post.description}</p>
                )}
                <Link to={`/blog/${post.slug}`} className="post-card__read" aria-label={`Read ${post.title}`}>
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
