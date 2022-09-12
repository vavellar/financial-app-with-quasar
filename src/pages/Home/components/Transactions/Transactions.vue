<template>
    <div>
        <div v-if="!transactions">
            <h5>Você ainda não tem nenhuma transação cadastrada, cadastre numa nova transação para consulta-las aqui.</h5>
        </div>
        <div v-else>
            <h4>Suas transações</h4>
            <h5>Balanço: <span :style="{ color: balance < 0 ? 'red' : 'green'}">{{ balance }}</span></h5>
            <q-list bordered separator style="max-height: 650px; overflow-y: auto;">
                <q-item>
                    <q-item-section>
                        <p class="item__title">Descrição</p>
                    </q-item-section>

                    <q-item-section>
                        <p class="item__title">Valor</p>
                    </q-item-section>

                    <q-item-section>
                        <p class="item__title">Data</p>
                    </q-item-section>
                </q-item>
            <q-item v-for="transaction in transactions" :key="transaction.id" class="q-my-sm" clickable v-ripple>
                <q-item-section>
                  <text-subtitle1>{{ transaction.description }}</text-subtitle1>
                </q-item-section>

                <q-item-section>
                    <p caption lines="1" :style="{ color: getFontColor(transaction.type) }"> {{getIcon(transaction.type)}} {{ transaction.amount }}</p>
                </q-item-section>

                <q-item-section>
                  <text-subtitle1>25/10/2022</text-subtitle1>
                </q-item-section>
        
                <q-item-section side>
                    <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                </q-item-section>
              </q-item>
            </q-list>
        </div>
        <q-btn
            class="q-mt-lg"
            color="primary" 
            label="Cadastrar transação"
            @click="createTransactionModalIsOpen = true" 
        />
        <CreateTransaction 
            :is-open="createTransactionModalIsOpen" 
            @closeModal="createTransactionModalIsOpen = false"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CreateTransaction from '../../../../components/Modal/CreateTransaction.vue';
import { useStore } from '../../../../store/index'
import { TransactionType } from '../../../../types';

const createTransactionModalIsOpen = ref(false)

const store = useStore()
const transactions = computed(() => store.state.transactions.transactions)

const balance = computed(function () {
    const values = store.state.transactions.transactions.map((transaction) => transaction.amount)
    return values.reduce((acc, current) => acc + current)
})

function getFontColor(transactionType: TransactionType) {
    return transactionType === 'income' ? 'green' : 'red'
}

function getIcon(transactionType: TransactionType) {
    return transactionType === 'income' ? '+' : ''
}
</script>

<style scoped lan="scss">

.item__title {
    font-size: 18px;
    font-weight: bold;
}

</style>