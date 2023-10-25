<script setup>
import Css3Logo from '/public/logos/css3.png'
import DockerLogo from '/public/logos/docker.png'
import Html5Logo from '/public/logos/html5.svg'
import JsLogo from '/public/logos/js.png'
import NodeLogo from '/public/logos/nodejs.png'
import SqlLogo from '/public/logos/sql.png'
import Strapi from '/public/logos/strapi.webp'
import VueJsLogo from '/public/logos/vuejs.png'
</script>

<template>
  <h2>Stacks</h2>
  <v-divider></v-divider>
  <v-container class="d-flex flex-wrap justify-space-between">
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
  </v-container>
</template>

<style>
.logo-stack-container{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stack-image {
  z-index: 10;
  filter: brightness(0.5);
  transition: all 300ms;
}
.stack-image:hover{
  transform: translateY(30px);
}
.stack-image:hover {
  filter: grayscale(0);
  filter: drop-shadow(4px 4px 10px rgba(0, 128, 128, 0.5));
}
.text-logo{
  position: absolute;
  top: 35px;
  color: white;
}
.stack-image:hover .text-logo{
  color:white;
}
</style>
