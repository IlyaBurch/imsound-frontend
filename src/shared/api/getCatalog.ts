import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

export interface Subcategory {
  id: number;
  name: string;
  description: null | string;
  slug: string;
  parent_category: number;
}

export interface Category {
  id: number;
  name: string;
  description: null | string;
  slug: string;
}

export interface Manufacturer {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
  slug: string;
  updated_at: string;
  is_new: boolean;
  discount_percentage: number;
  discount_price: null | string;
  total_price: string;
  article_number: null | string;
  category: number;
  sub_category: number;
  manufacturer: number;
  tags: any[]; 
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    breadcrumbs: string[][];
    products_in_cart: number;
    categories: Category[];
    subcategories: {
      category_name: string;
      subcategories: Subcategory[];
    }[];
    manufacturers: Manufacturer[];
    product_list: Product[];
    products_count: number;
  };
}

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



export const getCatalogData = (itemsCount = '8'): Promise<CatalogData | any>  => {
  return fetch(`${API_BASE_URL}/catalog`, {
    headers: {
      'PAGINATIONPARAM': itemsCount,
    }})
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
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


