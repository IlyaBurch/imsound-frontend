const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import getIndexData from "../api/getIndex";
import type { IndexResponse } from "../api/getIndex";
// export const photos = () => {
//     let arr = [];
//     const len = getIndexData.sliders_and_banners.sliders.length()
//     for (let i = 0; i < len; i++) {
//         arr.push(`${API_BASE_URL}${getIndexData.sliders_and_banners.sliders[i].image}`)
//     }
//     return arr

export const extractImages = async (): Promise<Object> => {
  try {
    // Получаем данные из getIndexData
    const indexData: IndexResponse = await getIndexData();

    // Инициализируем массив для хранения всех значений "image"
    // const allImages: string[] = [];

    // Перебираем слайдеры
    // if (indexData?.sliders_and_banners?.sliders) {
    //   indexData.sliders_and_banners.sliders.forEach((slider) => {
    //     if (slider?.image) {
    //       allImages.push('https://imsound.ru'+slider.image);
    //     }
    //   });
    // }

    // // Перебираем баннеры
    // if (indexData?.sliders_and_banners?.banners) {
    //   indexData.sliders_and_banners.banners.forEach((banner) => {
    //     if (banner?.image) {
    //       allImages.push(banner.image);
    //     }
    //   });
    // }

    // Возвращаем массив из всех значений "image"
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