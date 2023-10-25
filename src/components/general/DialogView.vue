<script setup>
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
        :continuous="false"
        :show-arrows="true"
        hide-delimiter-background
        delimiter-icon="mdi-square"
        height="auto"
				class="mt-4"
      >
        <v-carousel-item
          v-for="(image, index) in imageList"
          :key="index"
          :src="image.src"
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
