<script setup>
import TheHeader from './components/TheHeader'
import TheNavigation from '@/components/TheNavigation'
import TheActivitiesView from '@/views/TheActivitiesView'
import TheProgressView from '@/views/TheProgressView'
import TheTimelineView from '@/views/TheTimelineView'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants/index'
import { ref } from 'vue'
import { normalizePageHash } from '@/utilities/normalizePageHash'

const currentPage = ref(normalizePageHash())

function goToPage(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to-timeline="goToPage(PAGE_TIMELINE)" @go-to-progress="goToPage(PAGE_PROGRESS)" />

  <main class="flex grow flex-col">
    <TheActivitiesView v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgressView v-show="currentPage === PAGE_PROGRESS" />
    <TheTimelineView v-show="currentPage === PAGE_TIMELINE" />
  </main>

  <TheNavigation :current-page="currentPage" @navigate="goToPage($event)" />
</template>
