<script setup>
import MenuIcon from '../icons/MenuIcon.vue'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const drawer = ref(false)

</script>

<template>
  <!-- When mobile -->
  <div v-if="!mdAndUp">
    <v-app-bar-nav-icon variant="text" @click="drawer = !drawer">
      <MenuIcon class="ml-4 mt-4" color="white" size="30" />
    </v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" location="left" temporary class="bg-primary">
      <v-list class="mt-6">
        <v-list-item>
          <v-btn variant="text" color="white" href="#about"> About me </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" color="white" href="#portfolio"> Portfolio </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" color="white" href="#experience"> Experience </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" color="white" href="#stacks">Stacks</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" color="white" href="#contact"> Contact </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- When Web -->
  <div v-else class="bg-transparent pa-4">
    <v-btn variant="text" color="white" href="#about"> About me </v-btn>
    <v-btn variant="text" color="white" href="#portfolio"> Portfolio </v-btn>
    <v-btn variant="text" color="white" href="#experience"> Experience </v-btn>
    <v-btn variant="text" color="white" href="#stacks">Stacks</v-btn>
    <v-btn variant="text" color="white" href="#contact"> Contact </v-btn>
  </div>
</template>

<style></style>
