<template>
  <div class = 'index__loader' v-if="isLoading">
    <ProgressSpinner/>
  </div>
  <main v-else class="main">
    <IndexWidget/>
    <!-- {{ slides1 }} -->
  </main>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, onBeforeMount, provide } from "vue"
  import { getIndexData } from "@/shared/api/getIndex"
  import type { IndexResponse } from "@/shared/api/getIndex";

  import ProgressSpinner from 'primevue/progressspinner';
  import IndexWidget from '@/widgets/main/Index/IndexWidget.vue';

  const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

  let data = ref <IndexResponse | null>(null)
  let isLoading = ref(true);

  // const imagesArray = [];

  // let slidesInfo : any = computed(() => data.value?.sliders_and_banners.sliders)

  const fetchData = async () => {
    isLoading.value = true;
    
    try {
      const response = await getIndexData();
      if (response) {
        data.value = response;
      }
    } catch (error) {
      console.log("Ошибка загрузки данных с серверва:", error)
    } finally {
      isLoading.value = false;
    }
  }

  onBeforeMount(() => {
    fetchData();
  })  

  // provide('slidesInfo', slidesInfo)
</script>

<style scoped>
.index__loader {
  display: grid;
  place-items: center;
  height: calc(100dvh - 86px);
}</style>
