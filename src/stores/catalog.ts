import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import getCatalog from '@/shared/api/getCatalog';
import axios from 'axios';

export const useCatalogStore = defineStore('catalog', ()=> {
  const data = ref(null);
  async function getData () {
    try {
      // https://dummyjson.com/products/1 - dummy json
      // https://imsound.ru/api/catalog - imsound url
      const response = await axios.get('https://imsound.ru/api/catalog ')
      data.value = response.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return {data, getData}
})