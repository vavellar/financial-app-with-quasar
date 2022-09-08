<template>
    <div 
        v-for="item in menuItems" 
        class="q-mt-xl column flex-center cursor-pointer q-pa-md" 
        :class="{'shadow-up-20 bg-green': view === item.text}"
        @click="$emit('changeView', item.text)"
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