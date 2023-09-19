<script setup lang="ts">
import { computed } from 'vue';
import type { Pick } from './TheGame.vue';
import rock from '@/assets/icons/icon-rock.svg';
import paper from '@/assets/icons/icon-paper.svg';
import scissors from '@/assets/icons/icon-scissors.svg';

const props = defineProps<{
    pick: Pick
}>()

const img = computed(() => {
    if (props.pick == "rock") {
        return rock
    } else if (props.pick == "paper") {
        return paper
    }

    return scissors
})

const alt = computed(() => {
    if (props.pick == "rock") {
        return 'rock'
    } else if (props.pick == "paper") {
        return 'paper'
    }

    return 'scissors'
})

const shadowColor = computed(() => {
    if (img.value == rock) {
        return 'var(--Rock-Gradient)'
    } else if (img.value == paper) {
        return 'var(--Paper-Gradient)'
    }

    return 'var(--Scissors-Gradient)'
})

const borderColor = computed(() => {
    if (img.value == rock) {
        return 'var(--Rock-Gradient-2)'
    } else if (img.value == paper) {
        return 'var(--Paper-Gradient-2)'
    }

    return 'var(--Scissors-Gradient-2)'
})

</script>

<template>
    <button type="button">
        <img :src="img" :alt="alt">
    </button>
</template>

<style scoped>
button {
    aspect-ratio: 1/1;
    width: 140px;
    background-color: #eee;
    border: 17px solid v-bind(borderColor);
    border-radius: 50%;

    box-shadow: 0 7px v-bind(shadowColor);
    transition: filter .5s ease;
    cursor: pointer;

    :hover {
        filter: brightness(150%);
    }
}
</style>