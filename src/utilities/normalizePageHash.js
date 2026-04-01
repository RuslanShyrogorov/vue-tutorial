import { PAGE_TIMELINE } from '@/constants/index.js'
import { isPageValid } from '@/utilities/validators.js'

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
