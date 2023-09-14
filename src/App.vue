<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import Rules from './components/Rules.vue';
import TheGame from './components/TheGame.vue';

const score = ref<number>(0)
</script>

<template>
  <TheHeader :score="score"/>

  <TheGame />

  <Rules />
</template>

<style scoped>

</style>
