export const transformData = (data) => {
  const collectionsMap = {};

  data.forEach((item) => {
    const collectionKey = item.collection;
    const categoryKey = item.category;

    // Create collection if not exists
    if (!collectionsMap[collectionKey]) {
      collectionsMap[collectionKey] = {
        key: collectionKey,
        title: item.collectionTitle,
        subtitle: item.collectionSubtitle,
        description: item.collectionDescription,
        collectionImage: null,
        categories: {}
      };
    }

    const img = item.collectionImage?.trim();

    // ✅ SET ONLY ONCE (FIRST VALID IMAGE)
    if (!collectionsMap[collectionKey].collectionImage && img) {
      collectionsMap[collectionKey].collectionImage = img;
    }

    const collection = collectionsMap[collectionKey];

    // Create category if not exists
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
      
      // 🔥 IMPORTANT ADD THESE
      collection: item.collection,
      category: item.category
    });
  });

  // Convert categories object → array
  return Object.values(collectionsMap).map(collection => ({
    ...collection,
    categories: Object.values(collection.categories)
  }));
};