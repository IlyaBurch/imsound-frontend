<template>
  <aside>
    <router-link to="/catalog">Каталог</router-link>
  </aside>
  <div class="main">
    <p v-if="(isLoading = ref(false))">loading</p>
    <p v-if="isLoading">{{ data }}</p>
    <!-- <button @click="getData">ДАЙ МНЕ ДАННЫЕ</button> -->
    <catalog-widget />
  </div>
</template>

<script setup lang="ts">
import { useCatalogStore } from "@/stores/catalog";
import CatalogWidget from "@/widgets/main/Catalog/CatalogWidget.vue";
import { computed, onBeforeMount, onMounted, ref, watchEffect } from "vue";

const api = useCatalogStore();
let isLoading = computed(() => ref(api.isLoading));
onBeforeMount(() => {
  api.getData();
});

const data = computed(() => ref(api.data));
//["results"]["product_list"]
</script>

<style scoped></style>
