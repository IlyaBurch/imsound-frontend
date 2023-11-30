// import { ref} from 'vue'
import { defineStore } from 'pinia'

// export type RootState = {
//   isActive: boolean;
// }

export const useUIStore = defineStore({
  id: 'ui',
  state: ()=>(
    {
      isActive: false,
    } 
  ),
  actions: {
    activation(){
      this.isActive = !this.isActive
    }
  }
})

