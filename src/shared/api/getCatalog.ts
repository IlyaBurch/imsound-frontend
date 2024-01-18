import axios from "axios";
// https://dummyjson.com/products/1 - dummy json
// https://imsound.ru/api/catalog - imsound url

export default async function getCatalog() {
  try {
    const response = await axios.get("https://dummyjson.com/products/1");
    const data = response;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}