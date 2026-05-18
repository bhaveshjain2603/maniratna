export const isNewProduct = (addedDate) => {
  if (!addedDate) return false;

  const productDate = new Date(addedDate);
  const today = new Date();

  const diffTime = today - productDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays <= 2; // 48 hours
};