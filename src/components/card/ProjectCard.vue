<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  image: String,
  subtitle: String
})
</script>

<template>
  <v-card width="200">
    <v-img :src="image" height="150" cover></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-actions>
      <v-chip color="red">Vue</v-chip>
      <v-chip color="red">Laravel</v-chip>
    </v-card-actions>
  </v-card>
</template>
