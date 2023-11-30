<template>
  <div>
    <Button class="button">
      <slot />
    </Button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  background-color: black;
  border-color: black;
}
</style>
