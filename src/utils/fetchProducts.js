import Papa from "papaparse";

/**
 * Transform flat Google Sheet data → structured collections
 */
const transformData = (data) => {
  const collectionsMap = {};

  data.forEach((item) => {
    const collectionKey = item.collection;
    const categoryKey = item.category;

    // Create collection
    if (!collectionsMap[collectionKey]) {
      collectionsMap[collectionKey] = {
        key: collectionKey,
        title: item.collectionTitle,
        subtitle: item.collectionSubtitle,
        description: item.collectionDescription,
        categories: {}
      };
    }

    const collection = collectionsMap[collectionKey];

    // Create category
    if (!collection.categories[categoryKey]) {
      collection.categories[categoryKey] = {
        key: categoryKey,
        title: item.categoryTitle,
        subtitle: item.categorySubtitle,
        description: item.categoryDescription,
        products: []
      };
    }

    // Add product
    collection.categories[categoryKey].products.push({
      name: item.name,
      description: item.description,
      productCode: item.productCode,
      imageCount: Number(item.imageCount),
      weight: item.weight,
      color: item.color,
      polish: item.polish,
      material: item.material,
      dimensions: item.dimensions,
      collection: item.collection,
      category: item.category
    });
  });

  // Convert object → array
  return Object.values(collectionsMap).map((collection) => ({
    ...collection,
    categories: Object.values(collection.categories)
  }));
};

const SHEET_URL = import.meta.env.VITE_CSV_URL;

export const fetchCollections = async () => {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();

    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {

          // 🔥 CLEAN DATA (VERY IMPORTANT)
          const cleaned = results.data.map((item) => ({
            collection: item.collection?.trim().toLowerCase(),
            collectionTitle: item.collectionTitle,
            collectionSubtitle: item.collectionSubtitle,
            collectionDescription: item.collectionDescription,

            category: item.category?.trim().toLowerCase(),
            categoryTitle: item.categoryTitle,
            categorySubtitle: item.categorySubtitle,
            categoryDescription: item.categoryDescription,

            name: item.name,
            description: item.description,
            productCode: item.productCode?.trim(),
            imageCount: Number(item.imageCount),

            weight: item.weight,
            color: item.color,
            polish: item.polish,
            material: item.material,
            dimensions: item.dimensions,

            status: item.status?.trim().toLowerCase()
          }));

          // 🔥 FILTER ONLY ACTIVE PRODUCTS
          const activeData = cleaned.filter((item) => item.status === "active");

          // 🔥 TRANSFORM TO STRUCTURED DATA
          const structured = transformData(activeData);

          resolve(structured);
        },
      });
    });

  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};