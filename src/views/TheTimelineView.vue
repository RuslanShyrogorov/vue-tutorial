<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue'
import { validateTimelineItems } from '@/utilities/validators.js'

defineProps({
  timeLineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
    // validator(timeLineItems) {
    //   return timeLineItems.every(isTimeLineItemValid)
    // },
  },
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimeLineItem v-for="item in timeLineItems" :key="item.hour" :time-item="item" />
    </ul>
  </div>
</template>
