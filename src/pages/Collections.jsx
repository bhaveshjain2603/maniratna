import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCollections } from '../utils/fetchProducts'

function Collections() {
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetchCollections().then((data) => {
      setCollections(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">

      {/* HEADER */}
      <div className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">Collections</p>
        <h1 className="text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">
          Jewellery collections that tell a timeless story.
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">
          Explore our carefully curated categories of Indo-Western Elegance, Temple Heritage, The Minimal Edit, and Victorian Royalty.
        </p>
      </div>

      {/* COLLECTIONS GRID */}
      <div className="mt-16">

        {loading ? (
          <>
            {/* Skeleton Header */}
            <div className="mb-10 text-center">
              <p className="text-sm text-[#7a665c]">Loading collections...</p>
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {collections.map(item => (
                
                console.log("FINAL COLLECTION IMAGE:", item.key, item.collectionImage),

                <div key={item.key} className="group overflow-hidden border border-[#e6d9cf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
                  
                  <div className="h-64 overflow-hidden bg-[#f7f1eb]">
                    <img
                      src={item.collectionImage || "/images/fallback.jpg"}
                      alt={item.title}
                      onError={(e) => (e.target.src = "/images/fallback.jpg")}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="mt-2 mb-4 text-2xl font-semibold text-[#111111]">
                      {item.title}
                    </h2>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#6d5e56]">
                      {item.description}
                    </p>

                    <Link
                      to={`/collections/${item.key}/categories`}
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

export default Collections