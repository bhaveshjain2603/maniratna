import { Link } from "react-router-dom";

const collectionTypes = [
  {
    title: "Jewellery",
    subtitle: "Timeless Luxury",
    description:
      "Explore handcrafted jewellery collections ranging from Temple Heritage, Victorian Royalty, Indo-Western elegance, and modern minimal styles.",
    image: "/images/hero-mobile.jpg",
    link: "/collections/jewellery"
  },
  {
    title: "Divine Idols",
    subtitle: "Sacred Craftsmanship",
    description:
      "Discover premium spiritual idols including Ganesha, Shiva, Lakshmi, and sacred décor crafted with devotion and artistic precision.",
    image: "/images/idols/ganesha/ganesha.jpg",
    link: "/collections/idols"
  }
];

function Collections() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">

      {/* HEADER */}
      <div className="space-y-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
          Our Collections
        </p>

        <h1 className="text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">
          Crafted for elegance. Designed for devotion.
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-[#5b504a]">
          Explore our two signature worlds — premium jewellery collections 
          for timeless elegance and divine idols crafted to bring spiritual 
          beauty into every space.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {collectionTypes.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden border border-[#e6d9cf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
          >
            
            {/* IMAGE */}
            <div className="h-80 overflow-hidden bg-[#f7f1eb]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h2 className="text-3xl font-semibold text-[#111111] font-serifHeading">
                {item.title}
              </h2>

              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#7a665c]">
                {item.subtitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#6d5e56]">
                {item.description}
              </p>

              <Link
                to={item.link}
                className="mt-6 inline-flex items-center justify-center rounded-md border border-[#b28c49] px-5 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]"
              >
                Explore More
              </Link>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Collections;