<script setup>
import { ref } from 'vue'
import SelectTimelimeItem from './SelectTimelimeItem.vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object
  }
})

const selectedActiveId = ref(1)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />

    <SelectTimelimeItem :selected="selectedActiveId" @select="selectedActiveId = $event" />
  </li>
</template>
