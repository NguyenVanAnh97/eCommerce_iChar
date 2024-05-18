<template>
  <div class="shoppingCart" v-if="cart.length > 0">
    <div class="row">
      <div class="table-responsive">
        <table class="ShopCartTable table table-borderless align-middle">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Color</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Discount</th>
              <th scope="col">Payment</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <CartItem v-for="(item, index) in cart" :key="item.id" :item="item" :index="index" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="shoppingCart" v-else>
    <div class="container">
      <div class="row mt-5">
        <h1>Your Cart is Empty</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import CartItem from '../components/CartItem.vue'

const cart = ref(inject('cart'))
console.log(cart);
</script>

<style scoped>
    .shoppingCart {
        position: relative;
        margin-bottom: 40px;
        min-height: 30vh;
    }

    .shoppingCart h1 {
        color: #ffffff;
    }

    .ShopCartTable {
        margin-top: 50px;
        color: #ffffff;
        background: var(--bgColor);
        box-shadow: 0  0 15px rgba(255, 255, 255, 0.2);
    }

    .ShopCartTable thead tr {
        font-size: 1.3rem;
    }

    .ShopCartTable thead tr th {
        background: transparent;
        color: #ffffff;
    }

    .itemCount {
        font-size: 1.3rem;
        color: #ffffff;
    }

    .payment {
        display: inline-flex;
        align-items: center;
        gap: 50px;
        font-size: 1.3rem;
        color: #ffffff;
    }

    .payment a {
        padding: 10px 20px;
        text-decoration: none;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: var(--primary);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 1440px) {
        .shoppingCart {
            padding-left: 5%;
        }
    }
</style>
