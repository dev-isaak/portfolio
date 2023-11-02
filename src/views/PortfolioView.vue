<script setup>
import DocuTechHubProject from '@/components/portfolio/DocuTechHubProject.vue'
import TimeKeeperProject from '@/components/portfolio/TimeKeeperProject.vue'
import SectionTemplate from '@/templates/SectionTemplate.vue'
</script>

<template>
  <SectionTemplate title="Portfolio">
  <v-container class="d-flex  justify-center flex-wrap">
    <DocuTechHubProject />
    <TimeKeeperProject />
  </v-container>
  </SectionTemplate>
</template>

<style scoped></style>
