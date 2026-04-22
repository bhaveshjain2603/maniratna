import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCollections } from '../utils/fetchProducts'

function CollectionCategories() {
  const { collectionId } = useParams()

  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetchCollections().then((data) => {
      setCollections(data)
      setLoading(false)
    })
  }, [])

  const collection = collections.find(c => c.key === collectionId)

  if (!collection && !loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">Collection not found</p>
        <h1 className="mt-6 text-4xl font-semibold text-[#111111]">The collection you are looking for is unavailable.</h1>
        <Link to="/collections/jewellery" className="mt-8 inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
          Back to Collections
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 lg:py-20">

      {/* HEADER */}
      <div className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
          {collection?.title || "Loading..."}
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">
          Choose a Category
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">
          Explore different categories within the {collection?.title || ""} collection to find the perfect piece.
        </p>
        <Link
          to="/collections/jewellery"
          className="inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]"
        >
          Back to Collections
        </Link>
      </div>

      {/* CATEGORIES */}
      <div className="mt-8">

        {loading ? (
          <>
            <div className="mb-10 space-y-4 text-center">
              <p className="text-sm  text-[#7a665c]">Loading categories...</p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-10 space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
                Categories
              </p>
              <h2 className="text-3xl font-semibold text-[#111111] font-serifHeading">
                Explore Categories
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">
                Discover beautifully curated jewellery across different styles and traditions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {collection?.categories?.map(category => (
                console.log("FINAL CATEGORY IMAGE:", category.key, category.categoryImage),
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
                    <h2 className="mt-2 mb-4 text-2xl font-semibold text-[#111111]">
                      {category.title}
                    </h2>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
                      {category.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#6d5e56]">
                      {category.description}
                    </p>

                    <Link
                      to={`/collections/jewellery/${collectionId}/${category.key}`}
                      className="mt-6 inline-flex items-center justify-center rounded-md border border-[#b28c49] px-5 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]"
                    >
                      Explore More
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </>
        )}

      </div>

    </div>
  )
}

export default CollectionCategories