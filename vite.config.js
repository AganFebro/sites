import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Transforms every .md file into a JS module that exports the raw text as default.
const mdRawPlugin = {
  name: 'vite-md-raw',
  transform(src, id) {
    if (id.endsWith('.md')) {
      return { code: `export default ${JSON.stringify(src)}`, map: null }
    }
  },
}

export default defineConfig({
  plugins: [react(), mdRawPlugin],
  base: '/',
})
