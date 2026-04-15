import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import CollectionCard from '../components/CollectionCard'
import victorianRoyaltyA from '../../public/images/victorian-royalty/Victorian.jpg'

const collections = [
  {
    title: 'Victorian Collection',
    description: 'Ornate designs with antique charm for morning and evening silhouettes.',
    image: victorianRoyaltyA
  },
  {
    title: 'Indo-Western Collection',
    description: 'Lavish pieces inspired by celebrations and timeless unions.',
    image: victorianRoyaltyA
  },
  {
    title: 'Temple Jewellery',
    description: 'Heritage motifs with handcrafted goldwork and graceful detailing.',
    image: victorianRoyaltyA
  }
]

function Home() {
  return (
    <div className="relative overflow-hidden bg-[#f7f1ed]">
      <section className="relative">
        <HeroCarousel />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f1ed] to-transparent" />
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex border border-[#b28c49]/25 bg-[#fff7f0]/90 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#7a665c]">
              Curated luxury jewellery
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">
                Crafted to Make You Stand Out
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#5c5049] sm:text-lg">
                Timeless jewellery for graceful moments — a premium collection that balances heritage craftsmanship with subtle modern luxury.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/collections" className="inline-flex items-center justify-center border border-transparent bg-matteBlack px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1a1a1a]">
                Explore Collections
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center border border-[#b28c49] px-8 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
                Know More
              </Link>
            </div>
          </div>
          <div className="border border-[#d3c7bb]/60 bg-white/90 p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">About Preview</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111111] font-serifHeading">MANIRATNA JEWELS celebrates heritage with confidence.</h2>
            <p className="mt-4 text-base leading-8 text-[#5b504a]">
              Founded for discerning audiences, our jewellery honors tradition through refined materials, modern silhouettes, and exceptional finish.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center justify-center border border-[#b28c49] px-8 py-3 text-sm font-semibold text-matteBlack transition hover:bg-[#f4ebe4]">
              Know More
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">Featured Collections</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] font-serifHeading">Premium collections for every chapter.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#5b504a]">
              Explore Victorian, bridal, and temple jewellery designed for both retail and bulk engagements.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {collections.map(card => (
              <CollectionCard key={card.title} title={card.title} description={card.description} image={card.image} />
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-[#d3c7bb]/40 pt-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">Why Choose Us</p>
              <h2 className="text-3xl font-semibold leading-tight text-[#111111] font-serifHeading">Discover jewellery that defines you</h2>
              <p className="max-w-xl text-base leading-8 text-[#5c5049]">
                We create refined jewels for B2B and B2C customers who value elegance, trust, and a legacy of craftsmanship.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Crafted with Care', 'Premium Finish', 'Timeless Designs', 'Trusted by Customers'].map(item => (
                <div key={item} className="border border-[#e1d6cb] bg-[#faf4ef] px-6 py-5">
                  <p className="font-semibold text-[#111111]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
