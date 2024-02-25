
import { PAGE_TIMELINE, PAGE_ACTIVITES, PAGE_PROGRESS, PAGE_SETTINGS } from './components/constants'

export function normalizePageHash() {
    const hash = window.location.hash.slice(1)
  
    if ([PAGE_ACTIVITES, PAGE_PROGRESS, PAGE_SETTINGS].includes(hash)) {
      return hash
    }
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
  }