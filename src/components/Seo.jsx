import { Helmet } from 'react-helmet-async'
import {
  ALLOW_INDEXING,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_TITLE,
  absUrl,
} from '../config/seo.js'

/**
 * Per-route head tags. Pass title, description, and path.
 * Canonical / OG / Twitter URLs always come from VITE_SITE_URL.
 */
export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  noindex = false,
}) {
  const url = absUrl(path)
  const imageUrl = image.startsWith('http') ? image : absUrl(image)
  const robots = !ALLOW_INDEXING || noindex ? 'noindex, nofollow' : 'index, follow'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PJ Haarsma" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
