<template>
<TabView>
    <TabPanel header="Рекомендации" class="tab__name">
      <ProgressSpinner v-if="isLoading"/>
      <div class="items" v-else>
        <ItemCard v-for="slide in slides" :data="slide"/>
      </div>
    </TabPanel>
    <TabPanel header="Новинки" class="tab__name" :disabled="true">
        <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Хиты продаж" class="tab__name" :disabled="true">
        <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ProgressSpinner from 'primevue/progressspinner';
import ItemCard from '../Catalog/ItemCard.vue';

import { extractFeatured } from '@/shared/helpers/indexTabs';

interface FeaturedProduct {
  id:                  number;
  name:                string;
  description:         null | string;
  price:               string;
  quantity:            number;
  image:               string;
  slug:                string;
  updated_at:          Date;
  is_new:              boolean;
  discount_percentage: number;
  discount_price:      null;
  total_price:         string;
  article_number:      null | string;
  category:            number;
  sub_category:        number;
  manufacturer:        number;
  tags:                any[];
}


let slides = ref()
let isLoading = ref(true)

onMounted(() => {
  extractFeatured().then((images) => {
    slides = images
    console.log(slides)
    isLoading.value = false;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
</script>

<style scoped>
.tab__name{
    font-size: 16px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  gap: 16px;
  padding: 24px 16px 0 16px;
}
</style>