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

const bgColor = computed(() => {
    if (img.value == rock) {
        return 'var(--Rock-Gradient)'
    } else if (img.value == paper) {
        return 'var(--Paper-Gradient)'
    }

    return 'var(--Scissors-Gradient)'
})

</script>

<template>
    <button type="button">
        <img :src="img" alt="">
    </button>
</template>

<style scoped>
button {
    aspect-ratio: 1/1;
    width: 140px;
    background-color: white;
    border: 15px solid v-bind(bgColor);
    border-radius: 50%;
}
</style>