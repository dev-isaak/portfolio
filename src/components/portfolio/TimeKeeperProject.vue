<script setup>
import ProjectCard from '@/components/card/ProjectCard.vue'
import DialogView from '@/components/general/DialogView.vue'
import { ref } from 'vue'

const usedTechnologies = ['Vue.js', 'Firebase']
const imageList = [
    {
        src: '/public/tk/daily_hours.PNG'
    },
    {
        src: '/public/tk/calendar.PNG'
    },
    {
        src: '/public/tk/statistics.PNG'
    },
    {
        src: '/public/tk/projects.PNG'
    },
]

const openDialog = ref(false)

const handleDialogState = (state) => {
  openDialog.value = state
}
</script>

<template>
  <ProjectCard
    to="https://time-keeper-dev-isaak.netlify.app/"
    class="mx-4"
    title="Time Keeper"
    subtitle="something here"
    image="/public/tk/daily_hours.PNG"
    variant="text"
    :chipList="usedTechnologies"
    chipColor="teal"
    @click="openDialog = !openDialog"
  />
  <DialogView
    title="Time Keeper"
    text="Time Keeper is a web app useful to control your timings at work."
    :chipList="usedTechnologies"
    chipColor="teal"
    :openDialog="openDialog"
    @dialogStatus="handleDialogState"
    url="https://time-keeper-dev-isaak.netlify.app"
    :imageList="imageList"
  />
</template>
