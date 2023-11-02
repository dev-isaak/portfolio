<script setup>
import DocuTechHubProject from '@/components/portfolio/DocuTechHubProject.vue'
import TimeKeeperProject from '@/components/portfolio/TimeKeeperProject.vue'
import SectionTemplate from '@/templates/SectionTemplate.vue'
</script>

<template>
  <SectionTemplate title="Portfolio">
  <v-container class="d-flex pa-0 justify-center flex-wrap">
    <div class="image-container">
      <img src="/public/dth/home_volpak.png" width="350"/>
      <img src="/public/dth/dashboard_volpak.png" width="350"/>
      <img src="/public/dth/cataloges_volpak.png" width="350"/>
    </div>
    <!-- <DocuTechHubProject />
    <TimeKeeperProject /> -->
  </v-container>
  </SectionTemplate>
</template>

<style scoped>
.image-container{
  width:100%;
  perspective: 1000px;
  position:relative;
}
.image-container img{
  position:absolute;
  /* transform: skew(-45deg, 0deg); */
  transform: rotateY(-30deg);
  filter: drop-shadow(4px 4px 10px rgb(35, 35, 35));
  transition: 300ms all;
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
img:hover{
  transform: translateY(-30px);
  z-index:10;
}
</style>
