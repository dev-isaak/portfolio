<script setup>
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>

<template>
  <v-layout v-if="mdAndUp">
    <v-navigation-drawer class="nav-layout d-flex align-center" width="600">
      <v-list class="h-100 d-flex flex-column justify-center ">
        <slot name="navbar"></slot>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot name="main"></slot>
    </v-main>
  </v-layout>
  <v-layout v-else class="d-flex flex-column">
    <slot name="navbar"></slot>
    <slot name="intro"></slot>
    <slot name="main"></slot>
  </v-layout>
</template>

<style>
.nav-layout{
  background-color: rgb(15, 23, 42);
  color:white;
}
</style>
