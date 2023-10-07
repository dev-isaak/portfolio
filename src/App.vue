<script setup>
import NavbarMain from './components/navbar/NavbarMain.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import MainTemplate from './templates/MainTemplate.vue'
import IntroDescription from '@/components/general/IntroDescription.vue'
import { RouterView } from 'vue-router'
import IconsList from '@/components/general/IconsList.vue'
import TimeLine from '@/components/general/TimeLine.vue'
</script>

<template>
  <MainTemplate>
    <template v-slot:navbar>
      <v-column class="h-100 d-flex flex-column justify-space-around align-center">
        <IntroDescription v-slot:intro />
        <NavbarMain/>
        <IconsList />
      </v-column>
    </template>
    <template v-slot:main>
      <router-view>
        <HomeView />
        <v-container>
          <TimeLine />
        </v-container>
        <v-btn variant="outlined" class="ma-10" color="teal" href="../../public/cv_isaac_montenegro.pdf">Download my resume</v-btn>
        <PortfolioView />
    </router-view>
    </template>
  </MainTemplate>
</template>

<style>
  html {
    scroll-behavior: smooth;
    }
  body{
    background-color: rgb(15, 23, 42);
    color: rgb(148, 163, 184);
  }
</style>
