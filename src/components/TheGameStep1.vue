<script setup lang="ts">
import TheGamePick from './TheGamePick.vue';

defineEmits(['picked'])

</script>

<template>
    <div id="step-1">
        <TheGamePick id="paper" pick="paper" @click="$emit('picked', 'paper')" />
        <TheGamePick id="scissors" pick="scissors" @click="$emit('picked', 'scissors')" />
        <TheGamePick id="rock" pick="rock" @click="$emit('picked', 'rock')" />

        <img src="@/assets/images/bg-triangle.svg" alt="">
    </div>
</template>

<style>
#step-1 {
    background-size: 100%;
    aspect-ratio: 4/3;
    max-width: 50%;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 25%;

    @media (width < 420px) {
        max-width: 90%;
        margin-top: 20%;
        aspect-ratio: 3/1;
    }

    > img {
        aspect-ratio: 4/3;
        height: 65%;
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