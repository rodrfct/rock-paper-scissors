<script setup lang="ts">
defineProps({
    score: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div id="score">
        <p>Score</p>
        <span>{{ score }}</span>
    </div>
</template>

<style>
#score {
    background-color: white;
    color: var(--Score-Text);
    text-transform: uppercase;
    text-align: center;

    min-width: 70px;
    padding: 5px 20px;
    border-radius: 8px;
}

#score > * {
    margin: 0;
}

#score span {
    color: var(--Dark-Text);
    font-size: 2.5em;
}
</style>