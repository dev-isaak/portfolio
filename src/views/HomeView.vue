<script setup>
import PortraitImage from '@/components/general/PortraitImage.vue'
</script>

<template>
  <v-container class="w-100 my-2 container d-flex flex-column flex-sm-reverse-column align-center">
    <v-avatar size="200">
      <PortraitImage class="ma-4" />
    </v-avatar>
    <v-sheet class="mt-6 bg-transparent px-4">
      <p>Hola, soy Isaac y esta es mi historia 👇🏻</p>
      <p class="mb-2 mt-4">💻</p>
      <v-divider class="mb-4"></v-divider>
      <p>
        Actualmente estoy desarrollando profesionalmente una página web full stack usando Vue.js
        para el frontend y Strapi (node.js) para el backend, así como git y github para el control
        de versiones, figma para el desarrollo de esquemas y Vue Styleguidist para la documentación
        de componentes entre otros. Antes de realizar este proyecto he llevado a cabo un MVP usando
        HTML, CSS y vanila Javascript, el cual es completamente funcional y está siendo usado por
        diversos clientes.
      </p>

      <p class="mb-2 mt-4">⚒️</p>
      <v-divider class="mb-4"></v-divider>
      <p>
        Después de haber hablado de mi proyecto actual, debo decir que me encuentro en un proceso de
        reconstrucción de mi carrera profesional. Estoy en mi último año de Desarrollo de
        Aplicaciones Web con la idea de enfocar mi futuro profesional hacia el mundo Tech. He
        llevado a cabo varios proyectos personales, desde creación de páginas web estáticas con
        HTML, CSSy JavaScript, páginas en Wordpress, React.. Pero mi background y mi experiencia
        anteriores están vinculadas a la industria ya que he estado 7 años como Field Service
        Technician, haciendo instalaciones de máquinas industriales, reparaciones, montaje… Algo
        positivo que me llevo de ese mundillo es que me ha servido para desarrollar parte de mis
        aptitudes como la resolución de problemas, trabajo bajo presión, comunicación con clientes y
        proactividad.
      </p>
    </v-sheet>
  </v-container>
</template>

<style scoped></style>
