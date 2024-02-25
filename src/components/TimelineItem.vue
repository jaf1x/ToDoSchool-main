<script setup>
const props = defineProps(['timelineItem'])
const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" :class="hourLinkClasses"> {{ timelineItem.hour }}:00 </a>
    <div>
      <select name="" id="" class="w-full truncate rounded py-1 px-2 bg-gray-100">
        <option selected disabled value="">Отдых</option>
        <option value="">Работа</option>
        <option value="">Чтение</option>
        <option value="">Тренировка</option>
      </select>
    </div>
  </li>
</template>
