<template>
    <section id="product" class="products">
        <div class="container">
            <div class="row">
                <h4 class="section-title">
                    Products
                </h4>
            </div>
            <div class="row mt-4">
                <div class="col-xl-3 col-lg-4 col-md-6 mt-4" v-for="item in items" :key="item.id">
                    <ItemCard :item="item" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ItemCard from '../components/Item_Card.vue'

const items = ref([])

onMounted(() => {
    fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(data => {
            items.value = data
        }).catch(err => console.log(err))
})
</script>

<style scoped>
    .products {
        background: #1e1e1e;
    }
</style>