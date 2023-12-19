<template>
  <aside>
    <router-link to="/catalog">Каталог</router-link>
  </aside>
  <div class="main">
    <p v-if="isLoading">{{ api.data }}</p>
    <!-- <button @click="getData">ДАЙ МНЕ ДАННЫЕ</button> -->
  </div>
</template>

<script setup lang="ts">
import { useCatalogStore } from "@/stores/catalog";
import { computed, onBeforeMount, onMounted, ref, watchEffect } from "vue";

// const api = useCatalogStore();
// // let data: object = ref({ bu: 1 });
// // watchEffect(() => (data = api.data));
// let data1 = ref({});
// const getData = api.getData;
// const isLoading = ref(false);

// onBeforeMount(() => {
//   isLoading.value = true;
//   getData();
//   data1.value = api.data;
//   // watchEffect(() => (data = ref(api.data)));
//TODO: 1
// });

const api = useCatalogStore();
const isLoading = ref(false);
onBeforeMount(() => {
  api.getData();
  isLoading.value = true;
});

// onMounted(() => {
//   // watchEffect(() => (data = ref(api.data)));
//   data1 = api.data;
// });

const data = computed(() => ref(api.catalog));
// onMounted(() => (data = api.data));
//["results"]["product_list"]
</script>

<style scoped></style>
