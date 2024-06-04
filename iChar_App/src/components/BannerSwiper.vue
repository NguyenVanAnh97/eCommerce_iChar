<template>
    <swiper 
    :slides-per-view="3" 
    :space-between="30" 
    :navigation="true" 
    :modules="modules" 
    class="mySwiper">
        <swiper-slide v-for="item in items.slice(0, 5)" :key="item.id">
           <img @click="bannerChange(item.id)" :src="item.imgUrl" alt="" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';



const modules = [Navigation]

    defineProps({
        items: {
            type: Array,
            required: true
        },
        bannerChange: {
            type: Function,
            required: true
        }
    })
</script>

<style>
    .swiper {
        position: absolute;
        bottom: 50px;
        left: 10%;
        width: 30%;
        padding-top: 10px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100px;
        height: 120px;
        cursor: pointer;
    }
    
    .swiper .swiper-button-next, .swiper .swiper-button-prev {
        width: 54px;
        height: 54px;
    }

    .swiper .swiper-button-next::after,
    .swiper .swiper-button-prev::after {
        font-size: 30px;
        line-height: 0;
        width: 54px;
        height: 54px;
        background: transparent;
        border-radius: 50%;
        transition: 0.3s;
        color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
    }

    .swiper .swiper-button-next:hover,
    .swiper .swiper-button-prev:hover {
       border-radius: 50%;
       background: rgba(255, 255, 255, 0.3) !important;
       color: rgba(255, 255, 255, 0.8) !important;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
    }

    @media (max-width: 1440px) {
        .swiper {
            width: 30%;
            position: absolute;
            bottom: 80px;
            left: 13%;
            padding-top: 10px;
            padding-bottom: 30px;
        }
    }

    @media (max-width: 768px) {
        .swiper {
            width: 70%;
            bottom: 80px;
            left: 20%;
        }
    }

</style>