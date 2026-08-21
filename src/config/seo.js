/**
 * Site URL and indexing come only from Vite env vars.
 * Do not put the domain in source — change .env (and rebuild) at launch.
 */
export const SITE_URL = String(import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

// Set VITE_ALLOW_INDEXING=true only AFTER the custom domain is connected.
export const ALLOW_INDEXING = import.meta.env.VITE_ALLOW_INDEXING === 'true'

export const DEFAULT_TITLE = 'PJ Haarsma — Producer, Novelist, Game Creator'
export const DEFAULT_DESCRIPTION =
  'PJ Haarsma is an Emmy-winning producer, science fiction novelist, and game creator. Founder of Redbear Films.'
export const DEFAULT_IMAGE = '/original/tv-portrait.avif'

export function absUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
