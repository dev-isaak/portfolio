<script setup>

</script>

<template>
<v-timeline align="start" line-color="cyan-lighten-5">
  <v-timeline-item dot-color="cyan-lighten-2" fill-dot size="21" line-inset="10">
    <template v-slot:opposite>
        February 2023 - Currently
      </template>
      <div>
        <h3 class="text-h6">Job 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
  </v-timeline-item>
  <v-timeline-item dot-color="teal" fill-dot size="21" line-inset="10">
      <template v-slot:opposite>
        2017 - 2023
      </template>
      <div>
        <h3 class="text-h6">Job 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item dot-color="cyan-lighten-2" fill-dot size="21" line-inset="10">
      <template v-slot:opposite>
        2013 - 2017
      </template>
      <div>
        <h3 class="text-h6">Job 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </v-timeline-item>
</v-timeline>

</template>

<style scoped>
h3{
  color:white;
}
</style>