import { useEffect, useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { marked } from 'marked';
import '../blog.css';
import { formatPostDate, getPostBySlug, resolvePostAssetUrl } from '../lib/posts.js';

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function injectDemoEmbeds(markdown, post) {
  return markdown.replace(/::demo\[(.+?)\]\((.+?)\)/g, (_match, title, source) => {
    const resolvedSource = resolvePostAssetUrl(post.sourcePath, source.trim());
    const safeTitle = escapeHtml(title.trim());
    const safeSource = escapeHtml(resolvedSource);

    return `
<section class="demo-embed">
  <div class="demo-embed__header">
    <span class="demo-embed__label">Live demo</span>
    <a class="demo-embed__link" href="${safeSource}" target="_blank" rel="noreferrer">Buka tab baru</a>
  </div>
  <iframe class="demo-embed__frame" src="${safeSource}" title="${safeTitle}" loading="lazy"></iframe>
</section>`;
  });
}

function rewriteEmbeddedAssetUrls(html, post) {
  const parsedDocument = new DOMParser().parseFromString(html, 'text/html');
  const attributesToResolve = ['src', 'href', 'poster'];

  for (const attributeName of attributesToResolve) {
    const elements = parsedDocument.querySelectorAll(`[${attributeName}]`);

    for (const element of elements) {
      const currentValue = element.getAttribute(attributeName);

      if (!currentValue) {
        continue;
      }

      const resolvedValue = resolvePostAssetUrl(post.sourcePath, currentValue);

      if (resolvedValue !== currentValue) {
        element.setAttribute(attributeName, resolvedValue);
      }
    }
  }

  return parsedDocument.body.innerHTML;
}

export default function BlogPost() {
  const { slug } = useParams();

  const post = useMemo(() => {
    const matchedPost = getPostBySlug(slug);

    if (!matchedPost) {
      return null;
    }

    const enhancedMarkdown = injectDemoEmbeds(matchedPost.content, matchedPost);
    const rawHtml = marked.parse(enhancedMarkdown);

    return {
      ...matchedPost,
      html: rewriteEmbeddedAssetUrls(rawHtml, matchedPost),
    };
  }, [slug]);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="prose-shell">
      <div className="blog-ambient-orb blog-orb--1" aria-hidden="true" />
      <div className="blog-ambient-orb blog-orb--2" aria-hidden="true" />

      <div className="prose-frame">
        <nav className="prose-nav">
          <Link to="/blog" className="blog-back-link" aria-label="Back to writing">
            <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 4L7 10L13 16" />
            </svg>
            Writing
          </Link>
        </nav>

        <article className="prose-article">
          <header className="prose-article-header">
            {post.coverImage && (
              <img src={post.coverImage} alt="" className="prose-cover" />
            )}
            <time className="prose-date" dateTime={post.date}>{formatPostDate(post.date)}</time>
            <h1 className="prose-heading">{post.title}</h1>
            {post.description && (
              <p className="prose-description">{post.description}</p>
            )}
          </header>

          <div
            className="prose-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </div>
  );
}
