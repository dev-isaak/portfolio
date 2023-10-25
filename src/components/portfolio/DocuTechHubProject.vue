<script setup>
import ProjectCard from '@/components/card/ProjectCard.vue'
import DialogView from '@/components/general/DialogView.vue'
import homeCustomerImage from '/public/dth/home_customer.png'
import homeVolpakImage from '/public/dth/home_volpak.png'
import dashboardVolpakImage from '/public/dth/dashboard_volpak.png'
import sparePartsCustomerImage from '/public/dth/spare_parts_customer.png'
import documentationCustomerImage from '/public/dth/documentation_customer.png'

import { ref } from 'vue'

const usedTechnologies = ['Vue.js', 'Node.js', 'Strapi', 'LiteDB ']

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
  <ProjectCard
    to="#"
    class="mx-4"
    title="DocuTechHub"
    subtitle="Web portal for documentation management."
    :image="homeCustomerImage"
    variant=""
    :chipList="usedTechnologies"
    chipColor="teal"
    @click="openDialog = !openDialog"
  />
  <DialogView
    title="Docu Tech Hub"
    text="
        DocuTechHub is a platform made for a specific customer. 
      The customer role can see all the documentation uploaded per project, notifications and add spare parts to the cart.
      The admin role can admin users, projects, upload documentation, manage the state of each project.. "
    :chipList="usedTechnologies"
    chipColor="teal"
    :openDialog="openDialog"
    @dialogStatus="handleDialogState"
    :imageList="imageList"
  />
</template>
