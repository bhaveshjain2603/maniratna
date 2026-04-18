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
        collectionImage: null, // 🔥 important
        categories: {}
      };
    }

    // ✅ Assign collection image ONLY if present
    if (item.collectionImage && item.collectionImage !== "") {
      collectionsMap[collectionKey].collectionImage = item.collectionImage;
    }

    const collection = collectionsMap[collectionKey];

    // Create category
    if (!collection.categories[categoryKey]) {
      collection.categories[categoryKey] = {
        key: categoryKey,
        title: item.categoryTitle,
        subtitle: item.categorySubtitle,
        description: item.categoryDescription,
        categoryImage: item.categoryImage,
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

          // 🔥 FIX: REMOVE BOM + CLEAN KEYS
          const cleaned = results.data.map((item) => {
            const normalized = {};

            Object.keys(item).forEach((key) => {
              const cleanKey = key.trim().replace(/^\uFEFF/, "");
              normalized[cleanKey] = item[key];
            });

            return {
              collection: normalized.collection?.trim().toLowerCase(),
              collectionImage: normalized.collectionImage?.trim(),

              collectionTitle: normalized.collectionTitle,
              collectionSubtitle: normalized.collectionSubtitle,
              collectionDescription: normalized.collectionDescription,

              category: normalized.category?.trim().toLowerCase(),
              categoryTitle: normalized.categoryTitle,
              categorySubtitle: normalized.categorySubtitle,
              categoryDescription: normalized.categoryDescription,
              categoryImage: normalized.categoryImage?.trim(),

              name: normalized.name,
              description: normalized.description,
              productCode: normalized.productCode?.trim(),
              imageCount: Number(normalized.imageCount),

              weight: normalized.weight,
              color: normalized.color,
              polish: normalized.polish,
              material: normalized.material,
              dimensions: normalized.dimensions,

              status: normalized.status?.trim().toLowerCase()
            };
          });

          // 🔥 Filter active only
          const activeData = cleaned.filter((item) => item.status === "active");

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