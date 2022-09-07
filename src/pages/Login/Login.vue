<template>
    <div class="row">
        <div class="col-12 col-md-8 bg-blue-grey-10 window-height">.col-12 .col-md-8</div>
        <div class="col-12 col-md-4 window-height">
            <LoginForm v-if="isLoginForm" @changeToSignUpView="isLoginForm = false"/>
            <SignUpForm v-else @changeToSignView="isLoginForm = true"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './components/LoginForm/LoginForm.vue';
import SignUpForm from './components/SignUpForm/SignUpForm.vue';

const isLoginForm = ref(true)

</script>