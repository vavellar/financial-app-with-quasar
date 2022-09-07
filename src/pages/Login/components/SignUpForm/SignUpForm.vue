<template>
    <div class="form">
        <h2>Criar conta</h2>
        <q-form
            style="width: 80%"
            @submit="onSubmit"
            class="q-gutter-md"
        >
            <q-input
                filled
                v-model="name"
                label="Nome *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Digite seu nome']"
            />

            <q-input
                filled
                v-model="email"
                label="Email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Digite seu e-mail']"
            />

            <q-input
                filled
                v-model="password"
                label="Senha *"
                lazy-rules
                type="password"
                :rules="[
                val => val !== null && val !== '' || 'Digite seu senha',
                ]"
            />

            <div>
                <q-btn label="Cadastrar" type="submit" color="primary"/>
                <q-btn label="Voltar para login" type="reset" color="primary" flat class="q-ml-sm" @click="$emit('changeToSignView')"/>
            </div>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const email = ref(null)
const password = ref(null)
const name = ref(null)

function onSubmit () {
    console.log(email.value)
    console.log(password.value)
    // if (accept.value !== true) {
    //     $q.notify({
    //     color: 'red-5',
    //     textColor: 'white',
    //     icon: 'warning',
    //     message: 'You need to accept the license and terms first'
    //     })
    // }
    // else {
    //     $q.notify({
    //     color: 'green-4',
    //     textColor: 'white',
    //     icon: 'cloud_done',
    //     message: 'Submitted'
    //     })
    // }
}
</script>

<style lang="scss" scoped>

    .form {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>