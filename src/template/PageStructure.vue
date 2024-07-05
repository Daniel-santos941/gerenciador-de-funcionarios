<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="page-container">
        <div class="content">
            <header class="main-header">
                <nav>
                    <ul class="menu">
                        <li>
                            <router-link to="/app/dashboard">
                                Área do usuário
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/app/company">
                                Área da empresa
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/app/documents">
                                Documentos
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/app/settings">
                                Configurações
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div style="height: 92%;">
                <router-view></router-view>
            </div>      
        </div>
    </div>
</template>

<style scoped>
.page-container {
    background-image: linear-gradient(#0910B1, #412086, #A62B1A);
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.page-container .content {
    height: 100%;
    padding: 10px 0;
    width: 100%;
}

.page-container .content .main-header {
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    height: 46px;
}

.page-container .content .main-header nav {
    display: flex;
    height: 100%;
}

.page-container .content .main-header .menu {
    display: flex;
    gap: 100px;
    height: 100%;
    align-items: center;
}

.page-container .content .main-header .menu a {
    height: 100%;
    padding: 0 10px;
    color: rgb(51, 51, 51);
}
</style>
