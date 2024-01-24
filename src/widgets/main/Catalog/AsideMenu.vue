<template>
  <Teleport to="body">
    <div v-if="state" class="modal">
      <router-link to="/" @click="activation">
        <Button link>Главная</Button>
      </router-link>
      <router-link to="/catalog" @click="activation">
        <Button link>Каталог</Button>
      </router-link>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { watchEffect, ref } from "vue";
import { useUIStore } from "@/stores/ui";

export default {
  setup() {
    let store = useUIStore();
    let state = ref(store.isActive);
    const activation = store.activation;

    watchEffect(() => (state.value = store.isActive));

    return { state, activation };
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 84px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
