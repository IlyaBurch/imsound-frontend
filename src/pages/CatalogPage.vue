<template>
  <div class="header">
    <div class="brand-logo">IMSOUND</div>
    <BurgerButton class="burger" />
  </div>
  <div class="a">
    <!-- <Dropdown
      v-model="selectedCity"
      :options="options"
      optionLabel="name"
      placeholder="Select a City"
      :pt="{
        root: { class: 'w-full md:w-14rem' },
        item: ({ props, state, context }) => ({
          class: context.selected
            ? 'bg-primary'
            : context.focused
              ? 'bg-blue-100'
              : undefined,
        }),
      }"
    /> -->
    <Textarea v-model="area" />
  </div>
</template>

<script lang="ts" setup>
import BurgerButton from "@/shared/button/BurgerButton.vue";

const options = ["Rating", "Price"];
const selectedCity = "Moscow";
const area = "";
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
</style>
