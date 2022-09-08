import { InjectionKey } from "vue"
import { Store } from "vuex"

interface Auth {
    user: any
}

export interface State {
    auth: Auth
}

export const key: InjectionKey<Store<State>> = Symbol()