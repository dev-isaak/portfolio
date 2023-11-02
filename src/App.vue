<script setup>
import PortfolioView from '@/views/PortfolioView.vue'
import MainTemplate from './templates/MainTemplate.vue'
import IntroDescription from '@/components/general/IntroDescription.vue'
import StacksView from './views/StacksView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
import ScrollTop from '@/components/general/ScrollTop.vue'

// window.scroll({
//   top: 10500, 
//   left: 0, 
//   behavior: 'smooth'
// })

</script>

<template>
  <MainTemplate>
    <div id="about">
      <IntroDescription />
    </div>
      <v-lazy
        :min-height="400"
        :options="{'threshold':0.5}"
        transition="fade-transition"
        id="portfolio"
      >
        <div >
          <PortfolioView/>
        </div>
      </v-lazy>
      <v-lazy
        :min-height="400"
        :options="{'threshold':0.5}"
        transition="fade-transition"
        id="experience"
      >
        <div >
          <ExperienceView />
        </div>
        </v-lazy>
        <v-lazy
        :min-height="400"
        :options="{'threshold':0.5}"
        transition="fade-transition"
        id="stacks"
      >
        <div >
          <StacksView />
        </div>
        </v-lazy>
        <v-lazy
        :min-height="400"
        :options="{'threshold':0.5}"
        transition="fade-transition"
        id="contact"
      >
        <div >
          <ContactView />
        </div>
        </v-lazy>
        <ScrollTop />
  </MainTemplate>
</template>

<style>
  html {
    /* scroll-behavior: smooth; */
    }
  body{
    background-color: #0f172a;
    color: #94a3b8;
  }
</style>
