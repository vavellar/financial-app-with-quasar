<template>
    <div class="q-mx-auto" style="max-width: 90%;">
        <h4>Dashboard</h4>
        <h5>O que deseja fazer agora, Victor?</h5>
        <div class="row q-gutter-x-md align-center justify-center">
            <CardMenu
                class="col"
                v-for="item in menuItems"
                :icon="item.icon"
                :text="item.text"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardMenu from '../../../../components/Menu/CardMenu.vue';

const menuItems = ref([
    {
        icon: 'icon',
        text: 'dashboard'
    },
    {
        icon: 'icon',
        text: 'transactions'
    },
    {
        icon: 'icon',
        text: 'manage transactions'
    },
    {
        icon: 'icon',
        text: 'settings'
    }
])

</script>

<style scoped>

</style>