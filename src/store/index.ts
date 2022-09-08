import { userStore } from "./user/user";
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { key, State } from "../types";

export function useStore () {
    return baseUseStore(key)
}

export const store = createStore<State>({
    modules: {
        user: userStore
    }
})

