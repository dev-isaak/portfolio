<script setup>
import MenuIcon from '../icons/MenuIcon.vue'
import { ref } from 'vue'

const menuOpened = ref(false)

const handleMenuState = () => {
  menuOpened.value = !menuOpened.value
  //cerrar menú
}
</script>

<template>
  <header class="w-100 position-fixed">
    <v-layout color="#344E5c">
      <v-app-bar elevation="0" color="#ef3d59">
        <v-app-bar-nav-icon @click="handleMenuState">
          <MenuIcon />
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="menuOpened" location="left" elevation="5" color="#ef3d59">
        <v-list>
          <v-tabs direction="vertical">
            <v-list-item>
              <v-tab href="#"> HOme </v-tab>
            </v-list-item>
            <v-list-item>
              <v-tab href="#about"> About </v-tab>
            </v-list-item>
            <v-list-item>
              <v-tab href="#portfolio"> Portfolio </v-tab>
            </v-list-item>
          </v-tabs>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </header>
</template>
