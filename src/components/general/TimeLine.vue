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
          Currently working on the development of web apps to enhance the company's customer service.
        </p>
        <p>
          Technlogies that I'm using: <strong> Vue.js, Strapi (Nodejs), API Rest, LiteDB</strong>
        </p>
        <p>In charge of the digitization processes within the department.</p>
        <p>Creating automated processes with Microsoft Power Automate.</p>
      </div>
    </v-timeline-item>
    <v-timeline-item dot-color="teal" fill-dot size="21" line-inset="10" class="text-end">
      <template v-slot:opposite>
        <p class="text-start"> 2017 - 2023</p>
      </template>
      <div>
        <h3 class="text-h6">Field Service Technician</h3>
        <h4>Tecnoservei</h4>
        <p>
          Installation of X-ray machines, dynamic weighers, metal detectors...
        </p>
        <p>
          Machinery maintenance, customer training, IQ/OQ execution.
        </p>
        <p>
          Traveling across Spain and Europe.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item dot-color="cyan-lighten-2" fill-dot size="21" line-inset="10">
      <template v-slot:opposite>
        2013 - 2017
      </template>
      <div>
        <h3 class="text-h6">Field Service Technician</h3>
        <h4>Aranow</h4>
        <p>
          Assembly, adjustment and commisioning of industrial machinery. Mechanical and electrical work.
        </p>
        <p>
          After-sales service.
        </p>
        <p>
          International travel.
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>
h3 {
  color: white;
}
</style>