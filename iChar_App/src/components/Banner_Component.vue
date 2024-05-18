<template>
  <div class="banner">
    <BannerSlider v-for="item in items" :key="item.id" :item="item"/>
    <BannerSwiper :items="items" :bannerChange="handleBannerChange"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BannerSlider from './BannerSlider.vue';
import BannerSwiper from './BannerSwiper.vue';

const items = ref([])
// tạo 1 biến items để lưu trữ dữ liệu

onMounted(() => {
  fetch('http://localhost:3000/items').then(res => res.json()).then(data => {
    items.value = data
  }).catch(err => console.log(err))  
})
//lấy dữ liệu từ api


const handleBannerChange = (id) => {
  items.value.map((item) => {
    item.active = false
    if (item.id === id) {
      item.active = true
    }
    return item
  })
}
//

</script>

<style scoped>
  .banner {
    position: relative;
    width: 100%;
    min-height: 90vh;
    background: var(--bgColor);
    transition: 1s;
  }

  @media (max-width: 768px) {
    .banner {
      min-height: 100vh;
    }
  }
</style>