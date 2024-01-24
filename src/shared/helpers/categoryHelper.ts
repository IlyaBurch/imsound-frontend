const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import getIndexData from "../api/getIndex";
import type { IndexResponse } from "../api/getIndex";

export const extractCategory = async (): Promise<Object> => {
  try {
    const indexData: IndexResponse = await getIndexData();

    return indexData.subcategories;
  } catch (error) {
    console.error('Error extracting images:', error);
    throw error;
  }
};

export const getCategory = () => Promise.resolve(getIndexData)