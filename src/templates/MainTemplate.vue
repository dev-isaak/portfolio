<script setup>
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>

<template>
  <v-layout class="d-flex flex-column">
    <slot></slot>
  </v-layout>
</template>

<style>
.nav-layout{
  background-color: rgb(15, 23, 42);
  color:white;
}
</style>
