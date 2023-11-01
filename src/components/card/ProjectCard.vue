<script setup>
import { defineProps } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
defineProps({
  title: String,
  image: String,
  subtitle: String,
  chipList: Array,
  chipColor: String,
})
</script>

<template>
  <v-card :width="smAndUp ? 400 : '100%'" class="mb-8 pa-6 rounded-lg card-item" >
    <v-img :src="image" height="150" cover></v-img>
    <v-card-title class="my-2 text-secondary">{{ title }}</v-card-title>
    <v-card-text>{{ subtitle }}</v-card-text>
    <v-card-actions class="mt-6 d-flex flex-wrap">
      <div v-for="(chip, index) in chipList" :key="index" class="">
        <v-chip :color="chipColor" class="ma-1">{{ chip }}</v-chip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card-item {
  background: rgba(255,255,255, .02);
  transition: all 300ms;
}
.card-item:hover {
  /* box-shadow: 0px 0px 15px rgba(0, 128, 128,1); */
}
</style>
