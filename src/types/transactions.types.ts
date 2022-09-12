export interface Transaction {
    type: TransactionType
    amount: number
    id: number
    description: string
}

export type TransactionType = 'income' | 'outcome'
export interface TransactionsStore {
    transactions: Transaction[]
}