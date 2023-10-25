<script setup>
  import GithubIcon from '@/components/icons/GithubIcon.vue'
  import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
  import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'
</script>

<template>
  <v-list class="icon-list">
    <v-btn variant="plain" href="https://github.com/dev-isaak">
      <GithubIcon />
    </v-btn>
    <v-btn variant="plain" href="https://www.linkedin.com/in/isaac-montenegro/">
      <LinkedinIcon />
    </v-btn>
    <v-btn variant="plain">
      <a href="https://api.whatsapp.com/send?phone=691264307"><WhatsappIcon /></a>
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