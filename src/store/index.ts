import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { key, State } from "../types";
import { authStore } from "./auth/auth";

export function useStore () {
    return baseUseStore(key)
}

export const store = createStore<State>({
    modules: {
        // user: userStore,
        auth: authStore
    }
})

