<script setup>
import homeCustomerImage from '/public/dth/home_customer.png'
import homeVolpakImage from '/public/dth/home_volpak.png'
import dashboardVolpakImage from '/public/dth/dashboard_volpak.png'
import sparePartsCustomerImage from '/public/dth/spare_parts_customer.png'
import documentationCustomerImage from '/public/dth/documentation_customer.png'

import { ref } from 'vue'

const usedTechnologiesDocuhub = ['Vue.js', 'Node.js', 'Strapi', 'LiteDB', 'API Rest']

const imageList = [
  {
    src: homeCustomerImage
  },
  {
    src: homeVolpakImage
  },
  {
    src: dashboardVolpakImage
  },
  {
    src: sparePartsCustomerImage
  },
  {
    src: documentationCustomerImage
  }
]

const openDialog = ref(false)

const handleDialogState = (state) => {
  openDialog.value = state
}
</script>

<template>
  <div class="image-container">
    <img
      src="/public/dth/dashboard_volpak.png"
      :width="smAndDown ? '250' : '350'"
      @click="handleImageClick"
    />
    <img src="/public/dth/documentation_volpak.png" :width="smAndDown ? '250' : '350'" />
    <img src="/public/dth/home_volpak.png" :width="smAndDown ? '250' : '350'" />
    <img src="/public/dth/home_customer.png" :width="smAndDown ? '250' : '350'" />
    <div class="text-container">
      <h3 class="text-secondary">Docuhub</h3>
      <p>
        Full stack web app made to manage documentation by project, from customer and writter side.
      </p>
      <v-chip
        v-for="(tech, index) in usedTechnologiesDocuhub"
        :key="index"
        color="teal"
        class="chip mx-1"
        >{{ tech }}</v-chip
      >
    </div>
  </div>
</template>
