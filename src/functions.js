import { PAGE_TIMELINE, HOURS_IN_DAY } from './components/constants'

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  return PAGE_TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}
