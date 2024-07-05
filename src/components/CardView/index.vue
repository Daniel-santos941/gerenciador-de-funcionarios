<script setup>
defineProps({
    cardProps: Array
})
</script>

<template>
    <div class="card" v-for="item in cardProps" :key="item.id">
        <router-link :to="item.link">
            <div class="card-image">
                <img :src="item.icon" :alt="item.nome"/>
            </div>
            <div class="card-text">
                <p>{{item.nome}}</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.card  {
    background-color: #9F9F9F;
    flex: 1 1 40%;
    padding: 20px;
    height: 210px;
    border-radius: 14px;
    box-shadow: -2px 5px 7px #00000058;
    width: 120px;
    position: relative;
}

.card .card-image {
    text-align: center;
}

.card .card-image img {
    width: 100px;
}

.card .card-text {
    text-align: center;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;

}

.card .card-text p {
    font-size: 18px;
    font-weight: 500;
}
</style>

