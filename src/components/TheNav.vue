<script setup>
import NavItems from './NavItems.vue'
import { NAV_ITEMS } from './constants'
import { isPageValid } from '../validators'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})
const emit = defineEmits({
  navigate: isPageValid
})
</script>
<template>
  <nav class="sticky right-0 z-10 w-6">
    <div>
      <ul class="menu p-4 w-20 overflow-y-auto text-sm bg-base-100 border-r border-b items-center">
        <NavItems
          class="mr-1"
          v-for="(icon, page) in NAV_ITEMS"
          :key="page"
          :href="`#${page}`"
          :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
          @click="emit('navigate', page)"
        >
          <component :is="icon" class="h-10 w-6" /> {{ page }}
        </NavItems>
      </ul>
    </div>
  </nav>
</template>
