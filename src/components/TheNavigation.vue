<script setup>
import NavItem from './NavItem.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants/index.js'
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
}

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
