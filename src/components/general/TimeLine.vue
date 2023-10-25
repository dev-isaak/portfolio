<script setup>

</script>

<template>
<v-timeline align="start" line-color="cyan-lighten-5">
  <v-timeline-item dot-color="cyan-lighten-2" fill-dot size="21" line-inset="10">
    <template v-slot:opposite>
        February 2023 - Currently
      </template>
      <div>
        <h3 class="text-h6">Digital Authoring</h3>
        <h4>Volpak</h4>
        <p>
          Actualmente a cargo del desarrollo de un portal web usando Vue.js y Strapi (Node.js).
        </p>
        <p>Desarrollo de proyectos de digitalización del departamento.</p>
        <p>Creación de procesos automatizados con Microsoft Power Automate.</p>
      </div>
  </v-timeline-item>
  <v-timeline-item dot-color="teal" fill-dot size="21" line-inset="10">
      <template v-slot:opposite>
        2017 - 2023
      </template>
      <div>
        <h3 class="text-h6">Técnico post-venta</h3>
        <h4>Tecnoservei</h4>
        <p>
          Instalación de rayos-X, pesadoras dinámicas, detectores de metales...
        </p>
        <p>Mantenimiento de maquinaria, formaciones a cliente, realización de IQ/OQ</p>
        <p>Viajando por España y Europa</p>
      </div>
    </v-timeline-item>
    <v-timeline-item dot-color="cyan-lighten-2" fill-dot size="21" line-inset="10">
      <template v-slot:opposite>
        2013 - 2017
      </template>
      <div>
        <h3 class="text-h6">Técnico post-venta</h3>
        <h4>Aranow</h4>
        <p>
          Montaje y ajuste de maquinaria industrial. Mecánico y eléctrico.
        </p>
        <p>
          Servicio post-venta.
        </p>
        <p>Viajes a nivel internacional.</p>
      </div>
    </v-timeline-item>
</v-timeline>

</template>

<style scoped>
h3{
  color:white;
}
</style>