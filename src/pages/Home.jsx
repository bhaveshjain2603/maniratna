import { Link } from 'react-router-dom'
import { useState } from 'react'
import FeedbackModal from '../components/FeedBackModal';
import HeroCarousel from '../components/HeroCarousel'
import CollectionCard from '../components/CollectionCard'
import indoHero from '../../public/images/indo-western/necklaces/necklace.jpg'
import templeHero from '../../public/images/temple-heritage/hero.jpg'
import victorianHero from '../../public/images/victorian-royalty/Victorian.jpg'
import minimalHero from '../../public/images/minimal-edit/minimal.jpg'

const collections = [
  {
    title: 'Victorian Collection',
    description: 'Ornate designs with antique charm for morning and evening silhouettes.',
    image: victorianHero,
    buttonText: 'Explore Designs',
    link: '/collections/victorian-royalty/categories',
    type: 'victorian'
  },
  {
    title: 'Indo-Western Collection',
    description: 'Lavish pieces inspired by celebrations and timeless unions.',
    image: indoHero,
    buttonText: 'View Collection',
    link: '/collections/indo-western/categories',
    type: 'indo'
  },
  {
    title: 'Temple Jewellery',
    description: 'Heritage motifs with handcrafted goldwork and graceful detailing.',
    image: templeHero,
    buttonText: 'Discover Collection',
    link: '/collections/temple-heritage/categories',
    type: 'temple'
  },
  {
    title: 'Minimal Edit',
    description: 'Refined, lightweight designs crafted for everyday elegance and modern sophistication.',
    image: minimalHero,
    buttonText: 'Shop Minimal',
    link: '/collections/minimal-edit/categories',
    type: 'minimal'
  }
]

function Home() {
  const [openFeedback, setOpenFeedback] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#f7f1ed]">
      <section className="relative">
        <HeroCarousel />
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
              <a
                href="https://wa.me/919448793711?text=✨ Hello MANIRATNA JEWELS,%0A%0AI was exploring your collection and a few pieces truly caught my attention 💎.%0A%0AI would love to know more about pricing, designs, and availability.%0A%0ALooking forward to your response."
                className="inline-flex items-center justify-center gap-2 border border-[#25d366] bg-[#25d366] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#128c7e]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/> </svg>
                Chat on WhatsApp
              </a>
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
              <CollectionCard 
                key={card.title} 
                title={card.title} 
                description={card.description} 
                image={card.image} 
                buttonText={card.buttonText} 
                link={card.link}
                type={card.type}
              />
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

        <section className="border-t border-[#d3c7bb]/40 text-center space-y-8 mt-20">
          <h2 className="text-3xl sm:text-4xl mt-16 font-semibold text-[#111111] font-serifHeading">
            Share Your Experience
          </h2>
                    
          <p className="text-[#5b504a] max-w-2xl mx-auto leading-7">
            Your experience with MANIRATNA JEWELS is truly valued. 
            Share your thoughts and let us continue crafting pieces that reflect elegance, trust, and timeless beauty.
          </p>
                    
          <FeedbackModal 
            openFeedback={openFeedback} 
            setOpenFeedback={setOpenFeedback} 
          />
        </section>
      </div>
    </div>
  )
}

export default Home
