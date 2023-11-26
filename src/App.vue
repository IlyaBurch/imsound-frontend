<script setup lang="ts">
import HeaderMenu from "@/widgets/header/HeaderMenu.vue";
import RouterPage from "./pages/RouterPage.vue";
</script>

<template>
  <div class="main">
    <main>
      <RouterPage />
    </main>
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
}
</style>
