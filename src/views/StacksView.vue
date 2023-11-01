<script setup>
import MainTitle from '@/components/general/MainTitle.vue'
import Css3Logo from '/public/logos/css3.png'
import DockerLogo from '/public/logos/docker.svg'
import Html5Logo from '/public/logos/html5.svg'
import JsLogo from '/public/logos/js.png'
import NodeLogo from '/public/logos/nodejs.png'
import SqlLogo from '/public/logos/sql.png'
import Strapi from '/public/logos/strapi.webp'
import VueJsLogo from '/public/logos/vuejs.png'
import SectionTemplate from '@/templates/SectionTemplate.vue'
</script>

<template>
  <SectionTemplate title="Stacks">
  <v-sheet class="d-flex flex-wrap justify-center w-100 bg-transparent" >
    <v-sheet class="w-100 d-flex flex-wrap justify-space-between bg-transparent" max-width="700">
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="Css3Logo"></v-img>
        <h3 class="text-logo">CSS 3</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="Html5Logo"></v-img>
        <h3 class="text-logo">Html 5</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="JsLogo"></v-img>
        <h3 class="text-logo">JavaScript</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="VueJsLogo"></v-img>
        <h3 class="text-logo">Vue.js</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="Strapi"></v-img>
        <h3 class="text-logo">Strapi</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="NodeLogo"></v-img>
        <h3 class="text-logo">Node.js</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="SqlLogo"></v-img>
        <h3 class="text-logo">Sql</h3>
      </div>
      <div class="logo-stack-container">
        <v-img class="ma-6 stack-image" width="100" :src="DockerLogo"></v-img>
        <h3 class="text-logo">Docker</h3>
      </div>
    </v-sheet>
  </v-sheet>
</SectionTemplate>
</template>

<style>
.logo-stack-container{
  text-align:center;
}
.stack-image {
  z-index: 10;
  height:100px;
  filter: brightness(0.5);
  transition: all 500ms;
}
.logo-stack-container:hover .stack-image{
  filter: brightness(1);
}

.logo-stack-container:hover .text-logo{
  color:white;
}

</style>
