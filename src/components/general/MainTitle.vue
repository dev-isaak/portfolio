<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>

<template>
  <div class="mx-8 d-flex justify-center">
    <div class="d-flex flex-column">
      <div data-aos="fade-left" data-aos-duration="1500" class="line-top bg-teal"></div>
      <h2 class="text-secondary">{{ title }}</h2>
      <div data-aos="fade-right" data-aos-duration="1500" class="line-bottom bg-teal"></div>
    </div>
  </div>
</template>

<style scoped>
h2{
  margin-bottom:.3em;
  margin-top: .3em;
  text-transform: uppercase;
}
.line-bottom{
  width:20px;
  height: 2.2px;
}
.line-top{
  width:20px;
  height: 1.5px;
  align-self: end;
}
</style>
