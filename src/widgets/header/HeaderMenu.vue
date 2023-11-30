<template>
  <div class="header">
    <router-link to="/">
      <div class="brand-logo">IMSOUND</div>
    </router-link>
    <BurgerButton class="burger" />
    <AsideMenu />
  </div>
</template>

<script setup lang="ts">
import BurgerButton from "@/shared/button/BurgerButton.vue";
import AsideMenu from "../main/Catalog/AsideMenu.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: sticky;
  // top: 15px;
}

.brand-logo {
  font-weight: bold;
  font-size: 24px;
  padding: 24px 0 24px 16px;
}

.burger {
  padding: 24px 16px 24px 0;
}
</style>
