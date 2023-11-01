<script setup>
import ChevronUp from '@/components/icons/ChevronUp.vue'
import { onMounted, computed, ref } from 'vue'
import ScrollTop from '@/components/general/ScrollTop.vue'

const botonToTop = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      botonToTop.value = true
    } else{
      botonToTop.value = false
    }
  })

})

const handleScrollTop = () => {

  window.scrollTo(0, 0)
}
</script>

<template>
  <v-btn v-if="botonToTop" variant="elevated" color="teal" class="container-arrow" size="45" @click="handleScrollTop">
    {{ offset }}
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