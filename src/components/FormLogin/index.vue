<script setup>
import { reactive } from "vue";
import MainButton from "../MainButton.vue";

const emit = defineEmits(["login"]);

const user = reactive({
    email: localStorage.getItem("user_email") || "",
    password: "",
});

function authLogin() {
    emit("login", user);
}
</script>

<template>
    <form class="form-login" @submit.prevent="authLogin">
        <h3>Entre</h3>
        <div class="input-data">
            <label>Email do usuário</label>
            <input type="email" v-model="user.email"/>
        </div>
        <div class="input-data">
            <label>Senha</label>
            <input type="password" v-model="user.password"/>
        </div>
        <MainButton type="submit">Entrar</MainButton>
    </form>
</template>

<style scoped>
.form-login {
    background-color: #f8f8f8;
    padding: 28px;
    border-radius: 18px;
    box-shadow: -3px 8px 7.7px #0000005b;
    width: 400px;
}

.form-login h3 {
    margin-bottom: 28px;
}

.form-login .input-data {
    display: flex;
    flex-direction: column;
}

.form-login .input-data label {
    font-size: 10px;
    margin-bottom: 4px;
}

.form-login .input-data input {
    height: 38px;
    margin-bottom: 15px;
    padding: 12px;
    border-radius: 6px;
    background-color: #d9d9d9;
    border: 1px solid #848282;
}

</style>
