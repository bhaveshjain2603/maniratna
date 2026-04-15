export const getImagePaths = (product) => {
  if (!product.productCode || !product.imageCount || !product.category) {
    console.warn('Product missing required fields:', product);
    return [];
  }

  const basePath = `/images/${product.collection}`;

  // ✅ If only 1 image → no suffix
  if (product.imageCount === 1) {
    return [`${basePath}/${product.category}/${product.productCode}.jpg`];
  }

  // ✅ Multiple images → A, B, C...
  const images = [];

  for (let i = 0; i < product.imageCount; i++) {
    const suffix = String.fromCharCode(65 + i);
    images.push(
      `${basePath}/${product.category}/${product.productCode}${suffix}.jpg`
    );
  }

  return images;
};


export const getPrimaryImage = (product) => {
  if (!product.productCode || !product.category) {
    console.warn('Product missing required fields:', product);
    return "/images/fallback.jpg";
  }

  const basePath = `/images/${product.collection}/${product.category}`;

  // ✅ Single image
  if (product.imageCount === 1) {
    return `${basePath}/${product.productCode}.jpg`;
  }

  // ✅ Multiple images
  return `${basePath}/${product.productCode}A.jpg`;
};