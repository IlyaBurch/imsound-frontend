import * as axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

export type CatalogData = {
  count : number;
  next : string | null;
  previous : string | null;
  results : {
    breadcrumbs : Array<Array<string>>;
    products_in_cart : number;
    categories : {
      id : number;
      name : string;
      description : string | null;
      slug : string;
    }
  }
}

export const getCatalogData = (): Promise<CatalogData | any>  => {
  return fetch(`${API_BASE_URL}/catalog`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      // const responseData = await response.json();
      // console.log('Raw data from server:', responseData); // Добавьте эту строку для логирования

      // return responseData;
      try {
        const responseData = await response.json();
        console.log('Parsed data from server:', responseData);

        return responseData;
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
        throw jsonError;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export default getCatalogData;
// const catalog = await getCatalog();

