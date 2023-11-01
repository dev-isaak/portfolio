<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>

<template>
  <div class="mx-8">
    <h2 class="ml-6 text-secondary">{{ title }}</h2>
    <v-divider class="mt-2"></v-divider>
  </div>
</template>
