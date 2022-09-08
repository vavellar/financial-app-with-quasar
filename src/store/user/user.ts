import { createStore } from "vuex";

export const userStore = createStore({
    state: {
        name: 'Victor'
    },
    mutations: {
        changeName(state) {
            state.name = 'Outro nome'
        }
    }
})