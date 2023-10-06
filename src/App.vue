<script setup>
  import NavbarMain from './components/navbar/NavbarMain.vue'
  import HomeView from '@/views/HomeView.vue'
  import AboutView from '@/views/AboutView.vue'
  import PortfolioView from '@/Views/PortfolioView.vue'
import MainTemplate from './templates/MainTemplate.vue';
</script>

<template>
  <NavbarMain />
  <MainTemplate>
    <HomeView />
    <AboutView id="about"/>
    <PortfolioView id="portfolio" />
  </MainTemplate>
</template>

<style>
html{
  scroll-behavior: smooth;
}
</style>
