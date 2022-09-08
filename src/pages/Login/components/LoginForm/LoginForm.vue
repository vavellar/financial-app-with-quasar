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
import { ref } from 'vue';

const store = useStore()
const $q = useQuasar()
const email = ref(null)
const password = ref(null)

function onSubmit () {
    console.log(email.value)
    console.log(password.value)
    // try {
    //     throw new Error('teste')
    // } catch(e) {
    //     $q.notify({
    //         color: 'red-5',
    //         textColor: 'white',
    //         icon: 'warning',
    //         message: 'Credênciais incorretas'
    //     })
    // }
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

<style lang="scss">

    .form {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>