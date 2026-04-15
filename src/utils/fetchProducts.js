import Papa from "papaparse";
import.meta.env

const SHEET_URL = import.meta.env.VITE_CSV_URL;

export const fetchProducts = async () => {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();

    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          // 🔥 Clean & transform data
          const cleaned = results.data.map((item) => ({
            ...item,
            imageCount: Number(item.imageCount),
          }));

          resolve(cleaned);
        },
      });
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};