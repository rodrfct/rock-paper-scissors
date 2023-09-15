<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import Rules from './components/Rules.vue';
import TheGame from './components/TheGame.vue';
import type { Winner } from './components/TheGameStep2.vue';

const score = ref<number>(0)

function newScore(winner: Winner): void {
  if (winner == 'user') {
    score.value++
  } else if (winner == 'house') {
    score.value--
  }
}
</script>

<template>
  <TheHeader :score="score"/>

  <TheGame @finished="(winner) => newScore(winner)" />

  <Rules />
</template>

<style scoped>

</style>
