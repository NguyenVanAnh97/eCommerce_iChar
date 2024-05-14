<template>
  <SideBar />
  <Header />
  <main id="main">
    <RouterView />
  </main>
</template>

<script setup>
import Header from './components/Header_App.vue'
import SideBar from './components/Side_Bar.vue';
</script>

<style>

</style>