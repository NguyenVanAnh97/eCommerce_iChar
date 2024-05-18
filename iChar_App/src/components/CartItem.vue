<template>
  <div class="shopCartItem">
    <th scope="row">{{ index + 1 }}></th>
    <td>
      <img :src="item.imgUrl" alt="" class="img-fluid" />
    </td>
    <td>
      <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
    </td>
    <td :style="{ color: item.color }"><i class="bi bi-record-fill"></i></td>
    <td>${{ item.price.toFixed(2) }}</td>
    <td>{{ item.qty }}</td>
    <td>{{ item.discount * 100 }}</td>
    <td>${{ (item.price * item.qty * (1 - item.discount)).toFixed(2) }}</td>
    <td>
      <a href="#"><i class="bi bi-trash"></i></a>
    </td>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.shopCartItem {
  margin-bottom: 20px;
}

.shopCartItem tr {
  margin-bottom: 20px !important;
}

.shopCartItem td,
.shopCartItem th {
  background: transparent;
  color: #ffffff;
  font-size: 1.2rem;
}
.shopCartItem a {
  color: #fff;
  font-size: 1.2rem;
}

.shopCartItem img {
  width: 120px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  object-position: center;
}

.shopCartItem i {
  font-size: 2rem;
}
</style>
