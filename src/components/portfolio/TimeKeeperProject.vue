<script setup>
import ProjectCard from '@/components/card/ProjectCard.vue'
import DialogView from '@/components/general/DialogView.vue'
import dailyHoursImage from '/public/tk/daily_hours.png'
import calendarImage from '/public/tk/calendar.png'
import statisticsImage from '/public/tk/statistics.png'
import projectsImage from '/public/tk/projects.png'
import { ref } from 'vue'

const usedTechnologies = ['Vue.js', 'Firebase']
const imageList = [
    {
        src: dailyHoursImage
    },
    {
        src: calendarImage
    },
    {
        src: statisticsImage
    },
    {
        src: projectsImage
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
    class="mx-4 text-white"
    title="Time Keeper"
    subtitle="Full stack web app made to clock in and controll your timings."
    :image="dailyHoursImage"
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
