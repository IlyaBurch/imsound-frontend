<script setup lang="ts">
  import { computed, ref } from 'vue';
  import getIndexData from '../api/getIndex';
  import type { IndexResponse, Category, Info, FeaturedProduct, SlidersAndBanners, Banner, Slider, Subcategory } from '../api/getIndex';

  const getPhotos = computed(() : Promise<IndexResponse> => getIndexData());
  //    => {
  //   .then(async (response) => {
  //     if (!response.ok) {
  //       throw new Error(`Не пришли данные: ${response.statusText}`)
  //     }
  //     try {
  //       return await response.json()
  //     } catch (jsonError) {
  //       throw jsonError;
  //     }
  //   });
  //   .catch((error) => throw error)
  // })
  export const photos = await getPhotos
  // .value?.sliders_and_banner.sliders
</script>
