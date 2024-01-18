<template>
  <article class="item">
    <picture>
      <img class="item__pic" src="@/abbey-road.webp" />
    </picture>
    <section>
      <p class="item__name">{{data.name}}</p>
      <p class="item__price">{{data.price}}</p>
    </section>
    <BaseButton>Купить</BaseButton>
  </article>
</template>

<script setup lang="ts">
import BaseButton from "@/shared/button/BaseButton.vue";
import { ref } from "vue";

const props = defineProps(['data']);
</script>

<style scoped>
.item {
  background-color: #f6f6f6;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px 24px 12px;
}
.item__pic {
  height: 100px;
  width: 100px;
}

.item__name {
  font-size: larger;
}

.item__price {
  font-size: x-large;
  font-weight: 700;
}
</style>
