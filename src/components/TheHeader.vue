<script setup>
import { isPageValid } from '@/validators';
import TheLogo from './TheLogo.vue'
import TheProgressHeader from './TheProgressHeader.vue'
import { PAGE_PROGRESS, PAGE_TIMELINE } from './constants';

// const emit = defineEmits(['goToTimeline', 'goToProgress'])
const emit = defineEmits({
  navigate: isPageValid
})
</script>
<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheProgressHeader @click="emit('navigate', PAGE_PROGRESS )" />
  </header>
</template>
