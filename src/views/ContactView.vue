<script setup>
import SectionTemplate from '@/templates/SectionTemplate.vue'

</script>


<template>
  <SectionTemplate title="Contact">
    <v-sheet class="bg-transparent ma-auto pa-6" max-width="500">
        <v-form>
          <v-text-field label="Your Name"></v-text-field>
          <v-text-field label="Your email"></v-text-field>
          <v-textarea label="" no-resize></v-textarea>
          <div class="d-flex justify-center">
            <v-btn variant="outlined" color="teal">Contact</v-btn>
          </div>
        </v-form>
    </v-sheet>
  </SectionTemplate>

</template>

<style scoped>
</style>