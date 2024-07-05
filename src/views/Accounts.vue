<script setup>
import { ref } from 'vue';
import MainButton from '../components/MainButton.vue';
import FormLogin from '../components/FormLogin/index.vue'
import FormRegister from '../components/FormRegister/index.vue'
import userService from '../services/users'


const isLogin = ref(true)

function toRegister() {
    isLogin.value = false
}

async function registerUser(user) {
    const {data, status} = await userService.create(user)
    if (status === 201) {
        localStorage.setItem("user_email", data.email)
        alert(`Usuário ${data.name} criado com sucesso!`)
        isLogin.value = true
    }
}
</script>

<template>
    <div class="container">
        <div class="banner"></div>
        <div class="content">
            <div v-if="isLogin" class="account-container">
                <FormLogin/>
                <div class="register-link">
                    <p>Ainda não possui cadastro?</p>
                    <MainButton @click="toRegister">Cadastre-se aqui</MainButton>
                </div>
            </div>
            <div v-else class="account-container">
                <FormRegister @createUser="registerUser"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
    height: 100vh;
}

.container .banner {
    width: 35%;
    background-image: linear-gradient(#0910B1, #412086, #A62B1A);
}

.container .content {
    width: 65%;
}

.container .content .account-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.container .content .account-container .register-link {
    width: 400px;
    margin-top: 20px;
    display: flex;    
    align-items: center;
}

.container .content .account-container .register-link p {
    font-weight: 500;
    margin-right: 10px;
}
</style>