import { HOURS_IN_DAY, MIDNIGHT_HOUR } from '@/constants/index'

export const generateTimeLineItems = () => {
  const timeLineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({ hour })
  }
  return timeLineItems
}
