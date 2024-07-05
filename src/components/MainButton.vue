<script setup>
    
</script>

<template>
    <button class="main-button" v-bind="$attrs">
        <slot></slot>
    </button>
</template>

<style scoped>
.main-button {
    border-radius: 6px;
    border: 1px solid transparent;
    background-color: #464bcb;
    color: white;
    height: 38px;
    padding: 0 25px;
    cursor: pointer;
}
</style>