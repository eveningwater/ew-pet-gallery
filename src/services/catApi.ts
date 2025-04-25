import axios from "axios";
import { Cat } from "../types/cat";

const API_URL = "https://api.thecatapi.com/v1/images/search";

export const fetchCats = async (limit: number = 9): Promise<Cat[]> => {
  try {
    const response = await axios.get(`${API_URL}?size=full&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cats:", error);
    return [];
  }
};

export const fetchCatById = async (id: string): Promise<Cat | null> => {
  try {
    const response = await axios.get(`${API_URL}?size=full&image_id=${id}`);
    return response.data[0] || null;
  } catch (error) {
    console.error(`Error fetching cat with id ${id}:`, error);
    return null;
  }
};
