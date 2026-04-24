import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCollectionByKey } from '../data/collectionsData' 
import { getImagePaths, getPrimaryImage } from '../utils/imageUtils'
import { fetchCollections } from '../utils/fetchProducts'

function CollectionDetail() {
  const { collectionId, categoryId } = useParams()
  const collection = getCollectionByKey(collectionId)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setLoading(true);
    
    fetchCollections().then((data) => {
      const collection = data.find(c => c.key === collectionId);
    
      if (!collection) {
        setProducts([]);
        setLoading(false);
        return;
      }
    
      let products = [];
    
      if (categoryId) {
        const category = collection.categories.find(
          cat => cat.key === categoryId
        );
      
        // newest products first
        products = category ? [...category.products].reverse() : [];
      } else {
        // all products
        products = collection.categories.flatMap(cat => cat.products).reverse();
      }
    
      console.log("FINAL PRODUCTS:", products.length);
    
      setProducts(products);
      setLoading(false);
    });
  }, [collectionId, categoryId]);

  if (!collection) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">Collection not found</p>
        <h1 className="mt-6 text-4xl font-semibold text-[#111111]">The collection you are looking for is unavailable.</h1>
        <Link to="/collections" className="mt-8 inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
          Back to Collections
        </Link>
      </div>
    )
  }

  let title = collection.title
  let subtitle = collection.subtitle
  let description = collection.description
  let backLink = '/collections'

  if (categoryId) {
    const category = collection.categories.find(cat => cat.key === categoryId)
    if (category) {
      title = category.title
      subtitle = category.subtitle
      description = category.description
      backLink = `/collections/${collectionId}/categories`
    }
  } else {
    backLink = '/collections'
  }

  const getWhatsAppLink = (product) => {
    const imageUrl = `${window.location.origin}${getPrimaryImage(product)}`;

    const message = `Hello MANIRATNA JEWELS,

I would like to inquire about this jewellery piece:

✨ Name: ${product.name}
🔖 Code: ${product.productCode}

📸 Image:
${imageUrl} 

Please share more details.`

    return `https://api.whatsapp.com/send?phone=919448793711&text=${encodeURIComponent(message)}`
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 lg:py-20">

      {/* HEADER */}
      <div className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">{subtitle}</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">{title}</h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">{description}</p>
        <Link to={backLink} className="inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
          Back to {categoryId ? 'Categories' : 'Collections'}
        </Link>
      </div>

      {/* PRODUCTS */}
      <div className="mt-8">
        {loading ? (
          <p className="text-center text-[#7a665c]">Loading products...</p>
        ) : (
          <>
            <div className="mb-10 space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">Entire collection</p>
              <h2 className="text-3xl font-semibold text-[#111111] font-serifHeading">
                Explore the full {title} series
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">
                Each piece in this collection is curated to be part of a cohesive wardrobe of premium jewellery.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map(product => (
                <article key={product.productCode} className="overflow-hidden border border-[#e6d9cf] bg-[#faf3eb] shadow-sm transition hover:-translate-y-1 hover:shadow-glow">

                  <img
                    src={getPrimaryImage(product)}
                    alt={product.name}
                    onError={(e) => (e.target.src = "/images/fallback.jpg")}
                    className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#111111]">{product.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5b504a]">{product.description}</p>

                    <button
                      onClick={() => {
                        setSelectedProduct(product)
                        setCurrentImageIndex(0)
                      }}
                      className="mt-6 inline-flex items-center justify-center rounded-md border border-[#b28c49] px-5 py-3 text-lg font-bold text-matteBlack transition hover:bg-[#f4ebe4]"
                    >
                      Know More
                    </button>
                  </div>

                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* MODAL (UNCHANGED UI) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-2xl">
            <div className="grid md:grid-cols-2">

              <div className="p-6 relative bg-[#faf3eb]">
                {(() => {
                  const images = getImagePaths(selectedProduct)
                  return (
                    <>
                      <img
                        src={images[currentImageIndex]}
                        alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                        className="aspect-[4/5] w-full rounded-lg object-cover shadow-sm"
                      />

                      <p className="mt-2 text-xs text-[#5b504a]">
                        * The model's image is for representation purposes only. Actual product varies in size.
                      </p>

                      {images.length > 1 && (
                        <>
                          <div className="flex justify-between items-center mt-4 gap-2">

                            {/* PREVIOUS BUTTON */}
                            <button
                              onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                              className="flex-shrink-0 h-12 w-12 rounded-full border border-[#b28c49] bg-white text-[#111111] font-bold transition hover:bg-[#f4ebe4] flex items-center justify-center"
                              aria-label="Previous image"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                            </button>

                            {/* INDICATORS */}
                            <div className="flex gap-2 flex-1 justify-center">
                              {images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`h-2.5 rounded-full transition ${
                                    index === currentImageIndex
                                      ? 'bg-[#b28c49] w-8'
                                      : 'bg-[#d3c7bb] w-2.5 hover:bg-[#b28c49]'
                                  }`}
                                  aria-label={`Go to image ${index + 1}`}
                                />
                              ))}
                            </div>
                            
                            {/* NEXT BUTTON */}
                            <button
                              onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
                              className="flex-shrink-0 h-12 w-12 rounded-full border border-[#b28c49] bg-white text-[#111111] font-bold transition hover:bg-[#f4ebe4] flex items-center justify-center"
                              aria-label="Next image"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>      
                            </button>
                            
                          </div>

                          <div className="text-center text-sm text-[#7a665c]">
                            {currentImageIndex + 1} / {images.length}
                          </div>
                        </>
                      )}
                    </>
                  )
                })()}
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#111111] font-serifHeading">{selectedProduct.name}</h2>
                {/* <p className="mt-3 text-sm leading-7 text-[#5b504a]">{selectedProduct.description}</p> */}
                
                <div className="mt-6 space-y-4">
                  <div className="border-t border-[#e6d9cf] pt-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7a665c]">Product Details</h3>

                    <div className="mt-3 space-y-2 text-sm">
                      <p><b>Product Code:</b> {selectedProduct.productCode}</p>
                      <p><b>Weight:</b> {selectedProduct.weight}</p>
                      <p><b>Color:</b> {selectedProduct.color}</p>
                      <p><b>Polish:</b> {selectedProduct.polish}</p>
                      <p><b>Material:</b> {selectedProduct.material}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={getWhatsAppLink(selectedProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-[#b28c49] bg-[#25d366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#128c7e]"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/> </svg>
                    Inquire Now
                  </a>

                  <button
                    onClick={() => {
                      setSelectedProduct(null)
                      setCurrentImageIndex(0)
                    }}
                    className="rounded-md border border-[#d3c7bb] bg-white px-4 py-3 text-md font-bold text-[#2e2119] transition hover:bg-[#f7f1ed]"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default CollectionDetail