<script setup>
import PortraitImage from '@/components/general/PortraitImage.vue'
import IconsList from '@/components/general/IconsList.vue'
import NavbarMain from '@/components/navbar/NavbarMain.vue';
</script>

<template>
<div class="hero-background d-flex flex-column align-center pb-6">
  <div class="w-100 mb-4">
    <NavbarMain />
  </div>
  <div class="text-center">
    <h2>Isaac Montenegro</h2>
    <h3>Junior Web Developer</h3>
  </div>
  <div class="d-flex justify-center my-6">
    <IconsList />
  </div>
  <div class="mb-4">
      <v-avatar class="avatar" size="200">
        <PortraitImage class="ma-4" />
      </v-avatar>
  </div>
</div>
<v-container class="w-100 my-2 container d-flex flex-column flex-sm-reverse-column align-center">
      <p>Hola, soy Isaac y esta es mi historia 👇🏻</p>
  </v-container>
</template>

<style scoped>
.hero-background{
  background: linear-gradient(180deg, rgba(26,27,30,0.1) 10%, rgba(15, 23, 42,1) 65%), url(../assets/img/fondo_barcelona.jpg);
  background-attachment: fixed;
}
h2{
  color:white;
  font-size:2em;
}
h3{
  color:#80CBC4;
}

.avatar{
  border: 2px solid rgb(14, 78, 78);
}
</style>