<template>
  <div>
    <ItemCard />
    <!-- <p>{{ catalogItems }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ItemCard from "./ItemCard.vue";
import { useCatalogStore } from "@/stores/catalog";

// const api = useCatalogStore();
// let isLoading = false;
// // TODO:надо переписать логику работы со стором
// //  const catalogItems: object = computed(()=>{
// //   isLoading =
// // })
</script>

<style scoped></style>
