import { NAV_ITEMS } from './components/constants'
import { HOURS_IN_DAY } from './components/constants'
import {MIDNIGHT_HOUR} from './components/constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isNull(value) {
  return value === null
}
function isUndefined(value) {
  return value === undefined
}
function isNumber(value) {
  return typeof value === 'number'
}
