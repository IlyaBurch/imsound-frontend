<script setup lang="ts">
import HeaderMenu from '@/widgets/header/HeaderMenu.vue'
import BurgerButton from '@/shared/button/BurgerButton.vue'
</script>

<template>
  <div class="main">
    <HeaderMenu />
    <main>
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Raleway;
  src: url('src/shared/fonts/Raleway-VariableFont_wght.ttf');
}
.main {
  font-family: Raleway, sans-serif;
}
</style>
