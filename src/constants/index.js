import { ICON_CHART_BAR, ICON_CLOCK, ICON_LIST_BULLET } from '@/icons/index'
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS = [
  {
    page: PAGE_TIMELINE,
    icon: ICON_CLOCK,
  },
  {
    page: PAGE_ACTIVITIES,
    icon: ICON_LIST_BULLET,
  },
  {
    page: PAGE_PROGRESS,
    icon: ICON_CHART_BAR,
  },
]

export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0

export const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' },
]

export const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
}

export const PERIOD_SELECT_OPTIONS = [
  { value: 15, label: '00:15' },
  { value: 30, label: '00:30' },
  { value: 45, label: '00:45' },
]
