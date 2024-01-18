<template>
  <ProgressSpinner v-if="isLoading"/>
  <div v-else>
    <CatalogFilter class="filters" />
    <p class="items__number">Количество товаров: <s>{{data}}</s></p>
    <div class="items">
      <ItemCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeMount, onMounted, ref, watchEffect} from 'vue'
import CatalogFilter from "@/widgets/main/Catalog/CatalogFilter.vue";
import ItemCard from "@/widgets/main/Catalog/ItemCard.vue";
import ProgressSpinner from 'primevue/progressspinner';

import { getCatalogData } from "@/shared/api/getCatalog";
import type { CatalogData } from "@/shared/api/getCatalog";

let data = ref<CatalogData | any>(null);
let isLoading = ref(true);
// const getData = getCatalogData;

const fetchData = async () => {
  console.log('fetchData is called');
  
  isLoading.value = true;


  try {
    const response = await getCatalogData();
    console.log('Response from server:', response);

    if (response) {
      data.value = response;
    }
  } catch (error) {
    console.error('Ошибка загрузки данных с сервера:', error);
  } finally {
    isLoading.value = false;
  }
} 

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.filters {
  padding-top: 40px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  gap: 16px;
  padding: 24px 16px 0 16px;
}
.items__number {
  padding-left: 13px;
  padding-top: 24px;
  font-size: 16px;
}
</style>

