import axios from "axios";

export default async function getCatalog() {
  try {
    const response = await axios.get("https://imsound.ru/api/catalog");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}