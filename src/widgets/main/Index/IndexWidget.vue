<template>
  <div v-if="isLoading"></div>
  <div v-else>
    <Galleria :value="slides" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
        <a href="https://imsound.vercel.app/cart"><img :src="'https://imsound.ru'+slotProps.item.image" :alt="slotProps.item.alt" style="width: 100%; display: block;" /></a>
    </template>
</Galleria>
  </div>
  <!-- <img src="https://imsound.ru/media/slider_images/home_slider_bit_Iyqj0R3.png" alt="" srcset=""> -->
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Galleria from 'primevue/galleria';
  import {extractImages, getImages} from '@/shared/helpers/sliderHelper';


  const isLoading = ref(true)
  let slides: any = {};

  const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

  onMounted(() => {
    // getImages().then((data) => (slides.value = data.sliders_and_banners.sliders));
    extractImages().then((images) => {
    slides = images
    console.log(slides)
    isLoading.value = false;

}).catch((error) => {
  console.error('Error:', error);
});
  })
  // import { ref, onMounted, inject, computed } from "vue";
  // import Galleria from 'primevue/galleria';
  
  // const slidesInfo : any = inject('slidesInfo')
  // const imagesArray = [];
  
  // const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

  // console.log(slidesInfo)
  
  
  // let imageData = computed( () => {
  //   let slides = slidesInfo.value;
  //   const imageUrl = slides?.forEach((element: { image: any; }) => {
  //     imagesArray.push(API_BASE_URL+element.image)
  //   });
  //   return imageUrl;
  // })
  // console.log(imageData)
</script>

<style scoped>

</style>

