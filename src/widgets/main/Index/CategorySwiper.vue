<template>
    <p class="category__header">Категории товаров</p>
    <swiper-container v-if="isLoading"
      class="category__swiper"
      :slides-per-view="1"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        hideOnClick: true
      }"
      :breakpoints="{
        320:{
          slidesPerVies: 2,
        },
        768: {
          slidesPerView: 2,
          // centeredSlides: false,
        },
      }"
      :grid="{
        fill: 'row',
        rows: 2,
        // columns: 3,
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <template v-for="slide in slides" key="slide.id">
        <swiper-slide class="category__slide">
          <div class="category__item">
            <p>{{ slide.category_name}}</p>
          </div>
        </swiper-slide>
      </template>
    </swiper-container>
  </template>
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import 'swiper/swiper-bundle.css';
    import getIndexData from '@/shared/api/getIndex';
    import { extractCategory } from '@/shared/helpers/categoryHelper';
  
    const isLoading = ref(false)
    let slides: any = ref({});
    let onProgress: any = ref(null);
    let onSlideChange: any = ref(null);
    let spaceBetween: any = 16;

    onMounted(() => {
      extractCategory().then((category) => {
        slides = category
        console.log(slides)
        isLoading.value = true;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      onProgress.value = (e : any) => {
      const [swiper, progress] = e.detail;
        console.log(progress)
      };
  
      onSlideChange.value = (e : any) => {
        console.log('slide changed')
      }
    });
  </script>
  
  <style scoped>
    .category__header{
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; /* 133.333% */
      letter-spacing: 0.24px; 
      padding-left: 16px;
      margin-bottom: 17px;
    }

    .category__swiper{
      width: 100%;
      padding: 0 16px 0 16px;
    }
    .category__item{
      min-width: 135px;
      height: 128px;
      padding: 24px;
      border-radius: 15px;
      background: #EDEDED;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; 
    }
    .category__slide{
      /* max-width: 135px; */
      /* height: 128px; */
      margin-top: 10px;
      margin-bottom: 30px;
    }
  </style>
  