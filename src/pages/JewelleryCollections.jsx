import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCollections } from "../utils/fetchProducts";

function JewelleryCollections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchCollections().then((data) => {
      // exclude idols data
      const jewelleryData = data.filter(
        (item) => item.key !== "idols"
      );

      console.log("Jewellery Data:", jewelleryData);

      setCollections(jewelleryData);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
      
      {/* HEADER */}
      <div className="text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
          Jewellery Collections
        </p>

        <h1 className="text-4xl sm:text-5xl font-serifHeading font-semibold text-[#111111]">
          Jewellery crafted for timeless elegance
        </h1>

        <p className="max-w-3xl mx-auto text-[#6d5e56] leading-8">
          Explore our premium jewellery collections designed for weddings,
          festive occasions, gifting, and everyday luxury.
        </p>

        <Link to="/collections" className="mt-8 inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
          Back to Our Collections
        </Link>

      </div>

      {/* GRID */}
      <div className="mt-16">
        {loading ? (
          <div className="text-center text-[#7a665c]">
            Loading collections...
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((item) => (
              <div
                key={item.key}
                className="group overflow-hidden border border-[#e6d9cf] bg-white shadow-sm hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.collectionImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#111111]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#7a665c]">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-[#6d5e56] leading-7">
                    {item.description}
                  </p>

                  <Link
                    to={`/collections/jewellery/${item.key}/categories`}
                    className="mt-6 inline-flex border border-[#b28c49] px-5 py-3 text-sm font-semibold hover:bg-[#b28c49] hover:text-white rounded-md transition"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JewelleryCollections;