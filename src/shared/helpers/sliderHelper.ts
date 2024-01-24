const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import getIndexData from "../api/getIndex";
import type { IndexResponse } from "../api/getIndex";

export const extractImages = async (): Promise<Object> => {
  try {
    // Получаем данные из getIndexData
    const indexData: IndexResponse = await getIndexData();

    return indexData?.sliders_and_banners?.sliders;
  } catch (error) {
    // Обрабатываем ошибку, если произошла
    console.error('Error extracting images:', error);
    throw error;
  }
};

const PhotoService = getIndexData();

export const getImages = () => Promise.resolve(getIndexData)
// = PhotoService.then(data => data.sliders_and_banners.sliders)

//TODO: разобраться с ебучим primevue и починить галлерею