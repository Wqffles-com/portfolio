// Renders each route to static HTML after `vite build` so crawlers and
// AI tools that don't run JavaScript still get the full page content.
import fs from 'node:fs'
import path from 'node:path'
import { render, routes } from './dist-ssr/entry-server.js'

const SITE = 'https://wqffles.com'
const template = fs.readFileSync('dist/index.html', 'utf-8')
const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

for (const url of routes) {
  const { html, title } = render(url)
  const page = template
    .replace(/<div id="root">[\s\S]*?<\/noscript>\s*<\/div>/, `<div id="root">${html}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(rel="canonical" href=")[^"]*/, `$1${SITE}${url}`)
    .replace(/(property="og:url" content=")[^"]*/, `$1${SITE}${url}`)
  // Write both /x/index.html and /x.html so either static-server lookup style finds it.
  const files = url === '/' ? ['dist/index.html'] : [path.join('dist', url, 'index.html'), `dist${url}.html`]
  for (const file of files) {
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, page)
  }
  console.log(`prerendered ${url} -> ${files.join(', ')}`)
}

fs.rmSync('dist-ssr', { recursive: true, force: true })
