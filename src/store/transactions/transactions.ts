import { api } from "../../http";

export const transactionsStore = {
    state: {
        transactions: [
            {
                id: 12,
                type: 'outcome',
                description: 'Compra no supermercado',
                amount: -20
            },
            {
                id: 22,
                type: 'income',
                description: 'Freelancer aguia branca',
                amount: 300
            },
            {
                id: 23,
                type: 'outcome',
                description: 'Compra comida ifood',
                amount: -300
            },
            {
                id: 24,
                type: 'outcome',
                description: 'Compra sofá',
                amount: -2700
            }
        ],
    },
    actions: {
        async createTransaction({ commit }, transaction) {
            commit('ADD_TRANSACTION', transaction)
            // try {
            //     const data = await api.post('/transaction', transaction)
            //     commit('SET_USER', data)
            // }
            // catch (error) {
            //     alert(error)
            //     console.log(error)
            // }
        }
    },
    mutations: {
        ADD_TRANSACTION(state, transaction) {
            console.log('cai aqui')
            state.transactions.push(transaction)
        }
    }
}

