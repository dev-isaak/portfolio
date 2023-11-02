<script setup>
import SectionTemplate from '@/templates/SectionTemplate.vue'

</script>


<template>
  <SectionTemplate title="Contact">
    <v-sheet class="bg-transparent ma-auto pa-6" max-width="500">
        <v-form name="contact" method="POST" data-netlify="true" validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field label="Your Name"></v-text-field>
          <v-text-field label="Your email*" :rules="rules"></v-text-field>
          <v-textarea label="" no-resize></v-textarea>
          <div class="d-flex justify-center">
            <v-btn type="submit" variant="outlined" color="teal">Contact</v-btn>
          </div>
        </v-form>
    </v-sheet>
  </SectionTemplate>

</template>

<style scoped>
</style>