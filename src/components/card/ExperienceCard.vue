<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  company: String,
  dates: String,
})
</script>

<template>
<v-sheet class="card-exp">
      <h3 class="text-secondary">{{ title  }}</h3>
          <h4>{{ company }}</h4>
          <p>{{ dates }}</p>
          <v-divider class="my-4"></v-divider>
          <div class="text-lightBlue">
            <slot></slot>
          </div>
    </v-sheet>
</template>