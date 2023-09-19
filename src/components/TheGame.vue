<script setup lang="ts">
import { ref } from 'vue';
import TheGameStep1 from './TheGameStep1.vue';
import TheGameStep2 from './TheGameStep2.vue';
import type { Winner } from './TheGameStep2.vue';

const emit = defineEmits(['finished'])

export type Pick = "rock" | "paper" | "scissors";

const hasPicked = ref<boolean>(false);
const picked = ref<Pick>()
</script>

<template>
    <main>
        <Transition mode="out-in">
            <TheGameStep1 v-if="!hasPicked" @picked="(pick: Pick) => {
            hasPicked = true; picked = pick
            }"
            key="step1" />

            <TheGameStep2 v-else
            :userPick="picked"
            @finished="(winner: Winner) => {emit('finished', winner)}"
            @repeat="hasPicked = false"
            key="step2" />
        </Transition>
    </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>