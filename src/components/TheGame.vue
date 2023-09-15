<script setup lang="ts">
import { ref } from 'vue';
import TheGameStep1 from './TheGameStep1.vue';
import TheGameStep2 from './TheGameStep2.vue';

export type Pick = "rock" | "paper" | "scissors";

const hasPicked = ref<boolean>(false);
const picked = ref<Pick>()
</script>

<template>
    <main>
        <TheGameStep1 v-if="!picked" @picked="(pick: Pick) => {
            hasPicked = true; picked = pick
        }" />
        <TheGameStep2 v-else />
    </main>
</template>