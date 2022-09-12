<template>
    <div 
        v-for="item in menuItems" 
        class="q-mt-xl column flex-center cursor-pointer q-pa-md" 
        :class="{'shadow-up-20 bg-green': view === item.view}"
        @click="$emit('changeView', item.view)"
    >
        <p class="text-grey-1">{{item.icon}}</p>
        <p class="text-grey-1">{{item.text}}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
  view: string
}>()
const menuItems = ref([
    {
        icon: 'icon',
        view: 'home',
        text: 'Início'
    },
    {
        icon: 'icon',
        view: 'transactions',
        text: 'Transações'
    },
    {
        icon: 'icon',
        view: 'analysis',
        text: 'Análises'
    },
    {
        icon: 'icon',
        text: 'settings'
    }
])

</script>

<style scoped>

</style>