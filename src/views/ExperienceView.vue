<script setup>
import TimeLine from '@/components/general/TimeLine.vue'
import SectionTemplate from '@/templates/SectionTemplate.vue'
import ExperienceMobile from '@/components/general/ExperienceMobile.vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

</script>


<template>
<SectionTemplate title="Experience">
  <ExperienceMobile v-if="!mdAndUp"/>
  <TimeLine v-else/>
  <div class="d-flex justify-center my-8">
    <v-btn variant="outlined" color="teal" :href="resumeDoc">Download resume</v-btn>
  </div>
</SectionTemplate>

</template>