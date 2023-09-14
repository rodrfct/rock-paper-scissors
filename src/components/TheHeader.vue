<script setup lang="ts">
import Score from './Score.vue';

const props = defineProps({
    score: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <header>
        <h1>Rock Paper Scissors</h1>

        <Score :score="score" />
    </header>
</template>

<style>
header {
    border: 2px solid var(--Header-Outline);
    border-radius: 10px;
    padding: 15px;

    display: flex;
    justify-content: space-between;
}

header h1 {
    width: min-content;
    margin: 0;
    text-transform: uppercase;
    line-height: .9;
}
</style>