<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import CardView from "../components/CardView/index.vue"
import Acute from "../assets/img/acute.svg"
import Calendar from "../assets/img/calendar_month.svg"
import Metabolism from "../assets/img/metabolism.svg"
import Comment from "../assets/img/comment.svg"
import MainButton from "../components/MainButton.vue";

const router = useRouter()

const userName = ref("")

const navigation = ref([
    {
        id: 0,
        link: "/app/bater-ponto",
        icon: Acute,
        nome: "Bata seu ponto!"
    },

    {
        id: 1,
        link: "/app/agenda",
        icon: Calendar,
        nome: "Agenda"
    },

    {
        id: 2,
        link: "/app/seu-progresso",
        icon: Metabolism,
        nome: "Seu Progresso"
    },

    {
        id: 3,
        link: "/app/mensagens",
        icon: Comment,
        nome: "Mensagens"
    },
])

function logout() {
    localStorage.clear()
    router.push("/")
}

onMounted(()=> {
    const user = localStorage.getItem("user")
    const parsedUser = JSON.parse(user)
    userName.value = parsedUser.name
    console.log(userName.value)
})


</script>

<template>
    <div class="dashboard-container">
        <div class="content-box">
            <h2>Bem-vindo, {{userName}}</h2>
            <div class="boxes">
                <CardView :cardProps="navigation"/>
            </div>
        </div>
        <div class="content-box card-user-box" >
            <div class="user-card">
                <div class="user-image">
                    <img src="../assets/img/Group 3.svg" alt="icone-perfil"/>
                    <p>Alterar foto</p>
                </div>
                <div class="infos">
                    <p><span>Nome:</span> Daniel Santos Nascimento</p>
                    <p><span>Email:</span> danieldepaulo.941@gmail.com</p>
                    <p><span>Designação:</span> Analista de Sistemas</p>
                    <p><span>Número de matrícula:</span> 0211456378</p>
                    <p><span>Data de admissão:</span> 14/02/2019</p>
                </div>
                <div class="container-button">
                    <MainButton @click="logout">Deslogar usuário</MainButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-container {
    background-image: linear-gradient(#B7D9E1 50%, #A69D9D);
    height: 100%;
    display: flex;
}

.dashboard-container .content-box {
    width: 50%;
    padding: 40px 50px;
}

.dashboard-container .card-user-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dashboard-container .content-box h2 {
    font-size: 30px;
    color: #34029D;
    margin-bottom: 40px;
}

.dashboard-container .content-box .boxes {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 60px;
}

.dashboard-container .content-box .user-card {
    background-image: linear-gradient(#cacaca, #919191, #646464);
    padding: 10px 15px; 
    right: 5%;
    width: 350px;
    height: 520px;
    border-radius: 16px;
    box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.334);
}   

.dashboard-container .user-card .user-image {
    margin: 10px auto;
    width: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.dashboard-container .user-card .user-image img {
    width: 100%;
}

.dashboard-container .user-card .user-image p {
    text-align: center;
    font-weight: medium;
}

.dashboard-container .user-card .infos {
    text-align: start;
    margin-bottom: 20px;
}

.dashboard-container .user-card .infos p {
    font-size: 12px;
    margin-bottom: 10px;
}

.dashboard-container .user-card .infos span {
    font-weight: bold;
}

.dashboard-container .content-box .container-button {
    text-align: center;
    margin-top: 50px;
}
</style>
