<template>
  <SideBar />
  <Header_iChar />
  <main id="main">
    <RouterView />
  </main>
</template>

<script setup>
import Header_iChar from './components/Header_App.vue'
import SideBar from './components/Side_Bar.vue';
</script>

<style>

</style>