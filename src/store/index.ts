import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { key } from "../types";
import { authStore } from "./auth/auth";

export function useStore () {
    return baseUseStore(key)
}

export const store = createStore({
    modules: {
        auth: authStore
    }
})

