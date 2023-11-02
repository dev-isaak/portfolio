<script setup>
import SectionTemplate from '@/templates/SectionTemplate.vue'
</script>


<template>
  <SectionTemplate title="Contact">
    <v-sheet class="bg-transparent ma-auto pa-6" max-width="500">
        <form name="contact" method="POST" data-netlify="true">
          <v-text-field label="Your Name"></v-text-field>
          <v-text-field label="Your email*" :rules="rules"></v-text-field>
          <v-textarea label="" no-resize></v-textarea>
           <div class="d-flex justify-center"> 
            <input type="submit" variant="outlined" color="teal" label="Contact" />
           </div> 
        </form>
    </v-sheet>

  </SectionTemplate>

</template>

<style scoped>
</style>