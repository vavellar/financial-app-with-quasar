<template>
    <div class="form">
        <h2>Entrar</h2>
        <q-form
            style="width: 80%"
            @submit="onSubmit"
            class="q-gutter-md"
        >
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
                <q-btn label="Entrar" type="submit" color="primary"/>
                <q-btn label="Cadastrar" type="reset" color="primary" flat class="q-ml-sm" @click="$emit('changeToSignUpView')"/>
            </div>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '../../../../store/index'
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import { authStore } from '../../../../store/auth/auth';


const store = useStore()
const $q = useQuasar()
const email = ref(null)
const password = ref(null)



function onSubmit () {
    const credentials = {
        email: email.value,
        password: password.value
    }
    store.dispatch('login', credentials)
}

</script>

<style lang="scss">

    .form {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>