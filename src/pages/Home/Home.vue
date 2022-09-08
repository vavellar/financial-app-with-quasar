<template>
    <div class="bg-home window-height">
        <div class="row">
            <div class="col-1 bg-dark-2 window-height">
                <div class="column flex-center" >
                    <Menu @changeView="setView" :view="currentView"/>
                </div>
            </div>
            <div class="col-8 window-height">
                <Dashboard v-if="currentView === 'dashboard'"/>
                <Transactions v-if="currentView === 'transactions'"/>
            </div>
            <div class="col bg-yellow window-height">
                .col
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menu from "../../components/Menu/Menu.vue";
import Dashboard from "../Home/components/Dashboard/Dashboard.vue"
import Transactions from "./components/Transactions/Transactions.vue";

const currentView = ref('dashboard')

function setView(view) {
    currentView.value = view
}

const visibleComponent = {
    'dashboard': '<Dashboard/>'
}

</script>

<style scoped>

.bg-home {
    background-color: #F7F8FC;
}

.bg-dark-2 {
    background-color: #2A3569;
}

</style>