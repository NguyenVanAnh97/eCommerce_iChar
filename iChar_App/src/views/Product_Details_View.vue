<template>
  <div>
    <div class="product-details py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="row">
              <div class="col">
                <div class="itemPreview" v-for="itemImg in item.demoImage" :key="itemImg.id">
                  <img :src="itemImg.imgUrl" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <img :src="item.imgUrl" alt="" class="img-fluid itemImg" />
          </div>

          <div class="col-lg-5">
            <h2>{{ item.name }}</h2>
            <div class="itemPrice">
              <h4 class="price" v-if="item.price">Price: {{ item.price.toLocaleString() }}</h4>
              <h4 class="discount" v-if="item.discount !== 0">
                <i>{{ item.discount * 100 }}% Off</i>
              </h4>
              <h4 class="currentPrice" v-if="item.discount !== 0">
                <span class="now">NOW</span> :
                {{ ((1 - item.discount) * item.price).toFixed(2).toLocaleString() }}
              </h4>
            </div>
            <h4>Product Details</h4>
            <p>{{ item.brief }}</p>
            <h4>Color</h4>
            <div class="color-list" v-if="item.colors">
              <span
                v-for="color in item.colors"
                :key="color.id"
                :style="{ background: color.color }"
                :class="{ active: color.active }"
                @click="handleColorChange(color.color, color.id)"
              ></span>
            </div>
            <h4>Quantity</h4>
            <div class="quantity">
              <a href="#" class="qtyButton" @click.prevent="handleQtyChange(false)"
                ><i class="bi bi-dash"></i
              ></a>
              <span class="qty">{{ qty }}</span>
              <a href="#" class="qtyButton" @click.prevent="handleQtyChange(true)"
                ><i class="bi bi-plus"></i
              ></a>
            </div>
            <a href="#" class="addButton me-3" @click.prevent="handleAddtoCart(item)">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
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

const qty = ref(1)

const selectedColor = ref('#fdb82c')
const handleColorChange = (color, id) => {
  selectedColor.value = color
  item.value.colors.map((itemColor) => {
    itemColor.active = false
    if (itemColor.id === id) {
      itemColor.active = true
    }
  })
}

const handleQtyChange = (add = true) => {
  if (add) {
    qty.value += 1
  } else {
    if (qty.value > 1) {
      qty.value -= 1
    }
    
  }
}

const cart = ref(inject('cart'))

// hàm handleAddtoCart được gọi khi người dùng thêm sản phẩm vào giỏ hàng
// nó tạo ra một đối tượng itemToAdd từ item đã được chọn, với qty và color được đặt theo giá trị đang được lưu trong biến qty và selectedColor
// sau đó kiểm tra xem giỏ hàng đã có sản phẩm có id tương ứng chưa, nếu đã có thì không cần thêm
// nếu chưa thì thêm đối tượng itemToAdd vào giỏ hàng
// cuối cùng in ra giỏ hàng để kiểm tra xem đã được thêm đúng không
const handleAddtoCart = item => {
    const itemToAdd = { ...item, qty: qty.value, color: selectedColor.value }
    if (cart.value.some(prop => prop.id === item.id)) return
    cart.value.push(itemToAdd)
    //console.log('Giỏ hàng:', cart.value);
}


</script>

<style scoped>
.product-details {
  transition: 0.5s;
}

.product-details h1,
.product-details h2,
.product-details h3,
.product-details h4,
.product-details p {
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
}

.product-details h2 {
  margin-bottom: 20px;
}

.itemPreview {
  background: var(--bgColor);
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.itemPrice {
  display: inline-flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.discount {
  color: var(--primary);
}

.currentPrice .now {
  font-size: 2.5rem;
  color: var(--primary);
  font-style: italic;
}

.price {
  color: var(--primary);
}

.color-list {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.color-list span {
  padding: 10px;
  content: '';
  border: 5px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.color-list span:hover,
.color-list span.active {
  box-shadow: 0 0 20px rgba(253, 184, 44, 0.8);
}

.quantity {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 120px;
  background: var(--bgColor);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  margin-bottom: 50px;
}

.qty {
  font-size: 1.3rem;
  color: var(--primary);
}

.qtyButton {
  color: var(--primary);
}

.qtyButton i {
  font-size: 1.2rem;
}

.addButton {
  position: relative;
  margin-top: 20px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 25px;
  width: 300px;
  background: var(--primary);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  transition: 0.5s;
}

.addButton:hover {
  background: #fe9400;
}

@media (max-width: 1440px) {
  .product-details {
    padding-left: 5%;
  }
}

@media (max-width: 768px) {
  .product-details {
    padding-left: 15%;
  }

  .addButton {
    display: inline-block;
    width: 200px;
    font-size: 1rem;
  }
}
</style>
