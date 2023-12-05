<template>
  <aside>
    <router-link to="/catalog">Каталог</router-link>
  </aside>
  <div class="main">
    <p>{{ data }}</p>
    <button @click="getData">ДАЙ МНЕ ДАННЫЕ</button>
  </div>
</template>

<script setup lang="ts">
import { useCatalogStore } from "@/stores/catalog";
import { ref } from "vue";

const api = useCatalogStore();
const data = ref(api.data);
const getData = api.getData;
</script>

<style scoped></style>
