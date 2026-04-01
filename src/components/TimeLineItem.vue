<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import { options } from '@/constants/index.js'
import { ref } from 'vue'
import { isTimeLineItemValid } from '@/utilities/validators.js'
import TimeLineHour from '@/components/TimeLineHour.vue'

const selectedActivityId = ref(1)

defineProps({
  timeItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
})
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimeLineHour :hour="timeItem.hour" />

    <BaseSelect
      :options="options"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
  </li>
</template>

<style scoped></style>
