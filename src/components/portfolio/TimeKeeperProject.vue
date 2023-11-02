<script setup>
import ProjectCard from '@/components/card/ProjectCard.vue'
import DialogView from '@/components/general/DialogView.vue'
import dailyHoursImage from '/public/tk/daily_hours.png'
import calendarImage from '/public/tk/calendar.png'
import statisticsImage from '/public/tk/statistics.png'
import projectsImage from '/public/tk/projects.png'
import { ref } from 'vue'

const usedTechnologiesTimeKeeper = ['Vue.js', 'Firebase DB', 'Firebase Auth', 'Firebase Storage']
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
<div class="image-container">
  <img src="/public/tk/daily_hours.png" :width="smAndDown ? '250' : '350'"/>
  <img src="/public/tk/statistics.png" :width="smAndDown ? '250' : '350'"/>
  <img src="/public/tk/calendar.png" :width="smAndDown ? '250' : '350'"/>
  <img src="/public/tk/settings.png" :width="smAndDown ? '250' : '350'"/>
  <div class="text-container">
    <h3 class="text-secondary">Time Keeper</h3>
    <p>Full stack web app made to clock in and control your timings. <br/>
      <a href="https://time-keeper-dev-isaak.netlify.app" target="_blank">Web</a> <i>(Under development)</i>
    </p>
      <v-chip v-for="(tech, index) in usedTechnologiesTimeKeeper" :key="index" color="teal" class="chip mx-1">{{ tech }}</v-chip>
  </div>
</div>
</template>
