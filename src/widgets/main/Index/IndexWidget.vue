<template>
  <swiper-container v-if="isLoading"
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true
    }"
    :breakpoints="{
      320:{
        slidesPerVies: 1,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <template v-for="slide in slides" key="slide.id">
      <swiper-slide>
        <img :src="'https://imsound.ru'+slide.image" class="image">
      </swiper-slide>
    </template>
  </swiper-container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import 'swiper/swiper-bundle.css';
  import {extractImages} from '@/shared/helpers/sliderHelper';

  const isLoading = ref(false)
  let slides: any = ref({});
  let onProgress: any = ref(null);
  let onSlideChange: any = ref(null);
  let spaceBetween: any = ref();


  onMounted(() => {
    extractImages().then((images) => {
      slides = images
      console.log(slides)
      isLoading.value = true;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    spaceBetween.value = 10;
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
  .image{
    width: 100%;
    height: 250px;
  }
</style>

