const rawFiles = import.meta.glob('../posts/**/*.md', { eager: true, import: 'default' });
const imageFiles = import.meta.glob('../posts/**/*.{png,jpg,jpeg,gif,webp,svg,avif}', {
  eager: true,
  import: 'default',
});
const htmlFiles = import.meta.glob('../posts/**/*.html', {
  eager: true,
  import: 'default',
  query: '?url',
});
const assetFiles = {
  ...imageFiles,
  ...htmlFiles,
};

function normalizePostPath(path) {
  return path.replace(/^\.\.\/posts\//, '');
}

function slugFromPath(path) {
  const normalizedPath = normalizePostPath(path).replace(/\.md$/, '');
  const segments = normalizedPath.split('/');
  const lastSegment = segments.at(-1);
  const previousSegment = segments.at(-2);

  if (lastSegment === 'index' && previousSegment) {
    return previousSegment;
  }

  return lastSegment ?? normalizedPath;
}

function isRelativeReference(reference) {
  return Boolean(reference) &&
    !reference.startsWith('#') &&
    !reference.startsWith('/') &&
    !reference.startsWith('//') &&
    !/^[a-z][a-z\d+.-]*:/i.test(reference);
}

export function resolvePostAssetUrl(postSourcePath, reference) {
  if (!isRelativeReference(reference)) {
    return reference;
  }

  const normalizedPostPath = normalizePostPath(postSourcePath);
  const resolvedPath = decodeURIComponent(
    new URL(reference, `https://posts.local/${normalizedPostPath}`).pathname.slice(1)
  );
  const assetKey = `../posts/${resolvedPath}`;

  return assetFiles[assetKey] ?? reference;
}

function stripWrappingQuotes(value) {
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

function createPost(path, raw) {
  const { data, content } = parseFrontmatter(raw);

  return {
    sourcePath: path,
    slug: slugFromPath(path),
    title: data.title ?? 'Untitled',
    date: data.date ? String(data.date) : '',
    description: data.description ?? '',
    coverImage: data.coverImage ? resolvePostAssetUrl(path, data.coverImage) : null,
    content,
  };
}

export function getAllPosts() {
  return Object.entries(rawFiles)
    .map(([path, raw]) => createPost(path, raw))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug) {
  const entry = Object.entries(rawFiles).find(([path]) => slugFromPath(path) === slug);

  if (!entry) {
    return null;
  }

  const [path, raw] = entry;
  return createPost(path, raw);
}

export function formatPostDate(iso) {
  if (!iso) {
    return '';
  }

  const [year, month, day] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = Number.parseInt(month, 10) - 1;
  const dayNumber = Number.parseInt(day, 10);

  if (!Number.isInteger(monthIndex) || monthIndex < 0 || monthIndex >= months.length || !Number.isInteger(dayNumber)) {
    return iso;
  }

  return `${months[monthIndex]} ${dayNumber}, ${year}`;
}