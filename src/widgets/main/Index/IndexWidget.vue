<template>
  <div v-if="isLoading"></div>
  <div v-else>
    <Galleria :value="slides" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
      </template>
    </Galleria>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Galleria from 'primevue/galleria';
  import {extractImages} from '@/shared/helpers/sliderHelper';

  const isLoading = ref(true)
  let slides: any = [];

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
    extractImages().then((images) => {
    slides = images
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

