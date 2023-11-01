<script setup>
import ChevronUp from '@/components/icons/ChevronUp.vue'

const handleScrollTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <v-btn variant="elevated" color="teal" class="container-arrow" size="45" @click="handleScrollTop">
    <ChevronUp />
  </v-btn>
</template>

<style>
.container-arrow{
  position:fixed;
  bottom: 1em;
  right:1em;
  z-index: 10;
  border-radius: 10px;
}
</style>