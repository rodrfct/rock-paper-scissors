<script setup lang="ts">
import TheGamePick from './TheGamePick.vue';

</script>

<template>
    <div id="step-1">
        <TheGamePick id="paper" pick="paper" />
        <TheGamePick id="scissors" pick="scissors" />
        <TheGamePick id="rock" pick="rock" />

        <img src="@/assets/images/bg-triangle.svg" alt="">
    </div>
</template>

<style>
#step-1 {
    background-size: 100%;
    width: 50%;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    row-gap: 25%;

    & img {
        grid-row: 1/-1;
        grid-column: 1/-1;
        place-self: center;
        z-index: -1;
    }

    #paper {
        grid-row: 1;
        grid-column: 1;
    }

    #scissors {
        grid-row: 1;
        grid-column: 2;
    }

    #rock {
        grid-row: 2;
        grid-column: 1/-1;
    }
}
</style>