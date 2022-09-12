<template>
    <div>
        <q-dialog v-model="isOpen">
            <q-card>
                <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Adicionar nova transação</div>
                <q-space />
                <q-btn icon="close" flat round dense @click="$emit('closeModal')" />
                </q-card-section>
                    <AddTransactionForm />
                <q-card-section>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup lang="ts">
import AddTransactionForm from '../Forms/AddTransactionForm.vue';
defineProps<{
  isOpen: boolean
}>()

</script>

<style scoped>

</style>