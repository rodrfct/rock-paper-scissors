<script setup lang="ts">
import { ref } from 'vue';
import TheGamePick from './TheGamePick.vue';
import type { Pick } from './TheGame.vue';

const emit = defineEmits(['finished', 'repeat'])

export type Winner = 'user' | 'house' | 'none'

const props = defineProps<{
    userPick: Pick
}>()

const housePick = ref<{
    hasPicked: boolean,
    pick?: Pick
}>({hasPicked: false})

const randomPick = getRandomInt(1, 3)

const winner = ref<Winner>()

const winnerMsg = ref<string>()

if (randomPick == 1) {
    housePick.value.pick = 'rock'
} else if (randomPick == 2) {
    housePick.value.pick = 'paper'
} else if (randomPick == 3) {
    housePick.value.pick = 'scissors'
}

setTimeout(() => {
    housePick.value.hasPicked = true
}, 1000)

setTimeout(() => winner.value = getWinner(), 1400)

setTimeout(() => {
    winnerMsg.value = getWinnerMsg()
    emit('finished', winner.value)
}, 1500)

function getWinner(): Winner {
    if (props.userPick == housePick.value.pick) {return 'none'}

    if (props.userPick == 'rock') {
        if (housePick.value.pick == 'paper') {return 'house'}
        return 'user'
    }

    if (props.userPick == 'paper') {
        if (housePick.value.pick == 'scissors') {return 'house'}
        return 'user'
    }

    if (housePick.value.pick == 'rock') {return 'house'}
    
    return 'user'
}

function getWinnerMsg() {
    if (winner.value == 'user') {
        return "You win"
    } else if (winner.value == 'house') {
        return "You lose"
    }

    return "Tie"
}

// Function by ChatGPT
function getRandomInt(min: number, max: number) {
  // The Math.floor() function rounds down to the nearest integer
  // The Math.random() function returns a floating-point number between 0 and 1
  // We multiply the random number by the range and add the minimum value to it
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

</script>

<template>
    <div id="step-2">
        <p id="you-text">You picked</p>
        <p id="house-text">The house picked</p>

        
        <TheGamePick id="user-pick"
        :pick="userPick"
        :class="{'winner-pick': winner == 'user'}" />

        <div v-if="winner" class="winner"
        :style="{
            width: winnerMsg ? '220px' : '0',
            visibility: winnerMsg ? 'visible' : 'hidden'
        }" >
            <h2>{{ winnerMsg }}</h2>

            <button type="button" @click="$emit('repeat')"
            :style="{color: winner == 'house' ? 'red' : ''}" >
                Play again
            </button>
        </div>

        <TheGamePick v-if="housePick.hasPicked" id="house-pick"
        :pick="housePick.pick"
        :class="{'winner-pick': winner == 'house'}" />
        <div v-else class="shadow"></div>
    </div>
</template>

<style>
#step-2 {
    max-width: 60%;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 20px 40px;
    align-items: center;
    justify-items: center;

    text-transform: uppercase;
    font-weight: 600;

    @media (width < 420px) {
        margin: 0;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr 1fr;

        .winner {
            grid-row: 3 !important;
            grid-column: 1/4 !important;
        }
    }

    & p {
        grid-row: 1;

        &#house-text {
            grid-column: 3;
        }
    }

    .shadow {
        aspect-ratio: 1/1;
        width: 110px;
        background-color: #222;
        opacity: .7;
        border-radius: 50%;
    }

    > button {
        width: 190px;
        border-width: 25px;

        @media (width < 420px) {
            width: 140px;
            border-width: 17px;
        }
    }

    #user-pick {
        grid-row: 2;
        grid-column: 1;
    }

    .shadow,
    #house-pick {
        grid-row: 2;
        grid-column: 3;
    }

    .winner-pick {
        --Radial-Gradient: hsla(214, 47%, 23%, .8);
        --Radial-Gradient-2: hsla(237, 49%, 15%, .8);
        
        /*I'm not getting the colors right */
        box-shadow: 0 0 0 50px hsla(229, 25%, 31%, .4), 
            0 0 0 100px hsla(214, 47%, 23%, .3),
            0 0 0 150px hsla(214, 47%, 23%, .2);
    }

    .winner {
        grid-row: 2;

        transition: width 1s ease;

        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        font-size: 1.6em;

        & button {
            width: 100%;
            padding: 5px 10px;
            background-color: white;

            text-transform: inherit;
            font-weight: 600;
            color: var(--Dark-Text);

            cursor: pointer;

            border: none;
            border-radius: 5px;
        }
    }
}
</style>