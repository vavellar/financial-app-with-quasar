<template>
    <div>
        <q-form
            style="width: 500px"
            @submit="onSubmit"
            class="q-gutter-md q-pa-xl"
        >
            <q-input
                filled
                v-model="transactionDescription"
                label="Descrição *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Insira a descrição']"
            />

            <q-input
                filled
                v-model="transactionAmount"
                label="Valor da transação *"
                lazy-rules
                type="number"
                :rules="[
                val => val !== null && val !== '' || 'Insira o valor',
                ]"
            />

            <q-btn-toggle
                v-model="transactionType"
                spread
                no-caps
                toggle-color="blue"
                color="white"
                text-color="black"
                :options="[
                    {label: 'Entrada', value: 'income'},
                    {label: 'Saída', value: 'outcome'}
                ]"
            />

            <div class="q-mt-xl">
                <q-btn outline color="primary" label="Adicionar" type="submit" style="width: 100%"/>
            </div>
        </q-form>
    </div>
</template>

<script setup lang="ts">import { ref } from 'vue';
import { store } from '../../store';

const transactionDescription = ref(null)
const transactionType = ref('income')
const transactionAmount = ref(null)

function onSubmit() {
    const transaction = {
        type: transactionType.value,
        amount: transactionType.value === 'outcome' ?  -transactionAmount.value : +transactionAmount.value,
        description: transactionDescription.value
    }

    store.dispatch('createTransaction', transaction)
}

</script>

<style scoped>

</style>