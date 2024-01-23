<template>
  <div class="catalog__loader" v-if="isLoading">
    <ProgressSpinner/>
  </div>
  <div v-else>
    <CatalogFilter class="filters" />
    <p class="items__number">Количество товаров: {{data?.count}}</p>
    <p>{{ itemsList }}</p>
    <div class="items" >
      <ItemCard v-for="item in data?.results.product_list" :data="item"/>
    </div>
    <Paginator/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import CatalogFilter from "@/widgets/main/Catalog/CatalogFilter.vue";
import ItemCard from "@/widgets/main/Catalog/ItemCard.vue";
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';


import { getCatalogData } from "@/shared/api/getCatalog";
import type { ApiResponse  } from "@/shared/api/getCatalog";

let data = ref< ApiResponse | null>(null);
let isLoading = ref(true);
// const getData = getCatalogData;data.results.product_list

const fetchData = async () => {
  console.log('fetchData is called');
  
  isLoading.value = true;

  try {
    const response = await getCatalogData('10');
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

const itemsList = data.value?.results.product_list
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
.catalog__loader {
  display: grid;
  place-items: center;
  height: calc(100dvh - 86px);
}

</style>

