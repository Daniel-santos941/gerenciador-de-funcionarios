<script setup>
import { reactive } from "vue";
import MainButton from "../MainButton.vue";

const emit = defineEmits(["createUser"])

const user = reactive({
    name: "",
    email: "",
    registry: "",
    password: "",
    confirmPassword: "",
})

function register() {
   emit("createUser", user)
}
</script>

<template>
    <form class="form-register" @submit.prevent="register">
        <h3>Faça o seu cadastro!</h3>
        <div class="input-data">
            <label>Nome do usuário</label>
            <input type="text" v-model="user.name"/>
        </div>
        <div class="input-data">
            <label>Email</label>
            <input type="email" v-model="user.email"/>
        </div>
        <div class="input-data">
            <label>Número de matrícula</label>
            <input type="text" v-model="user.registry"/>
        </div>
        <div class="input-data">
            <label>Crie uma senha</label>
            <input type="password" v-model="user.password"/>
        </div>
        <div class="input-data">
            <label>Confirme sua senha</label>
            <input type="password" v-model="user.confirmPassword"/>
        </div>
        <MainButton type="submit">Criar usuário</MainButton>
    </form>
</template>

<style scoped>
.form-register {
    background-color: #f8f8f8;
    padding: 28px;
    border-radius: 18px;
    box-shadow: -3px 8px 7.7px #0000005b;
    width: 400px;
}

.form-register h3 {
    margin-bottom: 28px;
}

.form-register .input-data {
    display: flex;
    flex-direction: column;
}

.form-register .input-data label {
    font-size: 10px;
    margin-bottom: 4px;
}

.form-register .input-data input {
    height: 38px;
    margin-bottom: 15px;
    padding: 12px;
    border-radius: 6px;
    background-color: #d9d9d9;
    border: 1px solid #848282;
}

</style>
