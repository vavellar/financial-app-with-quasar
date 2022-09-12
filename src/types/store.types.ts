import { InjectionKey } from "vue"
import { Store } from "vuex"
import { AuthStore } from "./auth.types"
import { TransactionsStore } from "./transactions.types"
export interface State {
    auth: AuthStore
    transactions: TransactionsStore
}

export const key: InjectionKey<Store<State>> = Symbol()