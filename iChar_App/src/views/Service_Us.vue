<template>
  <div class="container">
    <h2 class="title_service mb-5 h1">Service</h2>
    <div class="row d-flex justify-content-center gap-3 pb-5">
      <Service_Item v-for="service in services" :key="service._id" :service="service" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Service_Item from '../components/Service_Item.vue'

const services = ref([])

onMounted(() => {
  fetch('http://localhost:3000/services')
    .then((res) => res.json())
    .then((data) => {
      services.value = data
      console.log(services.value)
    })
    .catch((err) => console.log(err))
})
</script>

<style scoped>
.title_service {
  text-align: center;
  color: #fff;
}
</style>
