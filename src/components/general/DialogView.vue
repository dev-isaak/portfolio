<script setup>
import ArrowLeft from '@/components/icons/ArrowLeft.vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'
import CircleIcon from '@/components/icons/CircleIcon.vue'

defineProps({
  title: String,
  text: String,
  url: String,
  chipList: Array,
  chipColor: String,
  openDialog: Boolean,
  imageList: Array
})

const emits = defineEmits('dialogStatus')

const handleEmitState = () => {
  emits('dialogStatus', false)
}
</script>

<template>
  <v-dialog :model-value="openDialog" @update:model-value="handleEmitState">
    <v-card class="pa-6 dialog-card">
      <h2 class="text-teal">{{ title }}</h2>
      <v-divider class="mb-4"></v-divider>

      <v-carousel
        :continuous="true"
        :show-arrows="false"
        hide-delimiter-background
        hide-delimiters
        cycle
        interval="3000"
        height="auto"
				class="mt-4"
        :next-icon="ArrowRight"
        :prev-icon="ArrowLeft"
        :delimiter-icon="CircleIcon"
      >
        <v-carousel-item
          v-for="(image, index) in imageList"
          :key="index"
          :src="image.src"
          cover
        ></v-carousel-item>
      </v-carousel>

      <v-card-text class="mt-4">
        <p>{{ text }}</p>
				<p v-if="url" class="mt-4">
        Web: <a :href="url">{{ url }}</a>
      	</p>
      </v-card-text>

      <v-divider class="my-4"></v-divider>
      <v-card-actions class="d-flex flex-colum flex-wrap pa-0">
        <div v-for="(chip, index) in chipList" :key="index">
          <v-chip :color="chipColor" class="ma-1">{{ chip }}</v-chip>
        </div>
				<v-spacer></v-spacer>
				<div>
        	<v-btn variant="outlined" @click="$emit('dialogStatus', false)">Close</v-btn>
      	</div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
a {
  color: teal;
}
.dialog-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(15px);
  color: white;
}
</style>
