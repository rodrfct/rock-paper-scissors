import { test, expect } from "vitest";
import { mount } from '@vue/test-utils'
import TheGamePick from '../TheGamePick.vue'
import rock from '@/assets/icons/icon-rock.svg';
import paper from '@/assets/icons/icon-paper.svg';
import scissors from '@/assets/icons/icon-scissors.svg';


test("Makes the right pick", () => {
    const rockPick = mount(TheGamePick, {props: {pick: 'rock'}})
    const paperPick = mount(TheGamePick, {props: {pick: 'paper'}})
    const scissorsPick = mount(TheGamePick, {props: {pick: 'scissors'}})

    const rockImg = rockPick.find(`img[src="${rock}"]`)
    const paperImg = paperPick.find(`img[src="${paper}"]`)
    const scissorsImg = scissorsPick.find(`img[src="${scissors}"]`)

    expect(rockImg.exists()).toBe(true)
    expect(rockImg.attributes('alt')).toBe('rock')

    expect(paperImg.exists()).toBe(true)
    expect(paperImg.attributes('alt')).toBe('paper')

    expect(scissorsImg.exists()).toBe(true)
    expect(scissorsImg.attributes('alt')).toBe('scissors')
})