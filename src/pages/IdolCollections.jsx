import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCollections } from "../utils/fetchProducts";

function IdolCollections() {
  const [idolCategories, setIdolCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIdols = async () => {
      try {
        setLoading(true);

        const allCollections = await fetchCollections();

        // Find idols collection only
        const idolsCollection = allCollections.find(
          (item) => item.key === "idols"
        );

        if (idolsCollection) {
          setIdolCategories(idolsCollection.categories);
        } else {
          setIdolCategories([]);
        }

      } catch (error) {
        console.error("Error loading idol categories:", error);
      } finally {
        setLoading(false);
      }
    };

    loadIdols();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">

      {/* HEADER */}
      <div className="text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
          Sacred Collections
        </p>

        <h1 className="text-4xl sm:text-5xl font-serifHeading font-semibold text-[#111111]">
          Divine idols crafted with devotion
        </h1>

        <p className="max-w-3xl mx-auto text-[#6d5e56] leading-8">
          Discover handcrafted spiritual idols designed for homes,
          gifting, temples, and sacred spaces.
        </p>

        <Link to="/collections" className="mt-8 inline-flex rounded-md border border-[#b28c49] bg-white px-6 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
          Back to Our Collections
        </Link>
      </div>

      {/* GRID */}
      <div className="mt-16">

        {loading ? (
          <div className="text-center text-[#7a665c]">
            Loading idol collections...
          </div>
        ) : idolCategories.length === 0 ? (
          <div className="text-center text-[#7a665c]">
            No idol categories available right now.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {idolCategories.map((category) => (
              <div
                key={category.key}
                className="group overflow-hidden border border-[#e6d9cf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                
                {/* IMAGE */}
                <div className="h-64 overflow-hidden bg-[#f7f1eb]">
                  <img
                    src={category.categoryImage}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#111111]">
                    {category.title}
                  </h2>

                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#7a665c]">
                    {category.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#6d5e56]">
                    {category.description}
                  </p>

                  <Link
                    to={`/collections/idols/${category.key}`}
                    className="mt-6 inline-flex items-center justify-center border border-[#b28c49] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#b28c49] hover:text-white"
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

export default IdolCollections;