const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

export interface IndexResponse {
  breadcrumbs:         Array<string[]>;
  products_in_cart:    number;
  categories:          Category[];
  subcategories:       Subcategory[];
  sliders_and_banners: SlidersAndBanners;
  featured_products:   FeaturedProduct[];
  company_info:        Info[];
  clients_info:        Info[];
}

export interface Category {
  id:          number;
  name:        string;
  description: null;
  slug:        string;
}

export interface Info {
  id:      number;
  title:   string;
  slug:    string;
  content: string;
  section: number;
}

export interface FeaturedProduct {
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

export interface SlidersAndBanners {
  sliders: Slider[];
  banners: Banner[];
}

export interface Banner {
  id:              number;
  name:            string;
  description:     null | string;
  slug:            string;
  image:           null | string;
  is_index_banner: boolean;
  parent_category: number;
}

export interface Slider {
  id:        number;
  image:     string;
  title:     string;
  subtitle:  string;
  alt_text:  string;
  is_active: boolean;
}

export interface Subcategory {
  category_name: string;
  subcategories: Banner[];
}


export const getIndexData = (): Promise<IndexResponse| any>  => {
  return fetch(`${API_BASE_URL}/index`)
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

export const getCategory = () => Promise.resolve(getIndexData);

export default getIndexData;

