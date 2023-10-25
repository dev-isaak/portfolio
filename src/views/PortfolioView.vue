<script setup>
import MainTitle from '@/components/general/MainTitle.vue'
import DocuTechHubProject from '@/components/portfolio/DocuTechHubProject.vue';
import TimeKeeperProject from '@/components/portfolio/TimeKeeperProject.vue';
</script>

<template>
  <MainTitle title="Portfolio" />
  <v-container class="d-flex flex-column align-center my-10">
    <DocuTechHubProject />
    <TimeKeeperProject />
  </v-container>
</template>

<style scoped></style>
