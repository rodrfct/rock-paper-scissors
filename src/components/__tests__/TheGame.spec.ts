import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import TheGame from '../TheGame.vue'
import rock from '@/assets/icons/icon-rock.svg';
import paper from '@/assets/icons/icon-paper.svg';
import scissors from '@/assets/icons/icon-scissors.svg';

describe("Game is playable", () => {

    const wrapper = mount(TheGame)
    const rockImg = wrapper.find(`img[src="${rock}"]`)
    const paperImg = wrapper.find(`img[src="${paper}"]`)
    const scissorsImg = wrapper.find(`img[src="${scissors}"]`)

    // I have a feeling this test is wrong but I'm not sure
    it("Switches steps", async () => {

        // Expect all options to be there (step 1)
        expect(rockImg.exists() && paperImg.exists() && scissorsImg.exists()).toBe(true)

        // Move to step 2
        wrapper.get('#rock').trigger('click')
        await wrapper.vm.$nextTick()

        // Renew the selectors, otherwise they all will remain true
        const rockImgNew = wrapper.find(`img[src="${rock}"]`)
        const paperImgNew = wrapper.find(`img[src="${paper}"]`)
        const scissorsImgNew = wrapper.find(`img[src="${scissors}"]`)

        // Verifiy that not all options are still present
        expect(rockImgNew.exists() && paperImgNew.exists() && scissorsImgNew.exists()).toBe(false)

        // After some time, at least 2 of them must be there
        setTimeout(() => {
            expect(rockImgNew.exists() && (paperImgNew.exists() || scissorsImgNew.exists())).toBe(true)
            wrapper.get('.winner > button').trigger('click')
        }, 2000)
        
    })

    it.todo("Gets the winner and updates score", async () => {
        rockImg.trigger('click')
        await wrapper.vm.$nextTick()
    })
})