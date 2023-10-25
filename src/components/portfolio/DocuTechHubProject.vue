<script setup>
import ProjectCard from '@/components/card/ProjectCard.vue'
import DialogView from '@/components/general/DialogView.vue'
import { ref } from 'vue'

const usedTechnologies = ['Vue.js', 'Node.js', 'Strapi', 'LiteDB ']

const imageList = [
  {
    src: '/public/dth/home_customer.PNG'
  },
  {
    src: '/public/dth/home_volpak.PNG'
  },
  {
    src: '/public/dth/dashboard_volpak.PNG'
  },
  {
    src: '/public/dth/spare_parts_customer.PNG'
  },
  {
    src: '/public/dth/documentation_customer.PNG'
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
    subtitle="something here"
    image="/public/dth/home_customer.PNG"
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
