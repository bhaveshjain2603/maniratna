import { useEffect, useState } from 'react'
import carouselOne from '../../public/images/carousel1.jpg'

const slides = [
  {
    title: 'Crafted to Make You Stand Out',
    subtitle: 'Timeless jewellery for graceful moments.',
    image: carouselOne
  },
  {
    title: 'Heritage Jewellery With Modern Poise',
    subtitle: 'A refined collection designed for elegant occasions.',
    image: carouselOne
  },
  {
    title: 'Luxury That Feels Personal',
    subtitle: 'Curated pieces for B2B partnerships and discerning customers.',
    image: carouselOne
  }
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden">

      {/* IMAGE */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover object-[center_30%] transition duration-700"
      />

      {/* CONTENT (CENTER-LEFT, PREMIUM POSITIONING) */}
      <div className="absolute inset-0 flex items-end lg:items-center px-6 sm:px-12 lg:px-20 pb-10 lg:pb-0">
        <div className="max-w-2xl text-white">

          <h2 className="text-3xl sm:text-5xl font-semibold leading-tight font-serifHeading">
            {slide.title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#f1e8dd] leading-7">
            {slide.subtitle}
          </p>

          {/* CTA BUTTONS */}
          {/* <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="/collections"
              className="bg-white text-[#111] px-6 py-3 text-sm font-semibold hover:bg-[#f2f2f2] transition"
            >
              Explore Collection
            </a>

            <a
              href="https://wa.me/919448793711"
              className="bg-[#25d366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#128c7e] transition"
            >
              Chat on WhatsApp
            </a>
          </div> */}

        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-6 rounded-full transition ${
              current === index ? 'bg-[#b28c49]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel