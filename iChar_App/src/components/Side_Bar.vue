<template>
    <div class="sideBar">
        <a class="menu" :class="{ active: active }">
            <i class="bi bi-menu-app-fill" @click.stop.prevent="handleToggleMenu"></i>
        </a>
        <ul class="sci">
            <li v-for="sci in scis" :key="sci.id">
                <a href="#"><i :class="sci.icon"></i></a>
            </li>
        </ul>
    </div>
    <SiderBar :active="active"/>
</template>

<script setup>

import SiderBar from "./Side_Menu.vue"
import { ref } from 'vue'

const scis = [
    { id: 1, icon: 'bi bi-meta' },
    { id: 2, icon: 'bi bi-twitter-x' },
    { id: 3, icon: 'bi bi-instagram' },
]

const active = ref(false)

const handleToggleMenu = () => {
    active.value = !active.value
}
</script>

<style scoped>
.sideBar {
    position: fixed;
    width: 5%;
    min-height: 100vh;
    padding: 30px;
    background: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: 1s;
    z-index: 2000;
}

.menu {
    font-size: 1.6rem;
    color: #000000;
    z-index: 2000;
    transition: ease 1s;
}

.menu.active {
    transform: rotateZ(180deg);
}

.sci {
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 25px;
}

.sci li a {
    color: #000000;
    font-size: 1.6rem;
}

.sci li {
    list-style: none;
}
</style>