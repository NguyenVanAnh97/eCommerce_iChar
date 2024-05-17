<template>
  <div>
    <div class="product-details py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="col">
                <div class="item_Preview" v-for="itemImg in item.demoImage" :key="itemImg.id">
                    <img :src="itemImg.imgUrl" alt="" class="img-fluid" />
                </div>
            </div>

          </div>
          <div class="col-lg-5">
            <img :src="item.imgUrl" alt="" class="img-fluid itemImg" />
          </div>

          <div class="col-lg-5">
              <h2>{{ item.name }}</h2>
              <div class="itemPrice">
                <h4 class="price" v-if="item.price">
                  Price: {{ item.price.toLocaleString() }}
                </h4>
                <h4 class="discount" v-if="item.discount!==0">
                  <i>{{ item.discount * 100 }}% Off</i>
                </h4>
                <h4 class="currentPrice" v-if="item.discount!==0">
                  <span class="now">NOW</span> : {{ ((1-item.discount) * item.price).toFixed(2).toLocaleString() }} 
                </h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const item = ref({})
onMounted(() => {
  fetch(`http://localhost:3000/items/${id}`)
    .then((res) => res.json())
    .then((data) => {
      item.value = data
    })
    .catch((err) => console.log(err))
})

const route = useRoute()
const id = route.params.id
</script>

<style scoped></style>
