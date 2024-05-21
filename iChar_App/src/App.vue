<template>
  <SideBar />
  <Header_iChar />
  <main id="main">
    <RouterView />
  </main>
  <CartButtomLoader />
  <Footer_iChar />
</template>

<script setup>
import Header_iChar from './components/Header_App.vue'
import SideBar from './components/Side_Bar.vue';
import CartButtomLoader from './components/CartButtomLoader.vue'
import Footer_iChar from './components/Footer_iChar.vue'
</script>

<style>

</style>