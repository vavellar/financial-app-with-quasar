<template>
    <div class="bg-white q-px-sm q-py-xl flex-center column" @click="setView(text)">
        <p>{{ icon }}</p>
        <p>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  icon: string
}>()

function setView(view) {
    console.log(view)
}
</script>

<style scoped>

</style>