<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>

<template>
  <v-column class="w-100 d-flex justify-center">
    <h1>{{ title }}</h1>
  </v-column>
</template>
