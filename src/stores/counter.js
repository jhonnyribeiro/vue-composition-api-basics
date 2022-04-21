import {defineStore} from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        title: 'My counter pinia',
    }),
    actions: {
        increaseCounter(amount) {
            this.count += amount
        },
        decreaseCounter(amount) {
            this.count -= amount
        },
    }
})

