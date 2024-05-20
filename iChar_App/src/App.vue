<template>
  <SideBar />
  <Header_iChar />
  <main id="main">
    <RouterView />
  </main>
  <CartButtomLoader />
</template>

<script setup>
import Header_iChar from './components/Header_App.vue'
import SideBar from './components/Side_Bar.vue';
import CartButtomLoader from './components/CartButtomLoader.vue'
</script>

<style>

</style>