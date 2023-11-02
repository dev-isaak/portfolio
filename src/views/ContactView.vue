<script setup>
import SectionTemplate from '@/templates/SectionTemplate.vue'
import IconsList from '@/components/general/IconsList.vue'
import { ref } from 'vue'

const revealEmail = ref(false)

</script>


<template>
  <SectionTemplate title="Contact">
    <p class="text-center">If you have found the portfolio interesting, don't heasitate to contact me by one of the following methods.</p>
    <IconsList class="text-center my-4 pa-0"/>
    <p class="text-center">Or if you prefer it, you can contact by mail.</p>
    <div class="d-flex justify-center mt-8">
      <v-btn v-if="!revealEmail" @click="revealEmail = !revealEmail" color="teal" variant="outlined">Reveal Email</v-btn>
      <v-sheet v-else class="bg-transparent">isaac.montenegro1992@gmail.com</v-sheet>
    </div>
    <!-- <v-sheet class="bg-transparent ma-auto pa-6" max-width="500">
        <form name="contact" method="POST" data-netlify="true">
          <v-text-field label="Your Name"></v-text-field>
          <v-text-field label="Your email*" :rules="rules"></v-text-field>
          <v-textarea label="" no-resize></v-textarea>
           <div class="d-flex justify-center"> 
            <input type="submit" variant="outlined" color="teal" label="Contact" />
           </div> 
        </form>
      </v-sheet> -->
  </SectionTemplate>
</template>

<style scoped>
</style>