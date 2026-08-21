import http from 'node:http'
import fs from 'node:fs'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const PORT = Number(process.env.PORT || 4173)
const HOST = '0.0.0.0'

const TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function resolvePath(urlPath) {
  let decoded
  try {
    decoded = decodeURIComponent((urlPath || '/').split('?')[0])
  } catch {
    return null
  }
  if (decoded.includes('\0')) return null
  const resolved = path.resolve(ROOT, `.${decoded}`)
  if (resolved !== ROOT && !resolved.startsWith(`${ROOT}${path.sep}`)) return null
  return resolved
}

async function fileToServe(urlPath) {
  let filePath = resolvePath(urlPath)
  if (!filePath) return { status: 400 }

  try {
    const info = await stat(filePath)
    if (info.isDirectory()) filePath = path.join(filePath, 'index.html')
    await stat(filePath)
    return { status: 200, filePath }
  } catch {
    const ext = path.extname(filePath)
    if (ext && ext !== '.html') return { status: 404 }
    return { status: 200, filePath: path.join(ROOT, 'index.html') }
  }
}

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

function indexingHeaders() {
  try {
    const robots = fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf8')
    if (robots.includes('Disallow: /')) {
      return { 'X-Robots-Tag': 'noindex, nofollow' }
    }
  } catch {
    return { 'X-Robots-Tag': 'noindex, nofollow' }
  }
  return {}
}

const server = http.createServer(async (req, res) => {
  try {
    const result = await fileToServe(req.url || '/')
    if (result.status !== 200 || !result.filePath) {
      res.writeHead(result.status, { ...SECURITY_HEADERS, ...indexingHeaders() })
      res.end(result.status === 404 ? 'Not found' : 'Bad request')
      return
    }

    const ext = path.extname(result.filePath).toLowerCase()
    const hashedAsset = result.filePath.includes(`${path.sep}assets${path.sep}`)
    res.writeHead(200, {
      'Content-Type': TYPES[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html'
        ? 'no-cache'
        : hashedAsset
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=3600',
      ...SECURITY_HEADERS,
      ...indexingHeaders(),
    })
    fs.createReadStream(result.filePath).pipe(res)
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.writeHead(500, { ...SECURITY_HEADERS, ...indexingHeaders() })
      res.end('Server error')
    }
  }
})

server.listen(PORT, HOST, () => {
  console.log(`pj-haarsma listening on http://${HOST}:${PORT}`)
})
