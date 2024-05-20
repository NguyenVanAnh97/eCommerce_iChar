<template>
  <div class="shoppingCart" v-if="cart.length > 0">
    <div class="container">
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
      <div class="row d-flex justify-content-between mt-5">
        <div class="col-lg-2 align-items-center">
          <p class="itemCount">Total item: {{ cart.length }}</p>
        </div>
        <div class="col-lg-10 d-flex justify-content-end">
          <div class="payment">
            Total: {{ total }}
            <a href="#">Check out <i class="bi bi-wallet-fill"></i></a>
          </div>
        </div>
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
import { computed, inject, ref } from 'vue'
import CartItem from '../components/CartItem.vue'

const cart = ref(inject('cart'))

const handleToPayment = computed(() => { // sử dụng computed để tính toán giá trị thay đổi
  return cart.value
    .map((item) => item.price * item.qty * (1 - item.discount)) //Biến đổi dữ liệu: map giúp biến đổi từng phần tử của mảng cart.value để tính toán giá trị sau giảm giá, chuẩn bị cho bước tính tổng.
    .reduce((acc, cur) => acc + cur, 0) //Tính toán giá trị sau giảm giá.
    .toFixed(2)
})

const total = handleToPayment
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
  box-shadow: 0px 0 15px rgba(255, 255, 255, 0.2);
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

.table-responsive {
  overflow-x: unset;
}

@media (max-width: 1440px) {
  .shoppingCart {
    padding-left: 5%;
  }
}
</style>
