<script setup>
import MenuIcon from '../icons/MenuIcon.vue'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const menuOpened = ref(false)

const handleMenuState = () => {
  menuOpened.value = !menuOpened.value
  //cerrar menú
}
</script>

<template>
  <v-list v-if="mdAndUp">
    <v-tabs direction="vertical" color="teal-lighten-3" selected-class="selected-tab">
      <v-list-item>
        <v-tab to="/"> Init </v-tab>
      </v-list-item>
      <v-list-item>
        <v-tab :to="{ name: 'about' }"> Experience </v-tab>
      </v-list-item>
      <v-list-item>
        <v-tab :to="{ name: 'portfolio' }"> Portfolio </v-tab>
      </v-list-item>
    </v-tabs>
  </v-list>
</template>

<style>
.selected-tab{
  transition:all 300ms;
  margin-left:2em;
  padding-left: 2em;
}
</style>
