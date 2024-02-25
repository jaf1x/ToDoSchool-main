<script setup>
import { normalizePageHash } from './functions'
import Theheader from './/components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivites from './pages/TheActivites.vue'
import TheProgress from './pages/TheProgress.vue'
import TheSettings from './pages/TheSettings.vue'
import { ref } from 'vue'
import { NAV_ITEMS } from './components/constants'
import { PAGE_TIMELINE, PAGE_ACTIVITES, PAGE_PROGRESS, PAGE_SETTINGS } from './components/constants'
const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <main class="absolute mt-24 ml-24 flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivites v-show="currentPage === PAGE_ACTIVITES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheSettings v-show="currentPage === PAGE_SETTINGS" />
  </main>
  <Theheader @go-to-timeline="goTo(PAGE_TIMELINE)" @go-to-progress="goTo(PAGE_PROGRESS)" />
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
