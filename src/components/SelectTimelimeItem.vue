<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { options } from './constants'
import { isUndefinedOrNull, isNumberOrNull } from '../validators'
import { computed } from 'vue'
const props = defineProps({
  selected: {
    required: true,
    type: Number
  }
})
const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-6" />
    </BaseButton>
    <select
      class="w-full truncate rounded py-1 px-2 bg-gray-100 cursor-pointer"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">Отдых</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
