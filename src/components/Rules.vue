<script setup lang="ts">
import { ref } from 'vue';

const rules = ref<HTMLDialogElement | null>(null)
</script>

<template>
    <button type="button" id="rules-btn" @click="rules?.showModal()">Rules</button>

    <dialog ref="rules" id="rules">
        <form>
            <h2>Rules</h2>
            <button formmethod="dialog">
                <img src="@/assets/icons/icon-close.svg" alt="">
            </button>
        </form>

        <img src="@/assets/images/image-rules.svg" alt="">
    </dialog>
</template>

<style>
#rules-btn {
    background-color: inherit;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: 600;

    padding: 5px 28px;
    border: 1px solid #ccc;
    border-radius: 6px;

    position: absolute;
    bottom: 3%;
    right: 3%;

    @media (width < 420px) {
        bottom: 20%;
        left: 50%;
    
        translate: -50% 0;
    }
}

#rules {
    padding: 25px  35px;
    border: none;
    border-radius: 10px;

    &::backdrop {
        background-color: black;
        opacity: .5;
    }

    & img {
        width: 90%;
        margin: auto;
    }

    & form {
        margin-bottom: 15%;
        display: flex;
        justify-content: space-between;

        & h2 {
            margin: 0;
            color: var(--Dark-Text);
            text-transform: uppercase;
        }

        & button {
            background-color: inherit;
            border: none;
            cursor: pointer;
        }
    }

    @media (width < 420px) {
        width: 100%;
        height: 100%;

        & form {
            display: block;
            text-align: center;
            margin-bottom: 50%;
            
            & button {
                position: absolute;
                bottom: 20%;
                left: 50%;
    
                translate: -50% 0;
            }
        }

    }
}
</style>