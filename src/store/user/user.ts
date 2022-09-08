import { createStore } from "vuex";

export const userStore = createStore({
    state() {
        return {
            name: 'victor'
        }
    },
    mutations: {
        changeName(state) {
            state.name = 'Outro nome'
        }
    }
})