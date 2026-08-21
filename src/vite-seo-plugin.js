import { PUBLIC_PATHS } from './config/seo-routes.js'

function xmlEscape(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function seoFiles(siteUrl, allowIndexing) {
  const origin = String(siteUrl || '').replace(/\/$/, '')
  const robots = allowIndexing
    ? [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${origin}/sitemap.xml`,
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n')

  const urls = PUBLIC_PATHS.map((path) => {
    const loc = path === '/' ? `${origin}/` : `${origin}${path}`
    return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n  </url>`
  }).join('\n')

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n')

  return { robots, sitemap }
}

export function seoPlugin(env) {
  const siteUrl = env.VITE_SITE_URL || ''
  const allowIndexing = env.VITE_ALLOW_INDEXING === 'true'
  const { robots, sitemap } = seoFiles(siteUrl, allowIndexing)

  return {
    name: 'pjh-seo',
    transformIndexHtml(html) {
      const content = allowIndexing ? 'index, follow' : 'noindex, nofollow'
      if (html.includes('name="robots"')) {
        return html.replace(
          /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
          `<meta name="robots" content="${content}" />`,
        )
      }
      return html.replace(
        '</head>',
        `    <meta name="robots" content="${content}" />\n  </head>`,
      )
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(robots)
          return
        }
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(sitemap)
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}
