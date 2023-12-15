import axios from "axios";
// https://dummyjson.com/products/1 - dummy json
// https://imsound.ru/api/catalog - imsound url

export default async function getCatalog() {
  let data = {}
  try {
    const response = await axios.get("https://dummyjson.com/products/1");
    data = response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}