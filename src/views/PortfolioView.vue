<script setup>
import SectionTemplate from '@/templates/SectionTemplate.vue'
import { useDisplay } from 'vuetify'
// import docuhubImages from '@/utils/docuhubImages.json'
import timeKeeperImages from '@/utils/timeKeeperImages.json'

const {smAndDown} = useDisplay()

const usedTechnologiesDocuhub = ['Vue.js', 'Node.js', 'Strapi', 'LiteDB', 'API Rest']
const usedTechnologiesTimeKeeper = ['Vue.js', 'Firebase DB', 'Firebase Auth', 'Firebase Storage']

</script>

<template>
  <SectionTemplate title="Portfolio">
  <v-container class="d-flex flex-column flex-lg-row align-center justify-lg-center pa-0">
    <div class="image-container">
      <img  src="/public/dth/dashboard_volpak.png"  :width="smAndDown ? '250' : '350'" />
      <img  src="/public/dth/documentation_volpak.png"  :width="smAndDown ? '250' : '350'" />
      <img  src="/public/dth/home_volpak.png"  :width="smAndDown ? '250' : '350'" />
      <img  src="/public/dth/home_customer.png"  :width="smAndDown ? '250' : '350'" />
      <!-- <img v-for="image in docuhubImages" :key="image.id" :src="image.source"  :width="smAndDown ? '250' : '350'" /> -->
      <div class="text-container">
        <h3 class="text-secondary">Docuhub</h3>
        <p>Full stack web app made to manage documentation by project, from customer and writter side.</p>
        <v-chip v-for="(tech, index) in usedTechnologiesDocuhub" :key="index" color="teal" class="chip mx-1">{{ tech }}</v-chip>
      </div>
    </div>
    <div class="image-container">
      <img v-for="image in timeKeeperImages" :key="image.id" :src="image.source"  :width="smAndDown ? '250' : '350'" />
      <div class="text-container">
        <h3 class="text-secondary">Time Keeper</h3>
        <p>Full stack web app made to clock in and control your timings. <br/>
          <a href="https://time-keeper-dev-isaak.netlify.app" target="_blank">Web</a> <i>(Under development)</i>
        </p>
          <v-chip v-for="(tech, index) in usedTechnologiesTimeKeeper" :key="index" color="teal" class="chip mx-1">{{ tech }}</v-chip>
      </div>
    </div>
  </v-container>
  </SectionTemplate>
</template>

<style scoped>
.image-container{
  width: 320px;
  max-width:100%;
  height: 400px;
  perspective: 1200px;
  margin: 4em 1em;
  background: rgba(255,255,255, .02);
  border-radius: 10px;
}

.text-container{
  position:absolute;
  bottom: 0;
  padding: 0 2em;
}
.chip{
  margin-bottom: 2em;
}
.text-container p{
  margin: 1em 0;
}
.image-container img{
  position:absolute;
  transform: rotateY(-30deg);
  filter: drop-shadow(4px 4px 10px rgba(35, 35, 35, .7));
  transition: 500ms all;
  border-radius: 5px;
  cursor: pointer;
  /* z-index:10; */
}
img:nth-child(2){
  left:20px;
  top: -20px;
  z-index:-1;
}
img:nth-child(3){
  left:40px;
  top: -40px;
  z-index:-2;
}
img:nth-child(4){
  left:60px;
  top: -60px;
  z-index:-3;
}
img:hover{
  position: absolute;
  transform: translateY(-30px);
  z-index:20;
  width: 100%;
  height: 200px;
}
img:nth-child(2):hover{
  transform: translateX(-20px);
}
img:nth-child(3):hover{
  transform: translateX(-40px);
}
img:nth-child(4):hover{
  transform: translateX(-60px);
}

@media(min-width: 960px){
  .image-container{
    position:relative;
    width: 600px;
    height: 360px;
  }
img:nth-child(2){
  left:60px;
  top: -10px;
  z-index:-1;
}
img:nth-child(3){
  left:120px;
  top: -20px;
  z-index:-2;
}
img:nth-child(4){
  left:180px;
  top: -30px;
  z-index:-3;
}
img:hover{
  height:100%;
  z-index: 20;
  transform: translateX(-30px);
}
img:nth-child(2):hover{
  transform: translateX(-40px);
}
img:nth-child(3):hover{
  transform: translateX(-60px);
}
img:nth-child(4):hover{
  transform: translateX(-120px);
}
}
</style>
