<template>
  <div class="container">
    <h2 class="title_service mb-5 h1">Service</h2>
    <input v-model="search" placeholder="Search Services Name" class="form-control rounded mb-5 p-3"/>
    <div class="row d-flex justify-content-center gap-3 pb-5">
      <Service_Item v-for="service in filteredServices" :key="service._id" :service="service" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue'
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

const search = ref('');

const filteredServices = computed(() => {
  if (!search.value) {
    return services.value;
  }
  return services.value.filter((service) =>
    service.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

</script>

<style scoped>
.title_service {
  text-align: center;
  color: #fff;
}


</style>
