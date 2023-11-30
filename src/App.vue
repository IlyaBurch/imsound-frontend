<script setup lang="ts">
import RouterPage from "./pages/RouterPage.vue";
// import type HeaderMenu from "./widgets/header/HeaderMenu.vue";
import HeaderMenu from "./widgets/header/HeaderMenu.vue";
</script>

<template>
  <div class="main">
    <header class="sticky">
      <HeaderMenu />
    </header>
    <RouterPage />
    <footer></footer>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Raleway;
  src: url("src/shared/fonts/Raleway-VariableFont_wght.ttf");
}
.main {
  font-family: Raleway, sans-serif;
  margin: 0;
  padding: 0;
}
.sticky {
  position: sticky;
}
</style>
