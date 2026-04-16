import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCollections } from '../utils/fetchProducts'

function CollectionCategories() {
  const { collectionId } = useParams()
  const [collections, setCollections] = useState([])

  useEffect(() => {
    fetchCollections().then(setCollections);
  }, []);

  if (!collections.length) {
    return <p className="text-center mt-20">Loading...</p>
  }

  const collection = collections.find(c => c.key === collectionId)

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

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
      <div className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">{collection.title}</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">Choose a Category</h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">
          Explore different categories within the {collection.title} collection to find the perfect piece.
        </p>
        <Link to="/collections" className="inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
          Back to Collections
        </Link>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {!collections.length ? (
          // 🔥 Skeleton cards
          [...Array(4)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden border border-[#e6d9cf] bg-white shadow-sm"
            >
              <div className="h-64 bg-[#f7f1eb]" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-[#e6d9cf] w-3/4 rounded"></div>
                <div className="h-4 bg-[#e6d9cf] w-1/2 rounded"></div>
                <div className="h-4 bg-[#e6d9cf] w-full rounded"></div>
              </div>
            </div>
          ))
        ) : (
          collection?.categories?.map(category => (
            <div key={category.key} className="group overflow-hidden border border-[#e6d9cf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
            
              <div className="h-64 overflow-hidden bg-[#f7f1eb]">
                <img
                  src={category.categoryImage || "/images/fallback.jpg"}
                  alt={category.title}
                  onError={(e) => (e.target.src = "/images/fallback.jpg")}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
          
              <div className="p-6">
                <h2 className="mt-2 mb-4 text-2xl font-semibold text-[#111111]">{category.title}</h2>
                <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">{category.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-[#6d5e56]">{category.description}</p>
          
                <Link
                  to={`/collections/${collectionId}/${category.key}`}
                  className="mt-6 inline-flex items-center justify-center rounded-md border border-[#b28c49] px-5 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]"
                >
                  Explore More
                </Link>
              </div>
          
            </div>
          ))
        )}
      
      </div>
    </div>
  )
}

export default CollectionCategories