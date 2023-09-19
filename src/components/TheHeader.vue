<script setup lang="ts">
import Score from './Score.vue';

defineProps({
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
    width: 60%;
    margin: 3% auto 5% auto;

    border: 2px solid var(--Header-Outline);
    border-radius: 10px;
    padding: 15px;

    display: flex;
    justify-content: space-between;
    
    & h1 {
        width: min-content;
        margin: 0;
        text-transform: uppercase;
        line-height: .9;
    }

    @media (width < 420px) {
        width: 80%;
    }
}

</style>