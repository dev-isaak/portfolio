<script setup>
import AboutView from '@/views/AboutView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import MainTemplate from './templates/MainTemplate.vue'
import IntroDescription from '@/components/general/IntroDescription.vue'
import { RouterView } from 'vue-router'
import resumeDoc from '/public/cv_isaac_montenegro.pdf'
import StacksView from './views/StacksView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
import ScrollTop from '@/components/general/ScrollTop.vue'
</script>

<template>
  <MainTemplate>
    <div id="about">
      <IntroDescription />
    </div>
        <div id="portfolio">
          <PortfolioView/>
        </div>
        <div id="experience">
          <ExperienceView />
        </div>
        <div id="stacks">
          <StacksView />
        </div>
        <div id="contact">
          <ContactView />
        </div>
        <ScrollTop />
  </MainTemplate>
</template>

<style>
  html {
    scroll-behavior: smooth;
    }
  body{
    background-color: #0f172a;
    color: #94a3b8;
  }
</style>
