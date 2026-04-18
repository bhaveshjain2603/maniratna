import { useEffect, useState } from 'react'
import victorianHero from '../../public/images/victorian-royalty/Victorian.jpg'

const slides = [
  {
    title: 'Crafted to Make You Stand Out',
    subtitle: 'Timeless jewellery for graceful moments.',
    image: victorianHero
  },
  {
    title: 'Heritage Jewellery With Modern Poise',
    subtitle: 'A refined collection designed for elegant occasions.',
    image: victorianHero  
  },
  {
    title: 'Luxury That Feels Personal',
    subtitle: 'Curated pieces for B2B partnerships and discerning customers.',
    image: victorianHero
  }
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative w-full overflow-hidden bg-[#111111]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full lg:h-[85vh] object-cover object-center opacity-90 transition duration-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 text-white sm:px-10">
        <h2 className="mt-4 max-w-3xl text-xl font-semibold leading-tight sm:text-5xl font-serifHeading">{slide.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#efe7db] sm:text-base">{slide.subtitle}</p>
        {/* 🔥 CTA BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          
          <a
            href="/collections"
            className="px-6 py-3 border border-[#b28c49] text-white text-sm font-semibold rounded-md hover:bg-[#b28c49] transition text-center"
          >
            Explore Collection
          </a>
        
          <a
            href="https://wa.me/919448793711?text=Hello%20MANIRATNA%20JEWELS%2C%20I%20am%20interested%20in%20your%20collection."
            className="px-6 py-3 bg-[#25d366] text-white text-sm font-semibold rounded-md hover:bg-[#128c7e] transition text-center"
          >
            Chat on WhatsApp
          </a>
        
        </div>
        
        {/* 🔥 TRUST LINE */}
        <div className="mt-5 text-xs sm:text-sm text-[#e8ded6] space-y-1">
          <p>✔ Trusted by Retailers</p>
          <p>✔ Bulk Orders Available</p>
          <p>✔ Custom Designs Supported</p>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-8 rounded-full transition ${current === index ? 'bg-antiqueGold' : 'bg-white/70 hover:bg-white'}`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
