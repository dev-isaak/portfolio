<script setup>
import SectionTemplate from '@/templates/SectionTemplate.vue'

</script>


<template>
  <SectionTemplate title="Contact">
    <!--
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
  -->
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </SectionTemplate>

</template>

<style scoped>
</style>