<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
import TheActivitiesView from '@/views/TheActivitiesView.vue'
import TheProgressView from '@/views/TheProgressView.vue'
import TheTimelineView from '@/views/TheTimelineView.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants/index'
import { ref } from 'vue'
import { normalizePageHash } from '@/utilities/normalizePageHash'
import TheHeader from '@/components/TheHeader.vue'
import { generateTimeLineItems } from '@/utilities/generateTimeLineItems.js'

const currentPage = ref(normalizePageHash())

function goToPage(page) {
  currentPage.value = page
}
const timeLineItems = generateTimeLineItems()
const activities = ['Coding', 'Reading', 'Training']
</script>

<template>
  <TheHeader @navigate="goToPage($event)" />

  <main class="flex grow flex-col">
    <TheActivitiesView v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgressView v-show="currentPage === PAGE_PROGRESS" />
    <TheTimelineView v-show="currentPage === PAGE_TIMELINE" :timeLine-items="timeLineItems" />
  </main>

  <TheNavigation :current-page="currentPage" @navigate="goToPage($event)" />
</template>
