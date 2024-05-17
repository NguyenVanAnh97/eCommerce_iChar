<template>
  <div class="banner-slider" :class="{ active: item.active }">
    <div class="content">
      <h1>{{ item.name }}</h1>
      <p>{{ item.brief.slice(0, 100) }} ...</p>
      <div class="colors">
        <h4>color</h4>
        <div class="color-list">
          <span
            v-for="color in item.colors"
            :key="color.id"
            :style="{ background: color.color }"
            :class="{ active: color.active }"
          ></span>
        </div>
      </div>
      <div class="pricing">
        <RouterLink :to="`/product/${item.id}`" class="add-to-cart">Learn More</RouterLink>
        <span
          class="price"
          :style="[
            item.discount !== 0 && {
              textDecoration: 'line-through',
              textDecorationColor: 'red',
              fontSize: '1.2rem'
            }
          ]"
        >
          <!-- Nó kiểm tra xem giảm giá của mục item có khác 0 hay không.
                    Nếu item.discount không phải là 0 (nghĩa là có giảm giá)
                    thì các thuộc tính CSS trong đối tượng bên trong sẽ được áp dụng.
                    Nếu không, không có kiểu CSS nào được áp dụng.-->
          ${{ item.price.toLocaleString() }}
        </span>
        <span class="price" v-if="item.discount !== 0">
          ${{ (item.price * (1 - item.discount)).toFixed(0) }}
        </span>
      </div>
    </div>
    <div class="item-img">
      <div
        class="img-container"
        :class="{ active: item.active }"
        :style="{ background: item.bgColor }"
      >
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.banner-slider {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 90%;
  display: flex;
  transition: 1s;
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
}

.banner-slider.active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 200px;
}

.content h1 {
  color: #ffffff;
  font-size: 5rem;
}

.content p {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 50px;
}

.content .colors {
  display: inline-flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 50px;
}

.content .colors h4 {
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 0;
}

.content .colors .color-list {
  display: flex;
  gap: 20px;
}

.content .colors .color-list span {
  padding: 10px;
  content: '';
  border: 5px solid #ffffff;
  border-radius: 50%;
  transition: 0.3s;
}

.content .colors .color-list span:hover,
.content .colors .color-list span.active {
  box-shadow: 0 0 20px rgba(253, 184, 44, 0.8);
}

.content .pricing {
  display: inline-flex;
  align-items: center;
  gap: 40px;
}

.content .pricing .add-to-cart {
  color: #000000;
  background: #ffffff;
  padding: 20px 40px;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer !important;
}

.content .pricing .price {
  color: var(--primary);
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.item-img {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img .img-container {
  position: relative;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: var(--primary);
  transform: rotateZ(180deg);
  transition: ease-in-out 1s;
}

.item-img .img-container.active {
  transform: rotateZ(0);
}

.item-img .img-container::before {
  position: absolute;
  content: '';
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  border-radius: 50%;
  border: 5px solid #414141;
}

.item-img .img-container img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 800px;
  object-fit: cover;
}

.item-img .img-container .number {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 3.5rem;
  border-radius: 50%;
  background: var(--third);
}

.item-img .img-container .video {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 600;
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 50%;
  background: var(--primary);
}

@media (max-width: 1440px) {
  .content {
    padding-bottom: 100px;
  }

  .content h1 {
    font-size: 3.5rem;
  }

  .content p {
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  .content .colors {
    margin-bottom: 30px;
  }

  .content .pricing .add-to-cart {
    padding: 10px 20px;
    font-size: 1rem;
  }

  .item-img .img-container {
    width: 400px;
    height: 400px;
  }

  .item-img .img-container::before {
    width: 600px;
    height: 600px;
  }

  .item-img .img-container img {
    width: 400px;
    height: 500px;
  }

  .item-img .img-container .number {
    left: -40px;
    bottom: -40px;
  }

  .item-img .img-container .video {
    right: -40px;
    top: -40px;
  }
}

@media (max-width: 768px) {
  .banner-slider {
    flex-direction: column-reverse;
  }

  .content {
    width: 100%;
    height: 50%;
    padding: 20px 20px 0 100px;
    justify-content: start;
  }

  .content h1 {
    font-size: 3rem;
  }

  .content .pricing {
    gap: 15px;
  }

  .item-img {
    width: 100%;
    height: 50%;
    padding: 20px 20px 0 100px;
  }

  .item-img .img-container {
    width: 200px;
    height: 200px;
  }

  .item-img .img-container::before {
    width: 300px;
    height: 300px;
  }

  .item-img .img-container img {
    width: 200px;
    height: 300px;
  }
}
</style>
