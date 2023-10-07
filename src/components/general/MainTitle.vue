<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>

<template>
  <v-column class="w-100">
    <h2 class="ml-6">{{ title }}</h2>
    <v-divider class="mt-2"></v-divider>
  </v-column>
</template>
