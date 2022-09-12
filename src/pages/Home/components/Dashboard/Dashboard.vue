<template>
    <div>
        <h4>Início</h4>
        <h5>O que deseja fazer agora, Victor?</h5>
        <div class="row q-gutter-x-md align-center justify-center">
            <CardMenu
                class="col cursor-pointer card"
                v-for="item in menuItems"
                :icon="item.icon"
                :text="item.text"
            />
        </div>
        <div>
            <h4>Últimas transações</h4>
            <h5>Você ainda não tem nenhuma transação cadastrada</h5>
            <q-btn color="primary" label="Cadastrar transação" @click="createTransactionModalIsOpen = true" />
        </div>
        <CreateTransaction 
            :is-open="createTransactionModalIsOpen" 
            @closeModal="createTransactionModalIsOpen = false"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardMenu from '../../../../components/Menu/CardMenu.vue';
import CreateTransaction from '../../../../components/Modal/CreateTransaction.vue';

const createTransactionModalIsOpen = ref(false)
const menuItems = ref([
    {
        icon: 'icon',
        text: 'Início'
    },
    {
        icon: 'icon',
        text: 'Transações'
    },
    {
        icon: 'icon',
        text: 'Análises'
    },
    {
        icon: 'icon',
        text: 'Configurações'
    }
])

</script>

<style scoped lang="scss">

.card {
    border-radius: 8px;
    &:hover {
        background-color: #2A3569 !important;
        position: relative;
        bottom: 30px;
        color: white
    }
}

</style>