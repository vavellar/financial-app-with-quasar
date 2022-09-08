import { api } from "../../http";

interface Credentials {
    email: string
    password: string
}

export const authStore = {
    state: {
        user: null
    },
    actions: {
        async login({ commit }, credentials: Credentials) {
            try {
                const data = await api.post('/login', credentials)
                commit('SET_USER', data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    }
}

