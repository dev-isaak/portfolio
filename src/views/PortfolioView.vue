<script setup>
import ProjectCard from '../components/card/ProjectCard.vue'
import MainTitle from '../components/general/MainTitle.vue'
</script>

<template>
  <MainTitle title="Portfolio" />
  <v-container class="d-flex flex-column align-center my-10">
    <ProjectCard
      to="#"
      class="mx-4"
      title="Project 1"
      subtitle="something here"
      image="https://picsum.photos/400/300"
      variant="text"
    />
    <ProjectCard
      to="#"
      class="mx-4"
      title="Project 2"
      subtitle="something here"
      image="https://picsum.photos/400/301"
      variant="text"
    />
    <ProjectCard
      to="#"
      class="mx-4"
      title="Project 3"
      subtitle="something here"
      image="https://picsum.photos/400/302"
      variant="text"
    />
  </v-container>
</template>

<style scoped></style>
