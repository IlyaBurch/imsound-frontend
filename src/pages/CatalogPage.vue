<template>
  <!-- <div class="header">
    <router-link to="/">
      <div class="brand-logo">IMSOUND</div>
    </router-link>
    <BurgerButton class="burger" />
  </div> -->
  <CatalogFilter class="filters" />
  <p class="items__number">Количество товаров: <s>много нихуя</s></p>
  <div class="items">
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </div>
</template>

<script setup lang="ts">
import BurgerButton from "@/shared/button/BurgerButton.vue";
import CatalogFilter from "@/widgets/main/Catalog/CatalogFilter.vue";
import ItemCard from "@/widgets/main/Catalog/ItemCard.vue";
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  font-weight: bold;
  font-size: 24px;
  padding: 24px 0 24px 16px;
}

.burger {
  padding: 24px 16px 24px 0;
}
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
