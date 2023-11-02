<script setup>
  import GithubIcon from '@/components/icons/GithubIcon.vue'
  import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
  import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'
</script>

<template>
  <v-list class="icon-list bg-transparent">
    <v-btn variant="text" color="white" href="https://github.com/dev-isaak" target="_blank">
      <GithubIcon />
    </v-btn>
    <v-btn variant="text" color="white" href="https://www.linkedin.com/in/isaac-montenegro/" target="_blank">
      <LinkedinIcon />
    </v-btn>
    <v-btn variant="text" color="white">
      <a href="https://api.whatsapp.com/send?phone=691264307" target="_blank"><WhatsappIcon /></a>
    </v-btn>
  </v-list>

</template>

<style>
.icon-list{
  background-color: rgb(15, 23, 42);
  color:white;
}
a{
  color:white;
}
</style>