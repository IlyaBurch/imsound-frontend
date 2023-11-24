<template>
  <div class="header">
    <div class="brand-logo">IMSOUND</div>
    <BurgerButton class="burger" />
  </div>
</template>

<script setup lang="ts">
import BurgerButton from '@/shared/button/BurgerButton.vue'
// export default {
//   setup() {
//     return {}
//   }
// }
</script>

<style lang="scss" scoped>
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
</style>
