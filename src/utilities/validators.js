import { HOURS_IN_DAY, MIDNIGHT_HOUR, navItems } from '@/constants/index.js'

export function isPageValid(currentPage) {
  return Object.keys(navItems).includes(currentPage)
}

export function isTimeLineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOneOptionValid)
}

function isSelectOneOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimeLineItemValid)
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined(value)
}

function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}

export function isNumber(value) {
  return typeof value === 'number'
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isString(value) {
  return typeof value === 'string'
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}
