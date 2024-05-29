<template>
  <div class="service-item col-lg-4 bg-light">
    <div class="mb-1">
      <span><i :class="service.icon"></i></span>
    </div>

    <h3 class="mb-3 text-uppercase">{{ service.name }}</h3>

    <p class="mb-0 text-dark">{{ service.details }}</p>
  </div>
</template>

<script setup>
defineProps({
  service: Object
})
</script>

<style scoped>
.service-item {
  border: 3px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: #000 !important;
}

i {
  font-size: 40px;
  margin-right: 10px;
  color: var(--primary);
}
h3 {
  display: inline-block;
  margin: 0;
  color: #000 !important;
}
</style>
