import { InjectionKey } from "vue"
import { Store } from "vuex"

interface User {
    name: string
}

export interface State {
    user: User
}

export const key: InjectionKey<Store<State>> = Symbol()