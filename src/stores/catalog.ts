import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import getCatalog from '@/shared/api/getCatalog';
import axios from 'axios';

export const useCatalogStore = defineStore('catalog', ()=> {
  // state: ()=>(
  //   {
  //     catalog:null
  //   }
  // ),
  // actions:{
  //   async getCatalog() {
  //     try {
  //       const response = await axios.get("https://imsound.ru/api/catalog");
  //       return response;
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  // }
  const data = ref(null);
  async function getData () {
    try {
      // Здесь используется axios для выполнения запроса к API
      const response = await axios.get('https://imsound.ru/api/catalog')
      data.value = response.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return {data, getData}
})