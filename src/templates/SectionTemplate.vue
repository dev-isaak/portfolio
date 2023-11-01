<script setup>
import MainTitle from '@/components/general/MainTitle.vue'
import { defineProps } from 'vue'

defineProps({
  title: String,
})
</script>

<template>
  <MainTitle :title="title" />
  <div class="px-4 py-8">
    <slot>

    </slot>
  </div>
</template>