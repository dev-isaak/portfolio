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
  <v-card :width="smAndUp ? 500 : '100%'" class="bg-transparent mb-8 pa-6 rounded-lg card-item" >
    <v-img :src="image" height="150" cover></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-actions>
      <div v-for="(chip, index) in chipList" :key="index">
        <v-chip :color="chipColor" class="ma-1">{{ chip }}</v-chip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card-item {
  box-shadow: 0px 0px 10px rgba(0, 128, 128,.5);
  transition: all 300ms;
}
.card-item:hover {
  box-shadow: 0px 0px 15px rgba(0, 128, 128,1);
}
</style>
