import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://febro.one';
const FALLBACK_IMAGE_PATH = '/logo_colored.png';
const FALLBACK_IMAGE_URL = `${SITE_URL}${FALLBACK_IMAGE_PATH}`;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');
const postsDir = path.join(projectRoot, 'src', 'posts');
const sourceLogoPath = path.join(projectRoot, 'src', 'assets', 'logo_colored.png');

async function main() {
  const template = await fs.readFile(templatePath, 'utf8');
  await fs.copyFile(sourceLogoPath, path.join(distDir, 'logo_colored.png'));

  const markdownFiles = await collectMarkdownFiles(postsDir);

  for (const markdownPath of markdownFiles) {
    await buildPostPage(template, markdownPath);
  }
}

async function collectMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const markdownFiles = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      markdownFiles.push(...await collectMarkdownFiles(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      markdownFiles.push(entryPath);
    }
  }

  return markdownFiles;
}

function normalizeSlashes(value) {
  return value.split(path.sep).join('/');
}

function slugFromPath(markdownPath) {
  const relativePath = normalizeSlashes(path.relative(postsDir, markdownPath)).replace(/\.md$/, '');
  const segments = relativePath.split('/');
  const lastSegment = segments.at(-1);
  const previousSegment = segments.at(-2);

  if (lastSegment === 'index' && previousSegment) {
    return previousSegment;
  }

  return lastSegment ?? relativePath;
}

function stripWrappingQuotes(value) {
  if (!value) {
    return value;
  }

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) {
    return {
      data: {},
      content: raw,
    };
  }

  const data = {};

  for (const line of match[1].split(/\r?\n/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf(':');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim();

    data[key] = stripWrappingQuotes(value);
  }

  return {
    data,
    content: raw.slice(match[0].length),
  };
}

function stripContentToText(content) {
  return content
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/::demo\[[^\]]*\]\([^\)]+\)/g, ' ')
    .replace(/!\[[^\]]*\]\([^\)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\r?\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function createDescription(frontmatterDescription, content) {
  if (frontmatterDescription && frontmatterDescription.trim()) {
    return frontmatterDescription.trim();
  }

  const plainText = stripContentToText(content);

  if (!plainText) {
    return 'Tulisan dari febro.';
  }

  if (plainText.length <= 180) {
    return plainText;
  }

  return `${plainText.slice(0, 177).trimEnd()}...`;
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replacePattern(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Missing expected tag for pattern: ${pattern}`);
  }

  pattern.lastIndex = 0;
  return html.replace(pattern, replacement);
}

function applyMetadata(template, metadata) {
  const replacements = [
    [/<title>.*?<\/title>/s, `<title>${escapeHtmlAttribute(metadata.title)}</title>`],
    [/<meta[^>]*name="description"[^>]*>/i, `<meta name="description" content="${escapeHtmlAttribute(metadata.description)}" />`],
    [/<meta[^>]*property="og:type"[^>]*>/i, `<meta property="og:type" content="${escapeHtmlAttribute(metadata.type)}" />`],
    [/<meta[^>]*property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtmlAttribute(metadata.title)}" />`],
    [/<meta[^>]*property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtmlAttribute(metadata.description)}" />`],
    [/<meta[^>]*property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeHtmlAttribute(metadata.url)}" />`],
    [/<meta[^>]*property="og:image"[^>]*>/i, `<meta property="og:image" content="${escapeHtmlAttribute(metadata.image)}" />`],
    [/<meta[^>]*property="og:image:alt"[^>]*>/i, `<meta property="og:image:alt" content="${escapeHtmlAttribute(metadata.imageAlt)}" />`],
    [/<meta[^>]*name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtmlAttribute(metadata.title)}" />`],
    [/<meta[^>]*name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeHtmlAttribute(metadata.description)}" />`],
    [/<meta[^>]*name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${escapeHtmlAttribute(metadata.image)}" />`],
    [/<link[^>]*rel="canonical"[^>]*>/i, `<link rel="canonical" href="${escapeHtmlAttribute(metadata.url)}" />`],
  ];

  return replacements.reduce(
    (html, [pattern, replacement]) => replacePattern(html, pattern, replacement),
    template,
  );
}

async function resolveCoverImage(markdownPath, coverImageReference, slug) {
  if (!coverImageReference) {
    return FALLBACK_IMAGE_URL;
  }

  if (/^[a-z][a-z\d+.-]*:/i.test(coverImageReference)) {
    return coverImageReference;
  }

  if (coverImageReference.startsWith('/')) {
    return `${SITE_URL}${coverImageReference}`;
  }

  const sourceImagePath = path.resolve(path.dirname(markdownPath), coverImageReference);

  try {
    await fs.access(sourceImagePath);
  } catch {
    return FALLBACK_IMAGE_URL;
  }

  const outputDirectory = path.join(distDir, 'blog', slug);
  const imageName = path.basename(sourceImagePath);
  const destinationPath = path.join(outputDirectory, imageName);

  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.copyFile(sourceImagePath, destinationPath);

  return `${SITE_URL}/blog/${slug}/${encodeURIComponent(imageName)}`;
}

async function buildPostPage(template, markdownPath) {
  const raw = await fs.readFile(markdownPath, 'utf8');
  const { data, content } = parseFrontmatter(raw);
  const slug = slugFromPath(markdownPath);
  const title = data.title ? String(data.title).trim() : slug;
  const description = createDescription(data.description, content);
  const image = await resolveCoverImage(markdownPath, data.coverImage, slug);
  const url = `${SITE_URL}/blog/${slug}`;
  const html = applyMetadata(template, {
    title,
    description,
    type: 'article',
    url,
    image,
    imageAlt: `${title} cover image`,
  });
  const outputDirectory = path.join(distDir, 'blog', slug);

  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.writeFile(path.join(outputDirectory, 'index.html'), html, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});