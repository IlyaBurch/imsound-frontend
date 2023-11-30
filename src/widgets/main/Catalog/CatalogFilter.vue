<template>
  <div class="filters">
    <Dropdown class="filter__dropdown" placeholder="Фильтры" />
    <Dropdown class="filter__dropdown" placeholder="Сортировка" />
  </div>
</template>

<script setup lang="ts">
import Dropdown from "primevue/dropdown";
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  margin: 0;
  padding: 0 13px 0 13px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.filter__dropdown {
  width: 100%;
}
</style>
