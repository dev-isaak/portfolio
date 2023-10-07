<script setup>
import { defineProps } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
defineProps({
  title: String,
  image: String,
  subtitle: String
})
</script>

<template>
  <v-card :width="smAndUp ? 500 : '100%'" class="bg-transparent mb-8 pa-6">
    <v-img :src="image" height="150" cover></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-actions>
      <v-chip color="teal-accent-4">Vue</v-chip>
      <v-chip color="teal-accent-4">Laravel</v-chip>
    </v-card-actions>
  </v-card>
</template>
