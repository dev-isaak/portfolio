<script setup>
  import ExperienceCard from '@/components/card/ExperienceCard.vue'
  import experience from '@/utils/experience.json'
</script>

<template>
  <div>
    <ExperienceCard
      v-for="data in experience"
      :key="data.id"
      :title="data.title"
      :company="data.company"
      :dates="data.data"
    >
    {{ data.text }}
    </ExperienceCard>
  </div>
</template>

<style>
.card-exp{
  background: rgba(255,255,255, .02);
  color:white;
  padding: 1em;
  margin: 1em 0;
  border-radius: 10px;
}
</style>