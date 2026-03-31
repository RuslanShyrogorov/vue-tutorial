<script setup>
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'
// const navItems1 = ['timeline', 'progress', 'activities']
const navItems = {
  timeline: ClockIcon,
  progress: ChartBarIcon,
  activities: ListBulletIcon,
}
</script>

<template>
  Navigation:
  <ul class="flex w-full items-center justify-around">
    <li v-for="(icon, page) in navItems" :key="page" class="flex-1">
      <a :href="`#${page}`">
        <!--        variant render #2 use component-->
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </a>
    </li>
  </ul>
</template>

<!--        variant render #1 use v-if-->
<!--<template>-->
<!--  Navigation:-->
<!--  <ul class="flex w-full items-center justify-around">-->
<!--    <li v-for="page in navItems1" :key="page" class="flex-1">-->
<!--      <a :href="`#${page}`">-->
<!--        &lt;!&ndash;    variant render #2&ndash;&gt;-->
<!--        <ClockIcon v-if="page === 'timeline'" class="h-6 w-6" />-->
<!--        <ChartBarIcon v-else-if="page === 'progress'" class="h-6 w-6" />-->
<!--        <ListBulletIcon v-else class="h-6 w-6" />-->
<!--        {{ page }}-->
<!--      </a>-->
<!--    </li>-->
<!--  </ul>-->
<!--</template>-->
