<template>
    <ul class="nav">
        <li v-for="nav in navs" :key="nav.id">
            <RouterLink v-if="nav.name === 'home'" :to="{ name: 'home' }" :class="{ active: nav.active }"
                @click="handleNavActive(nav.id)">
                <i class="bi bi-house-door-fill"></i>
            </RouterLink>
            <RouterLink v-else :to="{ name: nav.link }" :class="{ active: nav.active }" @click="handleNavActive(nav.id)">
                {{ nav.name }}</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue"
import { navsData } from "@/data/data"
const navs = ref(navsData)

const handleNavActive = (id) => {
    navs.value.map((nav) => {
        nav.active = false
        if (nav.id === id) nav.active = true
        return nav
    })
}
</script>

<style scoped>
.nav {
    display: flex;
}

.nav li {
    list-style: none;
    margin: 0 10px;
}

.nav li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.3s;
}

.nav li a:hover,
.nav li a.active {
    color: var(--primary);
}
</style>