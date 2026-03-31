<script setup>
import { PAGE_PROGRESS } from '@/constants/index'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
    <div v-if="false" class="flex items-center gap-1">
      <div>Progress: <span class="font-mono">20%</span></div>
      <div :class="`h-3 w-3 rounded-full`" />
    </div>
    <div v-else class="flex items-center gap-1">
      Day complete!
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
  </a>
</template>
